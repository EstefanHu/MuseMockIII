import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


class Write extends Component {
    constructor(props) {
        super(props);

        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeGenre = this.onChangeGenre.bind(this);
        this.onChangeLocation = this.onChangeLocation.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeContent = this.onChangeContent.bind(this);

        this.state = {
            title: '',
            genre: '',
            location: '',
            description: '',
            content: '',
        }
    }

    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        });
    }

    onChangeGenre(e) {
        this.setState({
            genre: e.target.value
        });
    }

    onChangeLocation(e) {
        this.setState({
            location: e.target.value
        })
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
                    genre: this.state.genre,
                    description: this.state.description,
                    content: this.state.content,
                    credibility: 0,
                    userId: 1
                })
            })
            .then(res => res.json())
            .catch(console.error);

        this.props.history.push('/profile');
    }

    render() {
        const { title, genre, location, description, content } = this.state;
        return (
            <section style={ primary }>
                <h1 style={header} >Compose Work</h1>
                <form onSubmit={this.onSubmit} style={createForm}>
                    <label style={ label } >Title:</label>
                    <input placeholder="Title your masterpiece" type="text" value={title} onChange={this.onChangeTitle} style={input} required />
                    <span style={ selectLables } >
                        <p>Select Genre:</p>
                        <p>Select Publication Location:</p>
                    </span>
                    <span style={selectHolder} >
                        <select value={genre} onChange={this.onChangeGenre} style={select} required >
                            <option style={option} value="short_story">Short Story</option>
                            <option style={option} value="poem">Poem</option>
                            <option style={option} value="life">Life</option>
                        </select>
                        <select value={location} onChange={this.onChangeLocation} style={select} required >
                        </select>
                    </span>
                    <label style={ label } >Description:</label>
                    <textarea placeholder="Write a short description" value={description} onChange={this.onChangeDescription} style={textarea} rows="5" required />
                    <label style={ label } >Content:</label>
                    <textarea placeholder="Start your publication" value={content} onChange={this.onChangeContent} style={textarea} rows="15" required />
                    <input type="submit" value="Publish!" style={submit} />
                </form>
            </section>
        )
    }
}

const primary = {
    borderRadius: '5px',
    backgroundColor: 'white',
    padding: '20px 30px',
}

const header = {
    textAlign: 'center',
    marginBottom: '15px'
}

const createForm = {
    display: 'flex',
    flexDirection: 'column',
    width: '540px',
}

const input = {
    height: '40px',
    border: '1px solid lightgrey',
    borderRadius: '5px',
    padding: '5px 15px',
    fontSize: '1.1rem',
    marginBottom: '15px'
}

const textarea = {
    maxWidth: '600px',
    border: '1px solid lightgrey',
    borderRadius: '5px',
    padding: '10px 15px',
    fontSize: '1.1rem',
    marginBottom: '15px'
}

const submit = {
    height: '40px',
    backgroundColor: 'blue',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1rem',
    color: 'white'
}

const select = {
    height: '40px',
    width: '49%',
    fontSize: '1.1rem',
    border: '1px solid lightgrey',
    backgroundColor: 'white',
    color: 'grey'
}

const selectHolder = {
    display: 'flex',
    justifyContent: 'space-between',
    height: '40px',
    marginBottom: '15px'
}

const selectLables = {
    display: 'grid',
    gridTemplateColumns: '51% 49%',
    marginBottom: '3px',
    paddingLeft: '3px'
}

const option = {
    backgroundColor: '#fff',
    fontSize: '1.6rem',
}

const label = {
    marginBottom: '3px',
    marginLeft: '3px'
}

export default withRouter(Write);