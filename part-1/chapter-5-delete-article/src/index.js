import React, { Component } from 'react'
import ReactDom from 'react-dom'
import Article from './article'
import { articles } from './article-data'

import './styles/index.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'


class ArticleList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			articles: [],
		};
	}

	componentDidMount() {
		this.setState({ articles: articles })
	}

	deleteArticleHandler = (id) => {
		var articles = this.state.articles.filter(function (article) {
			return article.id !== id
		});

		this.setState({ articles });
	}

	render() {
		return (
			<section>
				{
					this.state.articles.map((article) => (
						<Article
							onDeleteArticleEvent={this.deleteArticleHandler.bind(this, article.id)}
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
