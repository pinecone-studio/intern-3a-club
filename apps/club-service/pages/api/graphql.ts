import * as GraphQL from 'graphql';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { NextRequest, NextResponse } from 'next/server';
import { cors } from '../../utils/cors';
import { errorResponse, jsonResponse } from '../../utils/responses';
import { typeDefs } from 'graphql-gql/schema';
import { resolvers } from 'graphql-gql/resolvers';
import { Maybe } from 'graphql/jsutils/Maybe';

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
  typeDefs, // нэгтгэсэн typeDefs
  resolvers, // бүх Mutation, Query-г агуулсан resolvers
});

const handler = async (req: NextRequest) => {
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

    const response = await GraphQL.graphql({
      schema: schema,
      source: query,
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
