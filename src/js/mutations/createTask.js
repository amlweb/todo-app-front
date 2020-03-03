import { commitMutation, graphql } from 'react-relay';
import environment from '../../enviroment';

const mutation = graphql`
  mutation createTaskMutation($title: String, $content: String) {
    createTask(title: $title, content: $content) {
      _id
      title
      content
    }
  }
`;

function createTaskMutation(title, content) {
  const variables = {
    title,
    content
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

export default createTaskMutation;