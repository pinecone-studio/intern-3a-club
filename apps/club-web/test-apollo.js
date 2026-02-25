const apolloTesting = require('@apollo/client/testing');
console.log('MockedProvider:', apolloTesting.MockedProvider);
const apolloClient = require('@apollo/client');
console.log('useQuery:', apolloClient.useQuery);
const apolloReact = require('@apollo/client/react');
console.log('useQuery from react:', apolloReact.useQuery);
