import React, { Component } from 'react';

class AddForm extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const data = new FormData(form);
        const bodyData = {}
        for (let name of data.keys()) {
            bodyData[name] = data.get(name)
        }

        fetch('http://localhost:9000/api/employees/add', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(bodyData),
        });
        event.target.reset();
        this.setState(this.props.triggerUpdate);
        window.location.reload();
    }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
            <label htmlFor="firstName">Enter first name</label>
            <input id="firstName" name="firstName" type="text" className="form-control" />
        </div>
        <div className="form-group">
            <label htmlFor="lastName">Enter last name</label>
            <input id="lastName" className="form-control" name="lastName" type="text" />
        </div>
        <div className="form-group">
            <label htmlFor="email">Enter your email</label>
            <input id="email" className="form-control" name="email" type="email" />
        </div>
        <div className="form-group">
            <label htmlFor="photoUrl">Enter a url to your photo</label>
            <input id="photoUrl" className="form-control" name="photoUrl" type="text" />
        </div>
        <div className="form-group">
            <label htmlFor="phone">Enter a phone number</label>
            <input id="phone" className="form-control" name="phone" type="text" />
        </div>
        <button onClick={this.props.triggerUpdate}>Add employee</button>
      </form>
    );
  }
}

export default AddForm;