import { ReactNode, useState } from "react";

function useMultistepForm(steps: ReactNode[]) {
	const [currentStep, setCurrentStep] = useState<number>(0);

	return {
		steps,
		currentStep,
	};
}

export default useMultistepForm;
