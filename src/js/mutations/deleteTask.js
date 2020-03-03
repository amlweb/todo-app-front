import { commitMutation, graphql } from 'react-relay';
import environment from '../../enviroment';

const mutation = graphql`
  mutation deleteTaskMutation($_id: ID) {
    deleteTask(_id: $_id) {
      _id
      title
      content
    }
  }
`;

function deleteTaskMutation(id) {
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

export default deleteTaskMutation;