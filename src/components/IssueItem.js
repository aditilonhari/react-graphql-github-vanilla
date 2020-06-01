import React from 'react';

const IssueItem = ({ issue }) => (
  <li key={issue.node.id}>
    <a href={issue.node.url}>{issue.node.title}</a>
    <ul>
      {issue.node.reactions.edges.map((reaction) => (
        <li key={reaction.node.id}>{reaction.node.content}</li>
      ))}
    </ul>
  </li>
);

export default IssueItem;
