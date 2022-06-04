import React from "react";
import { FaQuoteRight } from "react-icons/fa";

export const PersonReview = (props) => {
	const { image, name, title, quote } = props.reviewData;
	const position = props.position;

	return (
		<article className={position}>
			<img className="person-img" src={image} alt={name} />
			<h4>{name}</h4>
			<span className="title">{title}</span>
			<p className="text">{quote}</p>
			<FaQuoteRight className="icon" />
		</article>
	);
};
