import * as GraphQL from 'graphql';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { NextRequest, NextResponse } from 'next/server';
import { cors } from '../../utils/cors';
import { errorResponse, jsonResponse } from '../../utils/responses';
import { typeDefs } from 'graphql-gql/schema';
import { resolvers } from 'graphql-gql/resolvers';
import { Maybe } from 'graphql/jsutils/Maybe';
import { createContext } from 'apollo/context';

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

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export const handler = async (req: NextRequest) => {
  let res: Response;

  if (req.method !== 'POST') {
    res = NextResponse.redirect(
      `https://studio.apollographql.com/sandbox/explorer?endpoint=${req.url}`,
      302
    );
  } else {
    res = await graphqlHandler(req);
  }

  return cors(req, res);
};

const graphqlHandler = async (req: NextRequest): Promise<Response> => {
  try {
    const body = (await req.json()) as GraphqlRequest;
    const { query, variables, operationName } = body;

    //  Context-ийг try/catch дотор үүсгэх
    let contextValue = {};
    try {
      contextValue = await createContext({ req });
    } catch (contextError) {
      console.error('Context Creation Error:', contextError);
      // Хэрэв токен байхгүй бол хоосон context явуулж болно
    }

    const response = await GraphQL.graphql({
      schema: schema,
      source: query,
      variableValues: variables,
      operationName: operationName,
      contextValue: contextValue,
    });

    return jsonResponse(response);
  } catch (e) {
    console.error('General GraphQL Error:', e);
    return errorResponse(400, String(e));
  }
};

export default handler;
