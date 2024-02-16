import { ReactNode, useState } from "react";

function useMultistepForm(steps: ReactNode[]) {
	const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);

    function goToNextStep() {
        if (steps.length - 1 === currentStepIndex) return;

        setCurrentStepIndex(currentStepIndex => currentStepIndex + 1);
    }

    function goToPreviousStep() {
        if (currentStepIndex === 0) return;

        setCurrentStepIndex(currentStepIndex => currentStepIndex - 1);
    }

	return {
		steps,
		currentStepIndex,
        currentStep: steps[currentStepIndex],
        goToNextStep,
        goToPreviousStep
	};
}

export default useMultistepForm;
