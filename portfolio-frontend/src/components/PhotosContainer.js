import React, { Component } from 'react'
import axios from 'axios'
import Photo from './Photo'
import update from 'immutability-helper'
import PhotoForm from './PhotoForm'



class PhotosContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: [],
            editingPhotoId: null
        };

    }

    componentDidMount() {
        axios.get('http://localhost:3001/api/v1/photos.json')
            .then(response => {
                this.setState({
                    photos: response.data
                })
            })
            .catch(error => console.log(error))
    }

    addNewPhoto = () => {
        axios.post(
            'http://localhost:3001/api/v1/photos',
            { photo:
                    {
                        name: '',
                    }
            }
        )
            .then(response => {
                console.log(response)
                const photos = update(this.state.photos, {
                    $splice: [[0, 0, response.data]]
                })
                this.setState({
                    photos: photos,
                    editingPhotoId: response.data.id
                })
            })
            .catch(error => console.log(error))
    }

    updatePhoto = (photo) => {
        const photoIndex = this.state.photos.findIndex(x => x.id === photo.id)
        const photos = update(this.state.photos, {
            [photoIndex]: { $set: photo }
        })
        this.setState({photos: photos})
    }

    enableEditing = (id) => {
        this.setState({editingPhotoId: id})
    }

    deletePhoto = (id) => {
        axios.delete(`http://localhost:3001/api/v1/photos/${id}`)
            .then(response => {
                const photoIndex = this.state.photos.findIndex(x => x.id === id)
                const photos = update(this.state.photos, { $splice: [[photoIndex, 1]]})
                this.setState({photos: photos})
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <div>
                <div>
                    <button className="newPhotoButton" onClick={this.addNewPhoto}>
                        New photo
                    </button>
                </div>

                {this.state.photos.map((photo) => {
                    if(this.state.editingPhotoId === photo.id) {
                        return(<PhotoForm photo={photo} key={photo.id}
                                          updatePhoto={this.updatePhoto}/>)
                    } else {
                        return (<Photo photo={photo} key={photo.id}
                                       onClick={this.enableEditing}
                                       onDelete={this.deletePhoto} />)
                    }
                })}
            </div>
        );
    }
}

export default PhotosContainer