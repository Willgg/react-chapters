import React from "react";

const Chapter = props => {
  const handleClick = event => {
    props.selectChapter(props.chapter);
  };

  return (
    <div className={props.selected ? "active" : ""} onClick={handleClick}>
      {props.chapter.title}
    </div>
  );
};

export default Chapter;
