import React from 'react'

const Index = ({ data }) => {

	const itemList = data.map( (item, index) => { return ( 

		<li style={{border: '1px solid gray', margin: '10px', padding: '10px'}} key={index}>
		
			The item <a href={`/data/${item._id}`}>{item.name}</a> has ID {item.id}, 
			and its Boolean attribute 'attr1' is set to '{String(item.attr1)}'.<br />

			<a href={`/data/${item._id}/edit`}>Edit</a>
				<form action={`/data/${item._id}?_method=DELETE`} method="POST"  >
					<input type="submit" value="DELETE"/>
				</form>
		
		</li> 

	);})
	
	
	return (
		<div>
            <h1 style={{textAlign: 'center'}}>Index Page</h1>
            <ul>{ itemList }</ul>
			<nav><a href="/data/new">Create some new data</a></nav>
        </div>
	)
}

export default Index
