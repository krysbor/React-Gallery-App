import React from 'react'
import Photo from './Photo'
import NotFound from './NotFound'
import { thisExpression } from '@babel/types'

class PhotoContainer extends React.Component {

    componentDidMount() {
        console.log('component mounted')
    }

    render() {
        const array = this.props.data
        let loaded = this.props.loaded


            return (
                <div className="photo-container">
                    <h2>{this.props.results}</h2>
                    <ul>
                        {this.props.data.map((value, index) => {
                            console.log(value.url_l)
                            return <Photo photoUrl={value.url_l} />
                        })}
                        {/*<!-- Not Found -->*/}
                        <NotFound />
                    </ul>
                </div>
            )

    }
}

export default PhotoContainer