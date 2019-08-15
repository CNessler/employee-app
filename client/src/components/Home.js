import React, { Component } from 'react';
import AddForm from './AddForm';
import EditForm from './EditForm';
import {Container, Button} from 'reactstrap';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.updateState = this.updateState.bind(this);
        this.state = { response: [], page: "", editResponse: ""}
    }

    updateState(){
        this.setState({page: ""});
    }

    delete(key){
        fetch('http://localhost:9000/api/employees/delete/'+key.id, {
            method: 'POST',
        });
        window.location.reload();
        
    }

    editState(response) {
        this.setState({editResponse: response, page: "edit"})
    }

    callAPI() {
        fetch('http://localhost:9000/api/employees')
            .then(response => response.json())
            .then(data => this.setState({response: data.data}));
    }

    componentDidMount() {
        this.callAPI();
    }

    changeState(option) {
        this.setState({page: option});
    }

    render() {
        let data;
        if(this.state.page === "add") {
            data = <AddForm triggerUpdate={this.updateState}/>;
        } else if(this.state.page === "edit") {
            data = <EditForm response={this.state.editResponse} triggerUpdate={this.updateState}/>;
        } else {
            data = "";
        }
        return (
        <Container>
            <div>
            <Button className="btn btn-primary" onClick={() =>this.changeState("add")}>Add Employee</Button>
            {data}
            <div className="row">
            {this.state.response.map((response, key) => 
                <div className="col-sm-3">
                    <div className="card">
                        <div className="delete">
                            <Button id="delete" className="btn btn-danger btn-small" onClick={() =>this.delete(response)}>X</Button>
                            <Button id="delete" className="btn btn-small" onClick={() =>this.editState(response)}>edit</Button>
                        </div>
                        <img className="card-img-top" src={response.picture} alt="Card image cap"/>
                        <div className="card-body">
                        <h5 className="card-title">{response.first_name} {response.last_name}</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
            )}
            </div> 
        </div>
        </Container>
        );
    }
}

export default Home;