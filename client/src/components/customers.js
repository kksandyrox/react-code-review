// TODO: DEMO JS FILE TO TEST API RESPONSE

import React, { Component } from 'react';

class Customers extends Component {
  constructor() {
    super();
    this.state = {
      customers : []
    }
  }

  componentDidMount() {
    fetch('/api/v1/customers')
      .then(res => res.json())
      .then(customers => this.setState({customers}, function() {
        // console.log(customers)
      }));
  }
  render() {
    return (
      <div>
        <h2>Customers</h2>
        <p>
          {this.state.customers.map(customer =>
          <li key={customer.id}>
            {customer.name}
          </li>
        )}
        </p>
      </div>
    );
  }
}

export default Customers;
