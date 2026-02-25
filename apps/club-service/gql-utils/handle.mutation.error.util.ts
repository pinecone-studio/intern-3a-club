import { GraphQLError } from 'graphql';

export const handleMutationError = (error: unknown): never => {
  const message = error instanceof Error ? error.message : 'Unknown error';
  throw new GraphQLError(`Алдаа гарлаа: ${message}`);
};
