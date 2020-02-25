import React from 'react';
import createTaskMutation from '../mutations/createTask';
// import deleteTaskMutation from '../mutations/deleteTask';


const MainPage = ({ data }) => {
  console.log(data);
  return (
    <div>
      <div>TO jest ten swiat</div>

      <ul className="list">
      
        <li>
          <div className="form__field">
            <input type="text" name="title"/>
              <textarea name="content" />
          </div>
          <button className="button" onClick={() => createTaskMutation()}>add</button>
        </li>
      </ul>
    </div>
  );
};

export default MainPage;