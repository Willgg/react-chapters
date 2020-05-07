import React, { Component } from "react";
import chapters from "../data";

import ChaptersList from "./chapters_list";
import Question from "./question";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chapters: chapters,
      selectedChapter: chapters[2]
    };
  }

  selectChapter = chapter => {
    this.setState({ selectedChapter: chapter });
  };

  render() {
    return (
      <React.Fragment>
        <ChaptersList
          selectedChapter={this.state.selectedChapter}
          selectChapter={this.selectChapter}
          chapters={this.state.chapters}
        />
        <Question question={this.state.selectedChapter.questions[0]} />
      </React.Fragment>
    );
  }
}

export default App;
