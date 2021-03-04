import React, { Component } from 'react'
import ReactDom from 'react-dom'
import Article from './article'
import { articles } from './article-data'

import './styles/index.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'


class ArticleList extends Component {
	render() {
		const articlesData = articles;

		return (
			<section>
				{
					articlesData.map((article) => (
						<Article 
							key={article.id} 
							article={article} />
					))
				}
			</section>
		)
	}
};

ReactDom.render(
	<ArticleList />,
	document.getElementById('root')
)
