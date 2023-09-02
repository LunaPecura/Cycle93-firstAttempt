import React from 'react'

const New = () => {
	return (
		<div>
			<h1>New Page</h1>

			{/* NOTE: action will be the route, method will be the HTTP verb */}
			<form action="/data" method="POST">
				Name: <input type="text" name="name" /><br/>
				ID: <input type="text" name="id" /><br/>
				attr1: <input type="checkbox" name="attr1" /><br/>
				<input type="submit" name="" value="Create Data"/>
            </form>
		</div>
	)
}

export default New
