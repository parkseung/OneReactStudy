import React, { useContext } from "react";
import "./TodoItem.css";
import { TodoStateContext } from "../App";

const TodoItem = ({ id, content, isDone, createdDate }) => {
  console.log(`${id} TodoItem 업데이트`);
  const { onUpdate, onDelete } = useContext(TodoStateContext);

  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onDeleteItem = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <div className="checkbox_col">
        <input type="checkbox" checked={isDone} onChange={onChangeCheckbox} />
      </div>
      <div className="title_col">{content}</div>
      <div className="date_col">
        {new Date(createdDate).toLocaleDateString()}
      </div>
      <div className="btn_col">
        <button onClick={onDeleteItem}>삭제</button>
      </div>
    </div>
  );
};

export default React.memo(TodoItem);
