import React from "react";
import "./quote.scss";
import IQuote from "./../../interfaces/quote.interface";

class Quote extends React.Component<IQuote, {}> {
	render() {
		return (
			<div className="quote">
				<div className="quote__text-container">
					<i className="quote__sign fa fa-quote-left"></i>
					<span className="quote__text">{this.props.quote}</span>
				</div>
				<div className="quote__author">
					- <span className="quote__text">{this.props.author}</span>
				</div>
			</div>
		);
	}
}

export default Quote;
