import React, { Component } from 'react';
import Organization from './components/Organization';
import { getIssuesOfRepository, resolveIssuesQuery } from './data/graphql';

const TITLE = 'React GraphQL GitHub Client';

class App extends Component {
  state = {
    path: 'the-road-to-learn-react/the-road-to-learn-react',
    organization: null,
    errors: null
  };
  componentDidMount() {
    // fetch data
    this.onFetchFromGitHub(this.state.path);
  }
  onChange = (event) => {
    this.setState({ path: event.target.value });
  };
  onSubmit = (event) => {
    // fetch data
    this.onFetchFromGitHub(this.state.path);
    event.preventDefault();
  };

  onFetchFromGitHub = (path) => {
    getIssuesOfRepository(path).then((queryResult) =>
      this.setState(resolveIssuesQuery(queryResult))
    );
  };

  render() {
    const { path, organization, errors } = this.state;

    return (
      <div>
        <h1>{TITLE}</h1>
        <form onSubmit={this.onSubmit}>
          <label htmlFor='url'>Show open issues for https://github.com/</label>
          <input
            id='url'
            type='text'
            value={path}
            onChange={this.onChange}
            style={{ width: '300px' }}
          />
          <button type='submit'>Search</button>
        </form>
        <hr />
        {organization ? (
          <Organization organization={organization} errors={errors} />
        ) : (
          <p>No information yet ...</p>
        )}
      </div>
    );
  }
}

export default App;
