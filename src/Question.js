import React, { useState } from "react";
import data from "./data";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
export const SingleQuestion = (props) => {
	const [isAnswerHidden, setisAnswerHidden] = useState(true);
	let { title, info } = props.data;

	const handleClick = () => {
		setisAnswerHidden(!isAnswerHidden);
	};
	return (
		<div className="question">
			<header>
				<h4>{title}</h4>
				<button className="btn">{isAnswerHidden ? <AiOutlinePlus onClick={handleClick} /> : <AiOutlineMinus onClick={handleClick} />}</button>
			</header>
			{isAnswerHidden || <p>{info}</p>}
		</div>
	);
};
