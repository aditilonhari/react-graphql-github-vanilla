import React from 'react';
import IssueItem from './IssueItem';

const IssueList = ({ repository }) => (
  <ul>
    {repository.issues.edges.map((issue) => (
      <IssueItem issue={issue} />
    ))}
  </ul>
);

export default IssueList;
