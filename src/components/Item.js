import "./Item.css";

const Item = () => {
	// let itemRandomNumber = Math.random();

	const deleteItem = () => {
		console.log("-");
	};

	return (
		<div className="item">
			<div className="name-input saved"></div>
			<div className="number-input saved"></div>
			<div className="btn-container">
				<button className="float-right-btn" onClick={deleteItem}>
					-
				</button>
			</div>
		</div>
	);
};

export default Item;
