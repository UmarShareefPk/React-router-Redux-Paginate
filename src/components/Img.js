import React, { Component } from 'react'
import image from '../images/1.jpg'

export default class Img extends Component {
    render() {
        return (
            <div>
                <img src={image} alt="Img not found"></img>
            </div>
        )
    }
}
