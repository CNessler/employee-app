import React, { Component } from 'react';

class EditForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: this.props.response.first_name,
            lastName: this.props.response.last_name,
            photoUrl: this.props.response.picture,
            email: this.props.response.email,
            phone: this.props.response.phone,
        }
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

        fetch('http://localhost:9000/api/employees/edit/' + this.props.response.id, {
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
            <input id="firstName" className="form-control" name="firstName" type="text" defaultValue={this.state.firstName}/>
        </div>
        <div className="form-group">
            <label htmlFor="lastName">Enter last name</label>
            <input id="lastName" className="form-control" name="lastName" type="text" defaultValue={this.state.lastName}/>
        </div>
        <div className="form-group">
            <label htmlFor="email">Enter your email</label>
            <input id="email" className="form-control" name="email" type="email" defaultValue={this.state.email}/>
        </div>
        <div className="form-group">
            <label htmlFor="photoUrl">Enter a url to your photo</label>
            <input id="photoUrl" className="form-control" name="photoUrl" type="text" defaultValue={this.state.photoUrl}/>
        </div>
        <div className="form-group">
            <label htmlFor="phone">Enter a phone number</label>
            <input id="phone" className="form-control" name="phone" type="text" defaultValue={this.state.phone}/>
        </div>
        <button onClick={this.props.updateNow}>Edit employee</button>
      </form>
    );
  }
}

export default EditForm;