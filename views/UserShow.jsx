import React from 'react'

const UserShow = ({item}) => {

	// const itemDescription = Object.keys(item).map( (key, index) => {
	// 	return (<div key={index}>{key}: '{String(item[key])}'</div>)
	// }) 


	return (
		<div>
			<h1 style={{textAlign: 'center'}}>Show Page</h1>
			<h2>{ item.firstName } &nbsp; { item.lastName }</h2>
			{/* { itemDescription } */}
		</div>
	)
}

export default UserShow


/* FROM KENNY
npm create vite@latest
npm install @splinetool/react-spline @splinetool/runtime
*/