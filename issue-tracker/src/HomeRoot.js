import { usePreloadedQuery } from 'react-relay/hooks';
import graphql from 'babel-plugin-relay/macro';
import Issues from './Issues';
import React from 'react';

export default function HomeRoot(props) {
  const data = usePreloadedQuery(graphql`
    query HomeRootIssuesQuery($owner: String!, $name: String!) {
      repository(owner: $owner, name: $name) {
        owner { login }
        name
        ...Issues_repository
      }
    }
  `, props.prepared.issuesQuery);
  const { repository } = data;

  return (
    <div className="root">
      <header className="header">
        {repository.owner.login}/{repository.name}: Issues
      </header>
      <section className="content">
        <Issues repository={repository} />
      </section>
    </div>
  );
}
