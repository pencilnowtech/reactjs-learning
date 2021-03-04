import React from 'react'
import ReactDom from 'react-dom'

const Article = () => {
	return (
		<div>
			Hello World
		</div>
	);
}

ReactDom.render(
	<Article />,
	document.getElementById('root')
)


