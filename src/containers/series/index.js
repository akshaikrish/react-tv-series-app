import React ,{Component} from 'react';
import SeriesList from '../../components/seriesList'
import Loader from '../../components/loader'
import Intro from '../../components/intro'

class Users extends Component {
    state = {
        names : [],
        seriesName : '',
        isFetching : false
      }
    
    
    //   componentDidMount() {
    //     fetch('http://api.tvmaze.com/search/shows?q=Vikings')
    //     .then(response => response.json())
    //     .then(json => this.setState({names : json}))
    //   }
     GetSeriesName = e => {
         this.setState({seriesName: e.target.value, isFetching:true})
        fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
        .then(response => response.json())
        .then(json => this.setState({names : json, isFetching:false}))
         
     }

    render() {
        const {names, seriesName, isFetching} = this.state;
        return(
        <div> 
            <Intro tagline="SEARCH FOR TV SHOWS"/>
            
        
            Number of shows found - {this.state.names.length}
            <div>
            <input type="text" onChange={this.GetSeriesName} />
            </div>
            { !isFetching && names.length === 0 && seriesName === ''
            &&
                <p>Please enter TV Series name</p>
            }
            { !isFetching && names.length === 0 && seriesName !== ''
            &&
                <p>No TV Series found</p>
            }
            { isFetching 
            &&
                <Loader />
            }
            { !isFetching && <SeriesList list={this.state.names} />
            }
            
        </div>
        
    )
    }
}

export default Users;
