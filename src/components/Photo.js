import React from 'react'

function Photo(props) {
    console.log(props.photoUrl)
    return (
        <li>
            <img src={props.photoUrl} alt="" />
        </li>
    )
}

export default Photo