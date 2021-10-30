import React from 'react';

export default class CustomerForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      customer: {
        zipcode: props.zipcode,
        timeNeeded: props.timeNeeded,
        storageSpace: props.storageSpace
      }
    }
  }

  handleZipcodeChanged(event) {
    var customer        = this.state.customer;
    customer.zipcode  = event.target.value;

    this.setState({ customer: customer });
  }

  handleTimeNeededChanged(event) {
    var customer      = this.state.customer;
    customer.timeNeeded = event.target.value;

    this.setState({ customer: customer });
  }

  handleStorageSpaceChanged(event) {
    var customer    = this.state.customer;
    customer.storageSpace = event.target.value;

    this.setState({ customer: customer });
  }

  handleButtonClicked() {
    console.log(this.state.customer);
  }

  render() {
    return (
      <div>
        <label>
          Zip code: 
        </label>
        <input type="text" value={this.state.customer.zipcode} onChange={this.handleZipcodeChanged.bind(this)}/>
        <br/>
        <label>
          Last Name:
        </label>
        <input type="text" value={this.state.customer.timeNeeded} onChange={this.handleTimeNeededChanged.bind(this)}/>
        <br/>
        <label>
          Status:
        </label>
        <select value={this.state.customer.storageSpace} onChange={this.handleStorageSpaceChanged.bind(this)}>
          <option value="PENDING">
            Pending
          </option>
          <option value="APPROVED">
            Approved
          </option>
        </select>
        <hr/>
        <button onClick={this.handleButtonClicked.bind(this)}>
          Search
        </button>
      </div>
    );
  }
}