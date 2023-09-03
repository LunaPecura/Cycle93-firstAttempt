
import React from 'react'

const UserEdit = (props) => {
	const item = props.item;
	return (
		<div>
			<form action={`/users/${item._id}?_method=PUT`} method="POST">
				First Name: {" "} <input type="text" name="firstName" defaultValue={item.firstName} /><br />
				Last Name: {" "} <input type="text" name="lastName" defaultValue={item.lastName} /><br />
				{/* ID: {" "} <input type="text" name="id" defaultValue={item.id} /><br />
				Boolean attribute attr1 applys:
				{
					item.attr1 ? <input type="checkbox" name="attr1" defaultChecked /> 
								: <input type="checkbox" name="attr1" />
				}<br /> */}
				<input type="submit" value="Submit Changes" />
			</form>
		</div>
	)
}

export default UserEdit

