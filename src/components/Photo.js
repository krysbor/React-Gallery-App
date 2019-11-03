import React from 'react'

function Photo(props) {

    return (
        <li>
            <img src={props.photoUrl} alt="" />
        </li>
    )
}

export default Photo