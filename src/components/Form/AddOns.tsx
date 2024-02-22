import checkmark from "../../assets/images/icon-checkmark.svg";

function AddOns() {
	return (
		<div className='add-ons'>
			<h1 className='add-ons__title'>Pick add-ons</h1>
			<p className='add-ons__desc'>
				Add-ons help enhance your gaming experience
			</p>
			<div className='add-ons__items'>
				<div className='add-ons__item'>
					<div className='add-ons__check-side'></div>
					<div className='add-ons__text-side'>
						<span className='add-ons__item-name'>Online service</span>
						<span className='add-ons__item-desc'>
							Access to multiplayer games
						</span>
					</div>
					<span className='add-ons__item-price'>+$1/mo</span>
				</div>
			</div>
		</div>
	);
}

export default AddOns;
