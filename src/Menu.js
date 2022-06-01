import React from "react";

const Menu = (props) => {
	const { title, category, price, img, desc } = props.menuData;
	return (
		<article className="menu-item">
			<img className="photo" src={img} id="img" alt={title} />

			<div className="item-info">
				<header className="price">
					<h4 id="">{title} </h4>
					<span id="price">{price}</span>
					<hr />
				</header>
				<p className="item-text">{desc}</p>
			</div>
		</article>
	);
};

export default Menu;
