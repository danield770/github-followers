const { GraphQLClient, gql } = require('graphql-request');
const path = require('path');
const express = require('express');
const cors = require('cors');

const app = express();
const port = 8080;
const url = 'https://api.github.com/graphql';

// Configure Environment
require('dotenv').config();

// Do not have your token in a string in your code, especially if you use source control
// https://medium.com/codait/environment-variables-or-keeping-your-secrets-secret-in-a-node-js-app-99019dfff716
const TOKEN = process.env.TOKEN;
// console.log('TOKEN: ', TOKEN);

// Create the graphQL client
const graphQLClient = new GraphQLClient(url, {
  headers: {
    authorization: `Bearer ${TOKEN}`,
  },
});

app.use(cors());

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get('/', async (req, res) => {
  // The query that gets profile information
  const query = gql`
    query ($user: String!, $cursor: String) {
      user(login: $user) {
        followers(first: 30, after: $cursor) {
          totalCount
          edges {
            node {
              login
              name
            }
          }
          pageInfo {
            endCursor
            hasNextPage
          }
        }
      }
    }
  `;
  const variables = {
    user: req.query.user,
    cursor: req.query.cursor,
  };
  // Make Graphql call
  const githubRes = await graphQLClient.request(query, variables);
  // Respond with results
  res.json(githubRes);
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
