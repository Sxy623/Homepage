import React from "react";
import "./Conjugacion.css"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Conjugacion extends React.Component {

  render() {
    let question = "hablar"
    return (
      <div>
        <h1>{question}</h1>
        <form noValidate autoComplete="off">
          <div className="text-field">
            <TextField id="standard-basic" label="Yo" />
          </div>
          <div className="text-field">
            <TextField id="standard-basic" label="Tú" />
          </div>
          <div className="text-field">
            <TextField id="standard-basic" label="Él, ella, usted" />
          </div>
          <br />
          <div className="text-field">
            <TextField id="standard-basic" label="Nosotros, -as" />
          </div>
          <div className="text-field">
            <TextField id="standard-basic" label="Vosotros, -as" />
          </div>
          <div className="text-field">
            <TextField id="standard-basic" label="Ellos, ellas, ustedes" />
          </div>
          <br />
          <div className="button">
           <Button className="button" variant="outlined" color="primary">确认</Button>
          </div>
        </form>
      </div>
    );
  }
}

export default Conjugacion;