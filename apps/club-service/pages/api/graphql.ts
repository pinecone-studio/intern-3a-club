// import { resolvers, typeDefs } from '@/graphql';
// import { Maybe } from '@/graphql/generated';
// import { authUserFromReq } from '@pinecone-monorepo/clerk/server';
import { buildASTSchema, graphql } from 'graphql';
import { NextRequest, NextResponse } from 'next/server';
import { cors } from '../../utils/cors';
import { errorResponse, jsonResponse } from '../../utils/responses';
import { Maybe } from 'graphql/jsutils/Maybe';
import { DB } from '../../utils/drizzle';
import { gql } from 'graphql-tag';


// 1. Schema тодорхойлох
const typeDefsString = gql`
  # Enum-ууд (Чиний schema.ts дээрх check constraint-уудтай таарах ёстой)
  enum Gender { FEMALE, MALE, OTHER }
  enum ClubStatus { pending, approved, declined }
  enum CourseType { CODING, DESIGN }

  type Student {
    id: ID!
    firstName: String
    lastName: String
    studentCode: String!
    azureEmail: String!
    activeStatus: String!
  }

  type Teacher {
    id: ID!
    name: String!
    email: String!
    isActive: Int
  }

  type Class {
    id: ID!
    className: String!
    classNumber: String!
    course: CourseType!
  }

  type Club {
    id: ID!
    name: String!
    description: String
    status: ClubStatus!
  }

  # Бүх хүснэгтийг дуудах Query-нүүд
  type Query {
    getClubs: [Club]
    getStudents: [Student]
    getTeachers: [Teacher]
    getClasses: [Class]
  }
`;

const resolvers = {
  getClubs: async () => {
    return await DB.query.clubs.findMany();
  },
  getStudents: async () => {
    return await DB.query.students.findMany();
  },
  getTeachers: async () => {
    return await DB.query.teachers.findMany();
  },
  getClasses: async () => {
    return await DB.query.classes.findMany();
  },
};

type GraphqlRequest = {
  query: string;
  variables?: Maybe<{
    readonly [variable: string]: unknown;
  }>;
  operationName?: Maybe<string>;
};

export const config = {
  runtime: 'edge',
};

// const getContextValue = async (req: NextRequest) => {
//   const authUser = await authUserFromReq(req);
//   return { authUser };
// };

const handler = async (req: NextRequest) => {
  let res: Response;

  if (req.method !== 'POST') {
    res = NextResponse.redirect(`https://studio.apollographql.com/sandbox/explorer?endpoint=${req.url}`, 302);
  } else {
    res = await graphqlHandler(req);
  }

  return cors(req, res);
};

const graphqlHandler = async (req: NextRequest): Promise<Response> => {
  try {
    const body = (await req.json()) as GraphqlRequest;
    const { query, variables, operationName } = body;

  const response = await graphql({
  schema: buildASTSchema(typeDefsString),
  source: query,
  rootValue: resolvers, // Заавал задлах шаардлагагүй, доторх функцүүд нь Query-тэй таарна
  variableValues: variables,
  operationName: operationName,
});
    return jsonResponse(response);
  } catch (e) {
    console.error(e);
    return errorResponse(400, String(e));
  }
};

export default handler;
