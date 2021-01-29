import React from "react";
import "./Conjugacion.css"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function FormTextField(props) {

  const handleChange = (event) => {
    props.onChange(props.index, event.target.value) ;
  };

  return (
    <div className="conjugacion-text-field">
      <TextField id="standard-basic" label={props.label} value={props.value} onChange={handleChange} />
    </div>
  );
}

function FormTextFieldRow(props) {

  const row = props.labels.map((label, order) => {
    let index = props.indices[order]
    return <FormTextField key={order} label={label} index={index} value={props.formValues[index]} onChange={props.onChange} />
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
      formValues: Array(6).fill("")
    }
  }

  handleChange(index, value) {
    let formValues = this.state.formValues.slice();
    formValues[index] = value;
    this.setState({
      formValues: formValues
    });
  }

  render() {
    let question = "hablar"
    return (
      <div>
        <h1>{question}</h1>
        <form noValidate autoComplete="off">
          <div className="conjugacion-form-box">
            <FormTextFieldRow labels={["Yo", "Tú", "Él, ella, usted"]} indices={[0, 1, 2]} formValues={this.state.formValues} onChange={(index, value) => this.handleChange(index, value)}/>
            <FormTextFieldRow labels={["Nosotros, -as", "Vosotros, -as", "Ellos, ellas, ustedes"]} indices={[3, 4, 5]} formValues={this.state.formValues} />
          </div>
          <div className="conjugacion-button">
            <Button variant="outlined" color="primary" onClick={() => console.log(this.state)}>确认</Button>
          </div>
        </form>
      </div>
    );
  }
}

export default Conjugacion;