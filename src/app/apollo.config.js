// apollo.config.js
module.exports = {
  // this is the GRAPH_REF positional arg in Rover
  name: 'my-graph@prod',
  endpoint: {
    url: 'https://api.github.com/graphql',
    headers: {
      // passed with the --header flag in Rover
      authorization: 'Bearer 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',
    },
  },
};
