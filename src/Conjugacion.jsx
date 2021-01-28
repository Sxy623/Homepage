import React from "react";
import "./Conjugacion.css"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function FormTextField(props) {
  return (
    <div className="conjugacion-text-field">
      <TextField id="standard-basic" label={props.label} />
    </div>
  );
}

function FormTextFieldRow(props) {

  const row = props.labels.map((label, index) => {
    return <FormTextField key={index} label={label} />
  });

  return (
    <div className="row">
      {row}
    </div>
  );
}

class Conjugacion extends React.Component {

  render() {
    let question = "hablar"
    return (
      <div>
        <h1>{question}</h1>
        <form noValidate autoComplete="off">
          <div className="conjugacion-form-box">
            <FormTextFieldRow labels={["Yo", "Tú", "Él, ella, usted"]} />
            <FormTextFieldRow labels={["Nosotros, -as", "Vosotros, -as", "Ellos, ellas, ustedes"]} />
          </div>
          <div className="conjugacion-button">
            <Button variant="outlined" color="primary">确认</Button>
          </div>
        </form>
      </div>
    );
  }
}

export default Conjugacion;