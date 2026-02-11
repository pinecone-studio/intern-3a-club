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
  enum ClubType { self, mentor }
  enum ClubStatus { pending, approved, declined }

  type Club {
    id: ID!
    name: String!
    description: String
    type: ClubType!
    status: ClubStatus!
  }

  type Query {
    getClubs: [Club]
  }
`;

const resolvers = {
  Query: {
    getClubs: async () => {
      return await DB.query.clubsTable.findMany();
    },
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
      rootValue: {  ...resolvers.Query },
      variableValues: variables,
      operationName: operationName,
    //   contextValue: await getContextValue(req),
    });
    return jsonResponse(response);
  } catch (e) {
    console.error(e);
    return errorResponse(400, String(e));
  }
};

export default handler;
