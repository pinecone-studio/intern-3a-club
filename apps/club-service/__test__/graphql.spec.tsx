import handler from '../pages/api/graphql';
import * as GraphQL from 'graphql';
import { NextRequest, NextResponse } from 'next/server';

// 1. GraphQL санг mock хийх
jest.mock('graphql', () => {
  const actualGraphQL = jest.requireActual('graphql');
  return {
    ...actualGraphQL,
    graphql: jest.fn(),
  };
});

// 2. Бусад хамаарлуудыг mock хийх
jest.mock('graphql-gql/schema', () => ({
  typeDefs: 'type Query { test: String }',
}));

jest.mock('graphql-gql/resolvers', () => ({
  resolvers: { Query: { test: () => 'success' } },
}));

jest.mock('../utils/cors', () => ({
  cors: jest.fn((req, res) => res),
}));

jest.mock('../utils/responses', () => ({
  jsonResponse: jest.fn((data) => ({
    json: async () => data,
    status: 200,
  })),
  errorResponse: jest.fn((status, msg) => ({
    json: async () => ({ status, msg }),
    status: status, // 400 status-ийг энд дамжуулна
  })),
}));

jest.mock('next/server', () => ({
  NextResponse: {
    redirect: jest.fn((url) => ({
      status: 302,
      url,
    })),
  },
}));

describe('GraphQL API Handler Full Coverage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    // Console error-ийг тест дээр харуулахгүй байх (цэвэрхэн харагдахын тулд)
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    (console.error as jest.Mock).mockRestore();
  });

  it('should redirect to Apollo Sandbox for GET requests', async () => {
    const req = {
      method: 'GET',
      url: 'http://localhost/api/graphql',
    } as unknown as NextRequest;

    await handler(req);
    expect(NextResponse.redirect).toHaveBeenCalled();
  });

  it('should handle successful GraphQL POST requests', async () => {
    const mockResponse = { data: { test: 'success' } };
    const req = {
      method: 'POST',
      json: jest.fn().mockResolvedValue({ query: '{ test }' }),
      url: 'http://localhost/api/graphql',
    } as unknown as NextRequest;

    (GraphQL.graphql as jest.Mock).mockResolvedValue(mockResponse);

    const result = await handler(req);
    const jsonResult = await result.json();

    expect(jsonResult).toEqual(mockResponse);
    expect(result.status).toBe(200);
  });

  /** * Coverage Fix: 55-56-р мөрийг (Catch block) тестлэх
   * graphqlHandler дотор req.json() алдаа гаргах үед
   */
  it('should return errorResponse when JSON body is invalid (Catch block coverage)', async () => {
    const req = {
      method: 'POST',
      json: jest.fn().mockRejectedValue(new Error('Invalid JSON')), // Алдаа зориудаар гаргах
      url: 'http://localhost/api/graphql',
    } as unknown as NextRequest;

    const result = await handler(req);
    const jsonResult = await result.json();

    // 55-56-р мөр ажиллаж console.error болон errorResponse дуудагдсан эсэхийг шалгах
    expect(console.error).toHaveBeenCalled();
    expect(jsonResult).toEqual({ status: 400, msg: 'Error: Invalid JSON' });
    expect(result.status).toBe(400);
  });
});
