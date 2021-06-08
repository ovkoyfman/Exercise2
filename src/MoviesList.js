import React, { Component } from 'react'
import UsersList from './UsersList'

class Movie extends Component {
	render(){  
      return (
        <div>
        {Object.keys(this.props.moviesList).map( key => (        
           <div key={this.props.moviesList[key].id}>
               <h3>{this.props.moviesList[key].name}</h3>
               <UsersList id={this.props.moviesList[key].id} profiles={this.props.profiles} users={this.props.users}/>
           </div>
    	))}
		</div>
       )
	}
}
export default Movie;