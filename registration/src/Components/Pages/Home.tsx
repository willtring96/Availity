import React, { Component } from 'react';
import { Card, Container } from 'react-bootstrap';
import { RouteComponentProps } from 'react-router-dom';
import { User } from '../Models/User';

interface Props extends RouteComponentProps {
  user: User;
}

interface State {
  user: User;
}

export default class Home extends Component<Props, State> {
  // constructor(props) {
  //     super(props);
  //     const user = localStorage.getItem('User');
  //     this.state = {
  //         user: user,
  //       };
  // }
  state = {
    user: {} as User,
  };

  componentDidMount() {
    const user = localStorage.getItem('User');
    if (user === null) this.props.history.push('/');
    else this.setState({ user: JSON.parse(user) });
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
          <Card style={{ width: '75%' }}>
            <Card.Header>
              <Card.Title style={{ color: '#ff8c00' }}>
                <b>Welcome to Availity</b>
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                <b>First Name:</b> {this.state.user.f_name}
                <br />
                <b>Last Name:</b> {this.state.user.l_name}
                <br />
                <b>Phone Number:</b> {this.state.user.phone_num} <br />
                <b>Email: </b>
                <a href={'mailto:' + this.state.user.email}>{this.state.user.email}</a>
                <br />
                <b>NPI Number: </b>
                {this.state.user.NPI}
                <br />
                <br />
                <b>Address:</b>{' '}
                {this.state.user.address ? (
                  <>
                    {' '}
                    {this.state.user.address.address1}
                    <br />
                    {this.state.user.address.address2 ? (
                      <>
                        this.state.user.address.address2 <br />
                      </>
                    ) : null}
                    {this.state.user.address.city},&nbsp;
                    {this.state.user.address.state}&nbsp;
                    {this.state.user.address.zip}
                  </>
                ) : null}
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </div>
    );
  }
}
