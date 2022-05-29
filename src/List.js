import React from "react";

const List = ({ profileData }) => {
	const { image, name, age, id } = profileData;
	console.log(profileData);
	return (
		<div className="person">
			<img src={image} alt={id} />
			<div>
				<h4>{name}</h4>
				<p>{age} years</p>
			</div>
		</div>
	);
};

export default List;
