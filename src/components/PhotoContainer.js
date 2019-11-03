import React from 'react'
import Photo from './Photo'
import NotFound from './NotFound'


class PhotoContainer extends React.Component {
    render() {
        return (
            <div className="photo-container">
                <h2>{this.props.results}</h2>
                <ul>
                    {
                        this.props.data.map((value, index) => {
                            return <Photo photoUrl={value.url_l} key={value.id} />
                        })
                    }
                        {this.props.results === ''?
                        <NotFound /> : null }
                    </ul>
                </div>
            )

    }
}

export default PhotoContainer