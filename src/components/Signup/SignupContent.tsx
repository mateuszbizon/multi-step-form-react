import { ReactNode, useEffect } from "react";
import { SignupFields } from "../../validations/SignupSchema";
import { SelectedItems } from "../../App";
import ThanksForm from "../Form/ThanksForm";

type SignupContentProps = {
	currentStep: ReactNode;
	goToNextStep: () => void;
	goToPreviousStep: () => void;
	isFirstStep: boolean;
	isLastStep: boolean;
	handleSubmit: any;
	selectedItems: SelectedItems;
	goToExactStep: (stepIndex: number) => void;
	exactStepIndexToMove: number | null;
	setExactStepIndexToMove: (stepIndex: number | null) => void;
	isThanksFormActive: boolean;
	setIsThanksFormActive: (isActive: boolean) => void;
};

function SignupContent({
	currentStep,
	goToNextStep,
	goToPreviousStep,
	isFirstStep,
	isLastStep,
	handleSubmit,
	selectedItems,
	goToExactStep,
	exactStepIndexToMove,
	setExactStepIndexToMove,
	isThanksFormActive,
	setIsThanksFormActive,
}: SignupContentProps) {
	function submitData(data: SignupFields) {
		if (isLastStep) {
			const finalData = {
				...data,
				...selectedItems
			}
			console.log(finalData);

			setIsThanksFormActive(true);
			return;
		}

		goToNextStep();
	}

	useEffect(() => {
		if (exactStepIndexToMove != null) {
			goToExactStep(exactStepIndexToMove);
			setExactStepIndexToMove(null);
		}
	}, [exactStepIndexToMove])

	return (
		<div className='signup-content'>
			<form onSubmit={handleSubmit(submitData)}>
				<div className='signup-content__main-content'>{!isThanksFormActive ? currentStep : <ThanksForm />}</div>
				{!isThanksFormActive && (
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
				)}
			</form>
		</div>
	);
}

export default SignupContent;
