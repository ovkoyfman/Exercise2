import React, { Component } from 'react'

class UsersList extends Component {
	render(){
    const usersInFavor = this.props.profiles.filter(profile => profile.favoriteMovieID == this.props.id);
    if (usersInFavor.length > 0)	{
      return(
          	<ol>
          	{usersInFavor.map( user => (
           		<li>{this.props.users[user.userID].name}</li>	
           	))}
          	</ol>
        )
    }
    else {
    return <p>Nobody favored this movie</p>
    }
  }
}
export default UsersList;