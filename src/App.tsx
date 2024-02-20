import AddOns from "./components/Form/AddOns";
import PersonInfo from "./components/Form/PersonInfo";
import SelectPlan from "./components/Form/SelectPlan";
import Summary from "./components/Form/Summary";
import SignupContent from "./components/Signup/SignupContent";
import SignupSidebar from "./components/Signup/SignupSidebar";
import useMultistepForm from "./hooks/useMultistepForm";
import { signupSchema, FormFields } from "./validations/SignupSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { MONTHLY } from "./constants";
import { SelectPlanItems, selectPlanItems } from "./data/selectPlanItems";
import "./sass/main.scss";

function App() {
	const [mode, setMode] = useState<string>(MONTHLY);
	const [selectedPlan, setSelectedPlan] = useState<SelectPlanItems>(selectPlanItems[0])
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormFields>({
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
					handleSubmit={handleSubmit}
				/>
			</div>
		</>
	);
}

export default App;
