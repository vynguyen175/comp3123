import React, { Component } from "react";
import axios from "axios";
import { Container, Table } from "react-bootstrap";

class PersonList extends Component {
  state = {
    persons: []
  };

  componentDidMount() {
    axios.get("https://randomuser.me/api/?results=10")
      .then(res => {
        const persons = res.data.results;
        this.setState({ persons });
      })
      .catch(err => console.error("Error fetching data:", err));
  }

  render() {
    return (
      <Container className="mt-4">
        <h2 className="text-center mb-4">Random User List</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            {this.state.persons.map((person, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{person.name.first} {person.name.last}</td>
                <td>{person.email}</td>
                <td>{person.location.country}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    );
  }
}

export default PersonList;
