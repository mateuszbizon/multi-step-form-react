import { ReactNode } from "react";
import { SignupFields } from "../../validations/SignupSchema";
import { SelectedItems } from "../../App";

type SignupContentProps = {
	currentStep: ReactNode;
	goToNextStep: () => void;
	goToPreviousStep: () => void;
	isFirstStep: boolean;
	isLastStep: boolean;
	handleSubmit: any;
	selectedItems: SelectedItems;
};

function SignupContent({
	currentStep,
	goToNextStep,
	goToPreviousStep,
	isFirstStep,
	isLastStep,
	handleSubmit,
	selectedItems,
}: SignupContentProps) {
	function submitData(data: SignupFields) {
		goToNextStep();
		const finalData = {
			...data,
			...selectedItems
		}
	}

	return (
		<div className='signup-content'>
			<form onSubmit={handleSubmit(submitData)}>
				<div className='signup-content__main-content'>{currentStep}</div>
				<div
					className={
						isFirstStep
							? "signup-content__buttons signup-content__buttons--first-step"
							: "signup-content__buttons"
					}>
					{!isFirstStep && (
						<button
							type='button'
							className='signup-content__previous-btn'
							onClick={goToPreviousStep}>
							Go Back
						</button>
					)}
					<button
						className={
							isLastStep
								? "signup-content__next-btn signup-content__next-btn--confirm-btn"
								: "signup-content__next-btn"
						}>
						{isLastStep ? "Confirm" : "Next Step"}
					</button>
				</div>
			</form>
		</div>
	);
}

export default SignupContent;
