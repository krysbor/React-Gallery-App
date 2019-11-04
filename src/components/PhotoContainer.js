import React from 'react'
import Photo from './Photo'
import NotFound from './NotFound'


const PhotoContainer = (props) => {

    //let value = match.params.value


        return (
            <div className="photo-container">
                <h2>{props.results}</h2>
                <ul>
                    {
                        props.data.map((value, index) => {
                            return <Photo photoUrl={value.url_sq} key={value.id} />
                        })
                    }
                        {props.results === ''?
                        <NotFound /> : null }
                    </ul>
                </div>
            )


}

export default PhotoContainer