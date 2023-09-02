
import React from 'react'

const Edit = (props) => {
	const item = props.item;
	return (
		<div>
			<form action={`/data/${item._id}?_method=PUT`} method="POST">
				Name: {" "} <input type="text" name="name" defaultValue={item.name} /><br />
				ID: {" "} <input type="text" name="id" defaultValue={item.id} /><br />
				Boolean attribute attr1 applys:
				{
					item.attr1 ? <input type="checkbox" name="attr1" defaultChecked /> 
								: <input type="checkbox" name="attr1" />
				}<br />
				<input type="submit" value="Submit Changes" />
			</form>
		</div>
	)
}

export default Edit

