import React from 'react';
import { graphql, QueryRenderer } from 'react-relay';
import environment from './../enviroment';

export default class App extends React.Component {
  render() {
    return (
      <QueryRenderer 
        environment={environment}
        query={graphql`
          query AppQuery {
            tasks {
              _id
              title
              content
            }
          }
        `}
        variables={{}}
        render={({ error, props }) => {
          if (error) {
            return <div>Error! {error.message}</div>;
          }
          if (!props) {
            return <div>Loading...</div>;
          }
          return <div>Hello world</div>;
        }}
      />
    );
  }
}
