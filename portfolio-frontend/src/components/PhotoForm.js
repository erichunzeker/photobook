import React, { Component } from 'react'
import axios from 'axios'

class PhotoForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: this.props.photo.name
        }
    }

    handleInput = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }


    handleBlur = () => {
        const photo = {
            name: this.state.name
        }

        axios.put(
            `http://localhost:3001/api/v1/photos/${this.props.photo.id}`,
            {
                photo: photo
            })
            .then(response => {
                console.log(response)
                this.props.updatePhoto(response.data)
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <div className="frame">
                <form onBlur={this.handleBlur} >
                    <input className='input' type="text"
                           name="name" placeholder='Enter a url'
                           value={this.state.name} onChange={this.handleInput} />
                </form>
            </div>
        );
    }
}

export default PhotoForm