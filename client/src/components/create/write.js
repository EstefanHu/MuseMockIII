import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

class Write extends Component {
    constructor(props) {
        super(props);

        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeContent = this.onChangeContent.bind(this);

        this.state = {
            title: '',
            description: '',
            content: '',
        }
    }

    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        });
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    onChangeContent(e) {
        this.setState({
            content: e.target.value
        });
    }

    onSubmit = e => {
        e.preventDefault();

        let url = "http://localhost:4000/create/createPublication";
        fetch(url, {method: "POST",
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: this.state.title,
                    description: this.state.description,
                    content: this.state.content,
                    userId: 1
                })
            })
            .then(res => res.json())
            .catch(console.error);
        this.props.history.push('/profile');
    }

    render() {
        const { title, description, content } = this.state;
        return (
            <section>
                <h2>Compose Work</h2>
                <form onSubmit={this.onSubmit} style={createForm}>
                    <input placeholder="Title" type="text" value={title} onChange={this.onChangeTitle} style={input} required />
                    <input placeholder="Description" type="text" value={description} onChange={this.onChangeDescription} style={input} required />
                    <textarea placeholder="Write here..." value={content} onChange={this.onChangeContent} style={textarea} rows="5" required />
                    <input type="submit" value="Publish!" style={submit} />
                </form>
            </section>
        )
    }
}

const createForm = {
    display: 'flex',
    flexDirection: 'column',
    width: '600px',
}

const input = {
    height: '40px',
    border: '1px solid lightgrey',
    borderRadius: '15px',
    padding: '5px 15px',
    fontSize: '1.1rem',
    marginBottom: '10px'
}

const textarea = {
    maxWidth: '600px',
    border: '1px solid lightgrey',
    borderRadius: '15px',
    padding: '10px 15px',
    fontSize: '1.1rem',
    marginBottom: '10px'
}

const submit = {
    height: '40px',
    backgroundColor: 'blue',
    border: 'none',
    borderRadius: '15px',
    fontSize: '1rem',
    color: 'white',
}
export default withRouter(Write);