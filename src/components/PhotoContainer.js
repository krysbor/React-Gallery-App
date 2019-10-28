import React from 'react'
import Photo from './Photo'
import NotFound from './NotFound'

class PhotoContainer extends React.Component {
    render() {
        return (
            <div className="photo-container">
                <h2>Results</h2>
                <ul>
                    <Photo />
                    <Photo />
                    <Photo />
                    <Photo />
                    {/*<!-- Not Found -->*/}
                    <NotFound />
                </ul>
            </div>
        )
    }
}

export default PhotoContainer