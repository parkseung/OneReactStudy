import React from "react";
import "./TodoItem.css";

const TodoItem = ({ id, content, isDone, createdDate, onUpdate, onDelete }) => {
  console.log(`${id} TodoItem 업데이트`);
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
