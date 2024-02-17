import { FormEvent, ReactNode } from "react";

type SignupContentProps = {
	currentStep: ReactNode;
	goToNextStep: () => void;
	goToPreviousStep: () => void;
};

function SignupContent({ currentStep, goToNextStep, goToPreviousStep }: SignupContentProps) {
    function handleSubmit(e: FormEvent) {
        e.preventDefault();
    }

	return (
		<div className='signup-content'>
			<form onSubmit={handleSubmit}>
				<div className='signup-content__main-content'>
                    {currentStep}
                </div>
				<div className='signup-content__buttons'>
					<button className='signup-content__previous-btn' onClick={goToPreviousStep}>Go Back</button>
					<button className='signup-content__next-btn' onClick={goToNextStep}>Next Step</button>
				</div>
			</form>
		</div>
	);
}

export default SignupContent;
