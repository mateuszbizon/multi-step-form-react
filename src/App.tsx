import AddOns from "./components/Form/AddOns";
import PersonInfo from "./components/Form/PersonInfo";
import SelectPlan from "./components/Form/SelectPlan";
import Summary from "./components/Form/Summary";
import SignupContent from "./components/Signup/SignupContent";
import SignupSidebar from "./components/Signup/SignupSidebar";
import useMultistepForm from "./hooks/useMultistepForm";
import { useState } from "react";
import { MONTHLY } from "./constants";
import { SelectPlanItems, selectPlanItems } from "./data/selectPlanItems";
import { AddOnsItem, addOnsItems } from "./data/addOnsItems";
import "./sass/main.scss";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema, SignupFields } from "./validations/SignupSchema";

export type SelectedItems = {
	selectedPlan: SelectPlanItems;
	addOns: AddOnsItem[];
}

function App() {
	const [mode, setMode] = useState<string>(MONTHLY);
	const [selectedItems, setSelectedItems] = useState<SelectedItems>({ selectedPlan: selectPlanItems[0], addOns: [] });

	function updateSelectedItems(fields: Partial<SelectedItems>) {
		setSelectedItems(prev => {
			return { ...prev, ...fields }
		})
	}

	const { register, handleSubmit, formState: { errors } } = useForm<SignupFields>({
		resolver: zodResolver(signupSchema),
	  });

	const {
		steps,
		currentStepIndex,
		currentStep,
		goToNextStep,
		goToPreviousStep,
		isFirstStep,
		isLastStep,
	} = useMultistepForm([
		<PersonInfo register={register} errors={errors} />,
		<SelectPlan mode={mode} setMode={setMode} updateSelectedItems={updateSelectedItems} selectedItems={selectedItems} />,
		<AddOns selectedItems={selectedItems} updateSelectedItems={updateSelectedItems} mode={mode} />,
		<Summary />,
	]);

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
				/>
			</div>
		</>
	);
}

export default App;
