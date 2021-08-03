import "./Item.css";

const ItemInitial = () => {
	const createItem = () => {
		console.log("+");
	};

	return (
		<div className="item">
			<input
				type="text"
				className="name-input"
				placeholder="Item's name..."
			></input>
			<input
				type="number"
				className="number-input"
				placeholder="Quantity..."
			></input>
			<div className="btn-container">
				<button className="float-right-btn" onClick={createItem}>
					+
				</button>
			</div>
		</div>
	);
};

export default ItemInitial;
