import React from 'react'

const Show = ({item}) => {

	// const itemDescription = Object.keys(item).map( (key, index) => {
	// 	return (<div key={index}>{key}: '{String(item[key])}'</div>)
	// }) 


	return (
		<div>
			<h1 style={{textAlign: 'center'}}>Show Page</h1>
			<h2>{ item.name }</h2>
			{/* { itemDescription } */}
		</div>
	)
}

export default Show


/* FROM KENNY
npm create vite@latest
npm install @splinetool/react-spline @splinetool/runtime
*/