import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

class Main extends Component {
    state = {
        //search: "",
        employees: [],
        //alphaEmployees: [],
        //antiAlphaEmployees: []
    };

    componentDidMount() {
        API.getAll()
          .then(res => this.setState({ employees: res.data.results}))
          .catch(err => console.log(err))
          .then(console.log(this));
    }



    render() {
        return (
            <Container>
              <Navbar>

              </Navbar>
              <Card results={this.state.employees}>

              </Card>
            </Container>
        
        );
    }
}

export default Main;