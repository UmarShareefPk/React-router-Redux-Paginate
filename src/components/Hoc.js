import React, { Component } from 'react'
import Rainbow from './Rainbow'

 class Hoc extends Component {
    render() {
        return ( 
            <div style= {{color : this.props.name}}>
                 <h5>Higher Order Component (HOC) Practice </h5>
                 <p>This is simple proactice for HOC</p>
                 <p> Name from Rainbow : {this.props.name}</p>  
            </div>
        )
    }
}

export default Rainbow(Hoc)