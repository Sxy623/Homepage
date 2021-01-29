import React from "react";
import "./Conjugacion.css"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function FormTextField(props) {

  const handleChange = (event) => {
    props.onChange(props.index, event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      props.checkAnswer();
    }
  }

  const error = props.status === false;
  const helperText = props.status ? "" : "Incorrect.";

  return (
    <div className="conjugacion-text-field">
      <TextField
        id="standard-basic"
        label={props.label}
        value={props.value}
        error={error}
        helperText={helperText}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

function FormTextFieldRow(props) {

  const row = props.labels.map((label, order) => {
    let index = props.indices[order]
    return <FormTextField
      key={order}
      label={label}
      index={index}
      value={props.formValues[index]}
      status={props.status[index]}
      onChange={props.onChange}
      checkAnswer={props.checkAnswer}
    />
  });

  return (
    <div className="row">
      {row}
    </div>
  );
}

let questions = [
  {
    description: "ser",
    answers: ["soy", "eres", "es", "somos", "sois", "son"],
  },
  {
    description: "hablar",
    answers: ["hablo", "hablas", "habla", "hablamos", "habláis", "hablan"],
  },
  {
    description: "comer",
    answers: ["como", "comes", "come", "comemos", "coméis", "comen"],
  },
  {
    description: "escribir",
    answers: ["escribo", "escribes", "escribe", "escribimos", "escribís", "escriben"],
  }
]

function randomQuestion() {
  let index = Math.floor(Math.random() * questions.length);
  return questions[index];
}

class Conjugacion extends React.Component {

  constructor(props) {
    super(props);
    let question = randomQuestion();
    this.state = {
      formValues: Array(6).fill(""),
      description: question.description,
      answers: question.answers,
      status: Array(6).fill(true),
      showNext: false
    }
  }

  handleChange(index, value) {
    let formValues = this.state.formValues.slice();
    formValues[index] = value;
    this.setState({
      formValues: formValues
    });
  }

  checkAnswer() {
    let status = [];
    let showNext = true;
    const answers = this.state.answers;
    const formValues = this.state.formValues;
    for (let i = 0; i < answers.length; i++) {
      if (answers[i] === formValues[i]) {
        status.push(true)
      } else {
        status.push(false)
        showNext = false;
      }
    }
    this.setState({
      status: status,
      showNext: showNext
    });
  }

  nextQuestion() {
    let question = randomQuestion();
    this.setState({
      formValues: Array(6).fill(""),
      description: question.description,
      answers: question.answers,
      status: Array(6).fill(true),
      showNext: false
    });
  }

  render() {
    let description = this.state.description;
    return (
      <div>
        <h1>{description}</h1>
        <form noValidate autoComplete="off">
          <div className="conjugacion-form-box">
            <FormTextFieldRow
              labels={["Yo", "Tú", "Él, ella, usted"]}
              indices={[0, 1, 2]}
              formValues={this.state.formValues}
              status={this.state.status}
              onChange={(index, value) => this.handleChange(index, value)}
              checkAnswer={() => this.checkAnswer()}
            />
            <FormTextFieldRow
              labels={["Nosotros, -as", "Vosotros, -as", "Ellos, ellas, ustedes"]}
              indices={[3, 4, 5]}
              formValues={this.state.formValues}
              status={this.state.status}
              onChange={(index, value) => this.handleChange(index, value)}
              checkAnswer={() => this.checkAnswer()}
            />
          </div>
          <div className="conjugacion-button">
            <Button variant="outlined" color="primary" onClick={() => this.checkAnswer()}>确认</Button>
          </div>
          {
            this.state.showNext &&
            <div className="conjugacion-button">
              <Button variant="outlined" color="primary" onClick={() => this.nextQuestion()}>下一题</Button>
            </div>
          }
        </form>
      </div>
    );
  }
}

export default Conjugacion;
