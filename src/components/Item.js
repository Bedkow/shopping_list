import "./Item.css";

const Item = () => {
	return (
		<div className="item">
			<input type="text" className="name-input"></input>
			<input type="number" className="number-input"></input>
			<div className="btn-container">
				<button className="float-right-btn">+</button>
				<button className="float-right-btn">-</button>
			</div>
		</div>
	);
};

export default Item;
