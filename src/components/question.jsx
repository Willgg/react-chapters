import React, { Component } from "react";
import Answer from "./answer";

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAnswer: null
    };
  }

  selectAnswer = answer => {
    this.setState({ selectedAnswer: answer });
  };

  renderAnswers = () => {
    return this.props.question.answers.map((answer, i) => {
      return (
        <Answer
          key={i}
          selected={this.state.selectedAnswer === answer}
          selectAnswer={this.selectAnswer}
          answer={answer}
        />
      );
    });
  };

  render() {
    if (this.props.question === undefined) {
      return <div className="question">No question :(</div>;
    }
    return (
      <React.Fragment>
        <div className="question">
          {this.props.question.title}
          {this.renderAnswers()}
        </div>
      </React.Fragment>
    );
  }
}

export default Question;
