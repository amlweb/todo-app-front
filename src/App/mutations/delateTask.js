import { commitMutation, graphql } from 'react-relay';
import environment from '../../enviroment';

const mutation = graphql`
  mutation delateTaskMutation($id: ID) {
    delateTask(id: $id) {
      _id
      title
      content
    }
  }
`;

function delateTaskMutation(id) {
  const variables = {
    id
  };

  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      console.log('Response received from server.');
    },
    onError: err => console.error(err)
  });
}

export default delateTaskMutation;