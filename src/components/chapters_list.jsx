import React from "react";
import Chapter from "./chapter";

const ChaptersList = props => {
  return (
    <div className="chapters-list">
      {props.chapters.map(chapter => (
        <Chapter
          selected={props.selectedChapter == chapter}
          selectChapter={props.selectChapter}
          key={chapter.title}
          chapter={chapter}
        />
      ))}
    </div>
  );
};

export default ChaptersList;
