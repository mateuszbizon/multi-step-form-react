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
import "./sass/main.scss";

export type FormFields = {
	name: string;
	email: string;
	phone: string;
}

function App() {
	const [mode, setMode] = useState<string>(MONTHLY);
	const [selectedPlan, setSelectedPlan] = useState<SelectPlanItems>(selectPlanItems[0])
	const [form, setForm] = useState<FormFields>({ name: "", email: "", phone: "" });

	function updateFormFields(fields: Partial<FormFields>) {
		setForm(prev => {
			return { ...prev, ...fields }
		})
	}

	const {
		steps,
		currentStepIndex,
		currentStep,
		goToNextStep,
		goToPreviousStep,
		isFirstStep,
		isLastStep,
	} = useMultistepForm([
		<PersonInfo form={form} updateFormFields={updateFormFields} />,
		<SelectPlan mode={mode} setMode={setMode} selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} />,
		<AddOns />,
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
				/>
			</div>
		</>
	);
}

export default App;
