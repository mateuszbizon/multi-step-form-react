import AddOns from "./components/Form/AddOns";
import PersonInfo from "./components/Form/PersonInfo";
import SelectPlan from "./components/Form/SelectPlan";
import Summary from "./components/Form/Summary";
import SignupContent from "./components/Signup/SignupContent";
import SignupSidebar from "./components/Signup/SignupSidebar";
import useMultistepForm from "./hooks/useMultistepForm";
import { useEffect, useState } from "react";
import { SelectPlanItems, selectPlanItems } from "./data/selectPlanItems";
import { AddOnsItem } from "./data/addOnsItems";
import "./sass/main.scss";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema, SignupFields } from "./validations/SignupSchema";
import useModeForm from "./hooks/useModeForm";

export type SelectedItems = {
	selectedPlan: SelectPlanItems;
	addOns: AddOnsItem[];
}

function App() {
	const [selectedItems, setSelectedItems] = useState<SelectedItems>({ selectedPlan: selectPlanItems[0], addOns: [] });
	const [exactStepIndexToMove, setExactStepIndexToMove] = useState<number | null>(null)
	const [isThanksFormActive, setIsThanksFormActive] = useState(false);

	function updateSelectedItems(fields: Partial<SelectedItems>) {
		setSelectedItems(prev => {
			return { ...prev, ...fields }
		})
	}

	const { register, handleSubmit, formState: { errors } } = useForm<SignupFields>({
		resolver: zodResolver(signupSchema),
	  });
	
	const { isMonthly, handleSetMode } = useModeForm();

	const {
		steps,
		currentStepIndex,
		currentStep,
		goToNextStep,
		goToPreviousStep,
		isFirstStep,
		isLastStep,
		goToExactStep,
	} = useMultistepForm([
		<PersonInfo register={register} errors={errors} />,
		<SelectPlan isMonthly={isMonthly} handleSetMode={handleSetMode} updateSelectedItems={updateSelectedItems} selectedItems={selectedItems} />,
		<AddOns selectedItems={selectedItems} updateSelectedItems={updateSelectedItems} isMonthly={isMonthly} />,
		<Summary selectedItems={selectedItems} isMonthly={isMonthly} setExactStepIndexToMove={setExactStepIndexToMove} />,
	]);

	useEffect(() => {
		if (exactStepIndexToMove != null) {
			goToExactStep(exactStepIndexToMove);
			setExactStepIndexToMove(null);
		}
	}, [exactStepIndexToMove])

	return (
		<>
			<div className='signup'>
				<SignupSidebar steps={steps} currentStepIndex={currentStepIndex} />
				<SignupContent
					currentStep={currentStep}
					goToNextStep={goToNextStep}
					goToPreviousStep={goToPreviousStep}
					isFirstStep={isFirstStep}
					isLastStep={isLastStep}
					handleSubmit={handleSubmit}
					selectedItems={selectedItems}
					isThanksFormActive={isThanksFormActive}
					setIsThanksFormActive={setIsThanksFormActive}
				/>
			</div>
		</>
	);
}

export default App;
