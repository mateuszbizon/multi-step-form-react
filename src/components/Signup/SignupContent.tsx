import { ReactNode } from "react";

type SignupContentProps = {
	currentStep: ReactNode;
	goToNextStep: () => void;
	goToPreviousStep: () => void;
    isFirstStep: boolean;
    isLastStep: boolean;
};

function SignupContent({ currentStep, goToNextStep, goToPreviousStep, isFirstStep, isLastStep }: SignupContentProps) {
    function handleSubmit() {
        goToNextStep();
    }

	return (
		<div className='signup-content'>
			<form onSubmit={handleSubmit}>
				<div className='signup-content__main-content'>
                    {currentStep}
                </div>
				<div className={isFirstStep ? 'signup-content__buttons signup-content__buttons--first-step' : 'signup-content__buttons'}>
					{!isFirstStep && (
                        <button type="button" className='signup-content__previous-btn' onClick={goToPreviousStep}>Go Back</button>
                    )}
					<button 
                        className={
                            isLastStep ? 'signup-content__next-btn signup-content__next-btn--confirm-btn': 'signup-content__next-btn'
                            }  
                        >
                        {isLastStep ? "Confirm" : "Next Step"}
                    </button>
				</div>
			</form>
		</div>
	);
}

export default SignupContent;
