import './App.css';

import React, {Component} from 'react';
import {Col, Container, CardBody, CardImg, Row, CardTitle, CardSubtitle, Button, CardText, Card, CardDeck, CardFooter} from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {apiResponse: 'helloooooo'};
    this.state = { response: []}
  }

  callAPI() {
    fetch('http://localhost:9000/api/employees')
        .then(response => response.json())
        .then(data => this.setState({response: data.data}));
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    return (
      <Container>
        <div>
          <div class="row">
          {this.state.response.map(response => 
            
            <div class="col-sm-3">
              <div class="card">
                <img class="card-img-top" src={response.picture} alt="Card image cap"/>
                <div class="card-body">
                  <h5 class="card-title">{response.first_name} {response.last_name}</h5>
                  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
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

export default App;
