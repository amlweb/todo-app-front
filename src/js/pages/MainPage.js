import React, { useState } from 'react';
import createTaskMutation from '../mutations/createTask';
import deleteTaskMutation from '../mutations/deleteTask';

import 'bulma';


const MainPage = ({ tasks }) => {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();

  return (
    <div className="page">
      <header>
        <h1>TODO task list</h1>
      </header>

      <section className="section">
        <div className="container">
          <ul className="list">
            {tasks.map((task, index) => (
              <li key={index}>
                <h4>{task.title}</h4>
                <p>{task.content}</p>
                <button className="button is-danger is-small" onClick={() => deleteTaskMutation(task.id) }>delete</button>
              </li>
            ))}
          </ul>

          <div className="field">
                <div className="control">
                  <input value={title} type="text" name="title" onChange={e => setTitle(e.target.value)} />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <textarea name="content" onChange={e => setContent(e.target.value)}>{content}</textarea>
                </div>
              </div>
              <button className="button is-primary" onClick={() => createTaskMutation(title, content)}>add</button>
        </div>
      </section>


    </div>
  );
};

export default MainPage;