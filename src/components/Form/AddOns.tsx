import checkmark from "../../assets/images/icon-checkmark.svg";
import { AddOnsItem, addOnsItems } from "../../data/addOnsItems";
import { SelectedItems } from "../../App";
import { MONTHLY } from "../../constants";

type AddOnsFields = {
	addOns: AddOnsItem[]
}

type AddOnsProps = {
	selectedItems: SelectedItems;
	updateSelectedItems: (addOns: Partial<AddOnsFields>) => void;
	mode: string;
}

function AddOns({ selectedItems, updateSelectedItems, mode }: AddOnsProps) {
	function checkAddOnsSelected(item: AddOnsItem) {
		if (selectedItems.addOns.includes(item)) return true;

		return false;
	}

	function selectAddOns(item: AddOnsItem) {
		if (selectedItems.addOns.includes(item)) {
			const addOnsUpdated = selectedItems.addOns.filter(addOns => addOns != item)

			updateSelectedItems({ addOns: addOnsUpdated })
			return;
		}

		selectedItems.addOns.push(item);
		updateSelectedItems({ addOns: selectedItems.addOns })
	}

	return (
		<div className='add-ons'>
			<h1 className='add-ons__title'>Pick add-ons</h1>
			<p className='add-ons__desc'>
				Add-ons help enhance your gaming experience
			</p>
			<div className='add-ons__items'>
				{addOnsItems.map((item, index) => (
					<div key={index} className={checkAddOnsSelected(item) ? "add-ons__item add-ons__item--selected" : "add-ons__item"} onClick={() => selectAddOns(item)}>
						<div className={checkAddOnsSelected(item) ? "add-ons__check-side add-ons__check-side--checked" : "add-ons__check-side"}></div>
						<div className='add-ons__text-side'>
							<span className='add-ons__item-name'>{item.name}</span>
							<span className='add-ons__item-desc'>
								{item.desc}
							</span>
						</div>
						<span className='add-ons__item-price'>+${mode == MONTHLY ? item.monthly : item.yearly}/{mode == MONTHLY ? "mo" : "yr"}</span>
					</div>
				))}
			</div>
		</div>
	);
}

export default AddOns;
