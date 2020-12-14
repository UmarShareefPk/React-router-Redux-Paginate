import React from 'react'

export default function Rainbow(OrignalComponent) {
    return function(props){
        const colors = ["Red" , "Green" , "Blue" , "Black" , "Brown" , "DarkBlue", "Gray", "SkyBlue", "Yellow", "Silver"];
        const color = colors[Math.floor(Math.random() * 10)];

        return (
            <OrignalComponent name={color}/>
        )
    }          
    
}
