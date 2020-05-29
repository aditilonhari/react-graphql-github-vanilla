import axios from 'axios';

const axiosGitHubGraphQL = axios.create({
  baseURL: 'https://api.github.com/graphql',
  headers: {
    Authorization: `bearer ${process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`
  }
});

export const getIssuesOfRepository = (path) => {
  const [organization, repository] = path.split('/');
  return axiosGitHubGraphQL.post('', {
    query: GET_ISSUES_OF_REPOSITORY,
    variables: { organization, repository }
  });
};
export const resolveIssuesQuery = (queryResult) => () => ({
  organization: queryResult.data.data.organization,
  errors: queryResult.data.errors
});

const GET_ISSUES_OF_REPOSITORY = `
query ($organization: String!, $repository: String!) {
organization(login: $organization) {
    name
    url
    repository(name: $repository) {
      name
      url
      issues(last: 5) {
        edges {
          node {
            id
            title
            url
          }
        }
      }
    }
  }
}
`;
