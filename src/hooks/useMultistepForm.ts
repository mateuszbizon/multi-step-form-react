import { ReactNode, useState } from "react";

function useMultistepForm(steps: ReactNode[]) {
	const [currentStep, setCurrentStep] = useState<number>(0);

    function goToNextStep() {
        if (steps.length - 1 === currentStep) return;

        setCurrentStep(currentStep => currentStep + 1);
    }

    function goToPreviousStep() {
        if (currentStep === 0) return;

        setCurrentStep(currentStep => currentStep - 1);
    }

	return {
		steps,
		currentStep,
        goToNextStep,
        goToPreviousStep
	};
}

export default useMultistepForm;
