import React, {useState} from 'react';
import createTaskMutation from '../mutations/createTask';
// import delateTaskMutation from '../mutations/delateTask';


const MainPage = ({ tasks }) => {
  console.log(tasks);
  const [title, setTitle] = useState();
  const [content, setContent] = useState();

  return (
    <div>
      <div>TO jest ten swiat</div>

      <ul className="list">
        {tasks.map(task => (
            <li key={task.id}>
              <h4>{task.title}</h4>
              <p>{task.content}</p>
              {/* <button onClick={() => delateTaskMutation(task.id) }>delate</button> */}
            </li>
        ))}
        <li>
          <input value={title} type="text" name="title" onChange={e => setTitle(e.target.value)} />
          <textarea name="content" onChange={e => setContent(e.target.value)}>{content}</textarea>
          <button className="button" onClick={() => createTaskMutation(title, content)}>add</button>
        </li>
      </ul>
    </div>
  );
};

export default MainPage;