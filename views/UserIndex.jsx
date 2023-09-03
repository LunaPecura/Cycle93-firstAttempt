import React from 'react'

const UserIndex = ({ data }) => {

	const itemList = data.map( (item, index) => { return ( 

		<li style={{border: '1px solid gray', margin: '10px', padding: '10px'}} key={index}>
		
			The item <a href={`/users/${item._id}`}>{item.firstName}&nbsp;{item.lastName}</a><br />
			
			{/* has ID {item.id}, 
			and its Boolean attribute 'attr1' is set to '{String(item.attr1)}'.<br /> */}

			<a href={`/users/${item._id}/edit`}>Edit</a>
				<form action={`/users/${item._id}?_method=DELETE`} method="POST"  >
					<input type="submit" value="DELETE"/>
				</form>
		
		</li> 

	);})
	
	
	return (
		<div>
            <h1 style={{textAlign: 'center'}}>User Index Page</h1>
            <ul>{ itemList }</ul>
			<nav><a href="/users/new">Create new user</a></nav>
        </div>
	)
}

export default UserIndex
