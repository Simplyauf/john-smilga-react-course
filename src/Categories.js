import React from "react";
import items from "./data";

const Categories = ({ handleFilterBtn }) => {
	let categoryLists = ["all"];
	items.map((menuItems) => {
		if (!categoryLists.includes(menuItems.category)) {
			categoryLists.push(menuItems.category);
		}
	});

	return categoryLists.map((categoryBtn, index) => {
		return (
			<button onClick={(e) => handleFilterBtn(e)} className="filter-btn" key={index} id={categoryBtn}>
				{categoryBtn}
			</button>
		);
	});
};

export default Categories;
