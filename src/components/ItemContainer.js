import Item from "./Item";
import ItemInitial from "./ItemInitial";
import "./ItemContainer.css";

const ItemContainer = () => {
	return (
		<div>
			<ItemInitial />
			<Item />
		</div>
	);
};

export default ItemContainer;
