import React, { Component } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { RouteComponentProps } from 'react-router-dom';
import { User } from '../Models/User';

interface State {
  validated: boolean;
  f_name: string;
  l_name: string;
  NPI: number;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zip: number;
  phone_num: number;
  email: string;
}

export default class Register extends Component<RouteComponentProps, State> {
  state = {
    validated: false,
    f_name: '',
    l_name: '',
    NPI: 0,
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: 0,
    phone_num: 0,
    email: '',
  };

  componentDidMount() {
    localStorage.clear();
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      this.setState({ validated: true });
      return;
    }
    const user: User = {
      f_name: this.state.f_name,
      l_name: this.state.l_name,
      NPI: this.state.NPI,
      address: {
        address1: this.state.address1,
        address2: this.state.address2,
        city: this.state.city,
        state: this.state.state,
        zip: this.state.zip,
      },
      phone_num: this.state.phone_num,
      email: this.state.email,
    };
    console.log(user);
    localStorage.setItem('User', JSON.stringify(user));
    this.props.history.push('/home', user);
  }

  render() {
    return (
      <div style={{ height: '100%', width: '100%' }}>
        <Container
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <Card>
            <Card.Body>
              <Card.Title style={{ color: '#ff8c00' }}>
                <b>Availity Register Portal</b>
              </Card.Title>
              <Card.Text>Healthcare Provider Registration</Card.Text>
              <Form noValidate validated={this.state.validated} onSubmit={(e) => this.handleSubmit(e)}>
                <Form.Row>
                  <Form.Group as={Col} controlId="validationFirstName">
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="First name"
                      onChange={(event) => {
                        this.setState({
                          f_name: event.target.value,
                        });
                      }}
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="validationLastName">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Last name"
                      onChange={(event) => {
                        this.setState({
                          l_name: event.target.value,
                        });
                      }}
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} controlId="validationNPI">
                    <Form.Label>NPI Number</Form.Label>
                    <Form.Control
                      required
                      type="number"
                      placeholder="123"
                      onChange={(event) => {
                        this.setState({
                          NPI: parseInt(event.target.value),
                        });
                      }}
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="validationPhoneNumber">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      required
                      type="number"
                      placeholder="555555555"
                      isInvalid={!(this.state.phone_num.toString().length === 10 || this.state.phone_num === 0)}
                      onChange={(event) => {
                        this.setState({
                          phone_num: parseInt(event.target.value),
                        });
                      }}
                    />
                    <Form.Control.Feedback type="invalid">Please enter a 10 digit phone number.</Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      required
                      type="email"
                      placeholder="Enter email"
                      onChange={(event) => {
                        this.setState({
                          email: event.target.value,
                        });
                      }}
                    />
                    <Form.Control.Feedback type="invalid">Please enter valid email address.</Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridAddress1">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    required
                    placeholder="1234 Main St"
                    onChange={(event) => {
                      this.setState({
                        address1: event.target.value,
                      });
                    }}
                  />
                </Form.Group>

                <Form.Group controlId="formGridAddress2">
                  <Form.Label>Address 2</Form.Label>
                  <Form.Control
                    placeholder="Apartment, studio, or floor"
                    onChange={(event) => {
                      this.setState({
                        address2: event.target.value,
                      });
                    }}
                  />
                </Form.Group>

                <Form.Row>
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                      required
                      onChange={(event) => {
                        this.setState({
                          city: event.target.value,
                        });
                      }}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Control
                      as="select"
                      required
                      onChange={(event) => {
                        this.setState({
                          state: event.target.value,
                        });
                      }}
                    >
                      <option />
                      <option value="AK">Alaska</option>
                      <option value="AL">Alabama</option>
                      <option value="AR">Arkansas</option>
                      <option value="AZ">Arizona</option>
                      <option value="CA">California</option>
                      <option value="CO">Colorado</option>
                      <option value="CT">Connecticut</option>
                      <option value="DC">District of Columbia</option>
                      <option value="DE">Delaware</option>
                      <option value="FL">Florida</option>
                      <option value="GA">Georgia</option>
                      <option value="HI">Hawaii</option>
                      <option value="IA">Iowa</option>
                      <option value="ID">Idaho</option>
                      <option value="IL">Illinois</option>
                      <option value="IN">Indiana</option>
                      <option value="KS">Kansas</option>
                      <option value="KY">Kentucky</option>
                      <option value="LA">Louisiana</option>
                      <option value="MA">Massachusetts</option>
                      <option value="MD">Maryland</option>
                      <option value="ME">Maine</option>
                      <option value="MI">Michigan</option>
                      <option value="MN">Minnesota</option>
                      <option value="MO">Missouri</option>
                      <option value="MS">Mississippi</option>
                      <option value="MT">Montana</option>
                      <option value="NC">North Carolina</option>
                      <option value="ND">North Dakota</option>
                      <option value="NE">Nebraska</option>
                      <option value="NH">New Hampshire</option>
                      <option value="NJ">New Jersey</option>
                      <option value="NM">New Mexico</option>
                      <option value="NV">Nevada</option>
                      <option value="NY">New York</option>
                      <option value="OH">Ohio</option>
                      <option value="OK">Oklahoma</option>
                      <option value="OR">Oregon</option>
                      <option value="PA">Pennsylvania</option>
                      <option value="PR">Puerto Rico</option>
                      <option value="RI">Rhode Island</option>
                      <option value="SC">South Carolina</option>
                      <option value="SD">South Dakota</option>
                      <option value="TN">Tennessee</option>
                      <option value="TX">Texas</option>
                      <option value="UT">Utah</option>
                      <option value="VA">Virginia</option>
                      <option value="VT">Vermont</option>
                      <option value="WA">Washington</option>
                      <option value="WI">Wisconsin</option>
                      <option value="WV">West Virginia</option>
                      <option value="WY">Wyoming</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control
                      required
                      isInvalid={!(this.state.zip.toString().length === 5 || this.state.zip === 0)}
                      onChange={(event) => {
                        this.setState({
                          zip: parseInt(event.target.value),
                        });
                      }}
                    />
                    <Form.Control.Feedback type="invalid">Please enter a 5 digit ZIP code.</Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>

                <Form.Group id="formGridCheckbox">
                  <Form.Check required type="checkbox" label="I agree to terms and conditions" />
                </Form.Group>

                <Button variant="outline-success" type="submit">
                  Register
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Container>
      </div>
    );
  }
}
