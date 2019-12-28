import React, { Component } from 'react';

class Register extends Component {
    constructor(props) {
        super(props);

        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        }
    }

    onChangeFirstName(e) {
        this.setState({
            firstName: e.target.value
        });
    }

    onChangeLastName(e) {
        this.setState({
            lastName: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const user = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password
        }

        console.log(user);

        window.location = '/';
    }

    render() {
        return (
            <section>
                <h2>Register</h2>
                <form onSubmit={this.onSubmit}>
                    <input placeholder="First Name" type="text" value={this.state.firstName} onChange={this.onChangeFirstName} required />
                    <input placeholder="Last Name" type="text" value={this.state.lastName} onChange={this.onChangeLastName} required />
                    <input placeholder="Email Address" type="email" value={this.state.email} onChange={this.onChangeEmail} required />
                    <input placeholder="Password" type="password" value={this.state.password} onChange={this.onChangePassword} required />
                    <input type="submit" value="Register" />
                </form>
            </section>
        );
    }
}

export default Register;