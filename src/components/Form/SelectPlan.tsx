import { selectPlanItems, SelectPlanItems } from "../../data/selectPlanItems";
import { MONTHLY, YEARLY } from "../../constants";

type SelectPlanProps = {
	mode: string;
	setMode: (mode: string) => void;
  selectedPlan: SelectPlanItems;
  setSelectedPlan: (item: SelectPlanItems) => void;
};

function SelectPlan({ mode, setMode, selectedPlan, setSelectedPlan }: SelectPlanProps) {
	function handleSetMode() {
		if (mode === MONTHLY) {
			setMode(YEARLY);
			return;
		}

		setMode(MONTHLY);
	}

  function handleSelectPlan(item: SelectPlanItems) {
    if (item.name === selectedPlan.name) return;

    setSelectedPlan(item);
  }

	return (
		<div className='select-plan'>
			<h1 className='select-plan__title'>Select your plan</h1>
			<p className='select-plan__desc'>
				You have the plan of monthly or yearly billing.
			</p>
			<div className='select-plan__items'>
				{selectPlanItems.map(item => (
					<div key={item.name} className={selectedPlan?.name === item.name ? "select-plan__item select-plan__item--selected" : "select-plan__item"} onClick={() => handleSelectPlan(item)}>
						<div>
							<img src={item.img} alt='' />
						</div>
						<div className='select-plan__text-side'>
							<span className='select-plan__item-name'>{item.name}</span>
							<span className='select-plan__item-price'>
                ${mode == MONTHLY ? item.monthly : item.yearly}/{mode == MONTHLY ? "mo" : "yr"}
              </span>
              {mode == YEARLY && <span className="select-plan__item-months-free">2 months free</span>}
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
					<div className={mode == MONTHLY ? "select-plan__switch-ball select-plan__switch-ball-left" : "select-plan__switch-ball select-plan__switch-ball-right"}></div>
				</button>
				<span className='select-plan__switch-yearly'>Yearly</span>
			</div>
		</div>
	);
}

export default SelectPlan;
