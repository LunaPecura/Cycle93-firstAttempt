import React from 'react'

const New = () => {
	return (
		<div>
			<h1>New Page</h1>

			{/* NOTE: action will be the route, method will be the HTTP verb */}
			<form action="/users" method="POST">
				First Name: <input type="text" name="firstName" /><br/>
				Last Name: <input type="text" name="lastName" /><br/>
				{/* attr1: <input type="checkbox" name="attr1" /><br/> */}
				<input type="submit" name="" value="Create Data"/>
            </form>
		</div>
	)
}

export default New
