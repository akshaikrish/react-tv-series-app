import React, { Component} from 'react';
import Loader from '../../components/loader'

class SingleSeries extends Component {

    state = {
        show : null
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        fetch(`http://api.tvmaze.com/shows/${id}?embed=episodes`)
        .then(response => response.json())
        .then(json => this.setState({show : json}))
    }
    render() {
        const { show } = this.state;

        console.log(this.props);
        return (
            
            <div>
                {show === null && <Loader />}
                {/* {show !==null && show.status === 404 && <Loader />} */}
                {
                    show !==null 
                    &&
                    <div>
                        <p>
                            <img alt="show" src={show.image.medium} />
                        </p>
                        <p>{show.name}</p>
                        <p>Premiered - {show.premiered}</p>
                        <p>Rating - {show.rating.average}</p>
                        <p>Episodes - {show._embedded.episodes.length}</p>
                    </div>
                }
                
            </div>
        )
    }
}

export default SingleSeries;