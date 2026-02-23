import handler from '../pages/api/graphql';
import * as GraphQL from 'graphql';
import { NextRequest, NextResponse } from 'next/server';

// 1. GraphQL санг хэсэгчилж mock хийх
jest.mock('graphql', () => {
  const actualGraphQL = jest.requireActual('graphql');
  return {
    ...actualGraphQL,
    graphql: jest.fn(), // Зөвхөн graphql функцийг mock болгоно
  };
});

// 2. Бусад хамааралтай файлуудыг Cloudflare алдаанаас сэргийлж mock хийх
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
    status,
  })),
}));

jest.mock('next/server', () => ({
  NextResponse: {
    redirect: jest.fn((url) => ({ status: 302, url })),
    json: jest.fn((data) => ({
      json: async () => data,
      status: 200,
    })),
  },
}));

describe('GraphQL API Handler', () => {
  beforeEach(() => {
    jest.clearAllMocks();
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

    // Одоо GraphQL.graphql нь шууд mock function болсон байгаа
    (GraphQL.graphql as jest.Mock).mockResolvedValue(mockResponse);

    const result = await handler(req);
    const jsonResult = await result.json();

    expect(jsonResult).toEqual(mockResponse);
    expect(GraphQL.graphql).toHaveBeenCalled();
  });
});
