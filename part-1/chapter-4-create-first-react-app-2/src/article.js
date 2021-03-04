import React from "react";

const article = (props) => {
	console.log(props);
	return (
		<section className='row my-2 pt-3'>
			<section className='col-xs-4 col-md-3'>
				<img src={props.article.img} className='mw-100 mh-100' />
			</section>
			<section className='col-xs-5 col-md-8'>
				<p>Title: {props.article.title}</p>
				<p>Rating: {props.article.rating}</p>
				<p style={{ color: '#617d98', fontSize: '0.8rem', fontWeight: 'bold', marginTop: '0.7rem' }}>Author: {props.article.author}</p>
			</section>
		</section>
	)
}

export default article;
