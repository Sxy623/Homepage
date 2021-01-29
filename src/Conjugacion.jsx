import React from "react";
import "./Conjugacion.css"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function FormTextField(props) {

  const handleChange = (event) => {
    props.onChange(props.index, event.target.value);
  };

  const error = props.status === false;
  const helperText = props.status ? "" : "Incorrect.";

  return (
    <div className="conjugacion-text-field">
      <TextField error={error} id="standard-basic" label={props.label} value={props.value} onChange={handleChange} helperText={helperText} />
    </div>
  );
}

function FormTextFieldRow(props) {

  const row = props.labels.map((label, order) => {
    let index = props.indices[order]
    return <FormTextField key={order} label={label} index={index} value={props.formValues[index]} status={props.status[index]} onChange={props.onChange} />
  });

  return (
    <div className="row">
      {row}
    </div>
  );
}

class Conjugacion extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formValues: Array(6).fill(""),
      answers: ["hablo", "hablas", "habla", "hablamos", "habláis", "hablan"],
      status: Array(6).fill(true)
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
    const answers = this.state.answers;
    const formValues = this.state.formValues;
    for (let i = 0; i < answers.length; i++) {
      if (answers[i] === formValues[i]) {
        status.push(true)
      } else {
        status.push(false)
      }
    }
    this.setState({
      status: status
    });
  }

  render() {
    let question = "hablar"
    return (
      <div>
        <h1>{question}</h1>
        <form noValidate autoComplete="off">
          <div className="conjugacion-form-box">
            <FormTextFieldRow
              labels={["Yo", "Tú", "Él, ella, usted"]}
              indices={[0, 1, 2]}
              formValues={this.state.formValues}
              status={this.state.status}
              onChange={(index, value) => this.handleChange(index, value)}
            />
            <FormTextFieldRow
              labels={["Nosotros, -as", "Vosotros, -as", "Ellos, ellas, ustedes"]}
              indices={[3, 4, 5]}
              formValues={this.state.formValues}
              status={this.state.status}
              onChange={(index, value) => this.handleChange(index, value)}
            />
          </div>
          <div className="conjugacion-button">
            <Button variant="outlined" color="primary" onClick={() => this.checkAnswer()}>确认</Button>
          </div>
        </form>
      </div>
    );
  }
}

export default Conjugacion;