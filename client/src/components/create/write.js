import React, { Component } from 'react';

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
            content: e.target.content
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const post = {
            title: this.state.title,
            description: this.state.description,
            content: this.state.content
        }

        console.log(post);

        window.location = '/profile';
    }

    render() {
        return (
            <section>
                <h2>Compose Work</h2>
                <form onSubmit={this.onSubmit}>
                    <input placeholder="Title" type="text" value={this.state.title} onChange={this.onChangeTitle} required />
                    <input placeholder="Description" type="text" value={this.state.description} onChange={this.onChangeDescription} required />
                    <textarea placeholder="Write here..." value={this.state.content} onChange={this.onChangeContent} required />
                    <input type="submit" value="Publish!" />
                </form>
            </section>
        )
    }
}

export default Write;