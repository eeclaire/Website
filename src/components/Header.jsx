import React from 'react';

import { Link } from 'react-router';


var githubIcon = './static/' + require('../img/github.svg');
var twitterIcon = './static/' + require('../img/twitter.svg');

const Header = React.createClass({
	render() {
		return (
			<div>
				<h1 id="title">
					<Link to="/">
						Claire Durand
					</Link>
					<span className="icons">
						<a href="https://github.com/eeclaire">
							<img src={githubIcon} />
						</a>
						<a href="https://twitter.com/notfrenchclaire">
							<img src={twitterIcon} />
						</a>
					</span>
				</h1>

			</div>
		);
	}
})

export default Header;
