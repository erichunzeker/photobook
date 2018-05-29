import React, { Component } from 'react'

class Photo extends Component {

    handleClick = () => {
        this.props.onClick(this.props.photo.id)
    }

    handleDelete = () => {
        this.props.onDelete(this.props.photo.id)
    }

    render () {
        return(
            <div className="frame">
                <span className="deleteButton" onClick={this.handleDelete}>x</span>
                <img src={this.props.photo.name} onClick={this.handleClick} />
            </div>
        )
    }
}

export default Photo