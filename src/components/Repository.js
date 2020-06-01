import React from 'react';
import IssueList from './IssueList';

const Repository = ({ repository, onStarRepository }) => (
  <div>
    <p>
      <strong>In Repository:</strong>
      <a href={repository.url}>{repository.name}</a>
      <button
        type='button'
        onClick={() =>
          onStarRepository(repository.id, repository.viewerHasStarred)
        }
      >
        {repository.stargazers.totalCount}
        {'-'}
        {repository.viewerHasStarred ? ' Unstar' : ' Star'}
      </button>
      <p>
        <strong>Issues in Repository:</strong>
      </p>
      <IssueList repository={repository} />
    </p>
  </div>
);

export default Repository;
