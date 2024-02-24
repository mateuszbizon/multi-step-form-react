import { selectPlanItems, SelectPlanItems } from "../../data/selectPlanItems";
import { SelectedItems } from "../../App";

type SelectPlanFields = {
	selectedPlan: SelectPlanItems;
}

type SelectPlanProps = {
	isMonthly: boolean;
	handleSetMode: () => void;
	updateSelectedItems: (selectedPlan: Partial<SelectPlanFields>) => void;
	selectedItems: SelectedItems;
};

function SelectPlan({ isMonthly, handleSetMode, updateSelectedItems, selectedItems }: SelectPlanProps) {

  function handleSelectPlan(item: SelectPlanItems) {
    if (item.name === selectedItems.selectedPlan.name) return;

    updateSelectedItems({ selectedPlan: item });
  }

	return (
		<div className='select-plan'>
			<h1 className='select-plan__title'>Select your plan</h1>
			<p className='select-plan__desc'>
				You have the plan of monthly or yearly billing.
			</p>
			<div className='select-plan__items'>
				{selectPlanItems.map(item => (
					<div key={item.name} className={selectedItems.selectedPlan.name === item.name ? "select-plan__item select-plan__item--selected" : "select-plan__item"} onClick={() => handleSelectPlan(item)}>
						<div>
							<img src={item.img} alt='' />
						</div>
						<div className='select-plan__text-side'>
							<span className='select-plan__item-name'>{item.name}</span>
							<span className='select-plan__item-price'>
                				${isMonthly ? item.monthly : item.yearly}/{isMonthly ? "mo" : "yr"}
              				</span>
							<span className={isMonthly ? "select-plan__item-months-free" : "select-plan__item-months-free select-plan__item-months-free--show"}>
								2 months free
							</span>
						</div>
					</div>
				))}
			</div>
			<div className='select-plan__switch-box'>
				<span className='select-plan__switch-monthly'>Monthly</span>
				<button
					type='button'
					className='select-plan__switch'
					onClick={handleSetMode}>
					<div className={isMonthly ? "select-plan__switch-ball select-plan__switch-ball-left" : "select-plan__switch-ball select-plan__switch-ball-right"}></div>
				</button>
				<span className='select-plan__switch-yearly'>Yearly</span>
			</div>
		</div>
	);
}

export default SelectPlan;
