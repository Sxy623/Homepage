import React from 'react'
import axios from 'axios'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'

class Item extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isHidden: false
    }
  }

  hide = () => {
    this.setState({
      isHidden: true
    })
  }

  render () {
    if (this.state.isHidden) {
      return null
    } else {
      return (
        <tr>
          <td>{this.props.name}</td>
          <td>{this.props.age}</td>
          <td>
            <IconButton aria-label="delete" color="primary" size="small" onClick={this.hide}>
              <DeleteIcon />
            </IconButton>
          </td>
        </tr>
      )
    }
  }
}

function List (props) {
  const listItems = props.items.map((item, index) =>
    <Item key={index} name={item.name} age={item.age} />
  )
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {listItems}
      </tbody>
    </table>
  )
}

class InfoTable extends React.Component {
  constructor (props) {
    super(props)
    this.api = 'http://39.107.66.30:3000/mock/11/test'
    this.state = null
  }

  componentDidMount () {
    axios.get(this.api)
      .then(response => {
        this.setState({
          response: response
        })
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }

  render () {
    if (this.state?.response?.data?.status === 400) {
      return (
        <div>
          <h3>Failed!</h3>
        </div>
      )
    } else if (this.state?.response?.data?.status === 200) {
      return (
        <div>
          <h3>Success!</h3>
          <List items={this.state?.response?.data?.data} />
        </div>
      )
    } else {
      return (
        <div>
          <h3>Loading ...</h3>
        </div>
      )
    }
  }
}

export default InfoTable
