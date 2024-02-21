import { FormEvent, ReactNode, useEffect } from "react";
import { FormFieldsErrors, FormFields } from "../../App";
import personInfoValidation from "../../validations/personInfoValidation";

type SignupContentProps = {
	currentStep: ReactNode;
	goToNextStep: () => void;
	goToPreviousStep: () => void;
	isFirstStep: boolean;
	isLastStep: boolean;
	errors: Partial<FormFieldsErrors>;
	setErrors: (errors: Partial<FormFieldsErrors>) => void;
	form: FormFields;
};

function SignupContent({
	currentStep,
	goToNextStep,
	goToPreviousStep,
	isFirstStep,
	isLastStep,
	errors,
	setErrors,
	form,
}: SignupContentProps) {
	function handleSubmit(e: FormEvent) {
        e.preventDefault();
		setErrors(personInfoValidation(form));
	}

    function handleGoToNextStep() {
        goToNextStep();
    }

    useEffect(() => {
        if (Object.keys(errors).length == 0 && form.email.length > 0 && form.name.length > 0 && form.phone.length > 0) {
            handleGoToNextStep();
        }
    }, [errors])

	return (
		<div className='signup-content'>
			<form onSubmit={handleSubmit}>
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
