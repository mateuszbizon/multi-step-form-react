import SignupContent from "./components/SignupContent";
import SignupSidebar from "./components/SignupSidebar";
import useMultistepForm from "./hooks/useMultistepForm";
import "./sass/main.scss";

function App() {
	const {
		steps,
		currentStepIndex,
		currentStep,
		goToNextStep,
		goToPreviousStep,
	} = useMultistepForm([<div>hello</div>, <div>hello2</div>]);

	return (
		<>
			<div className='signup'>
				<SignupSidebar steps={steps} currentStepIndex={currentStepIndex} />
				<SignupContent currentStep={currentStep} goToNextStep={goToNextStep} goToPreviousStep={goToPreviousStep} />
			</div>
		</>
	);
}

export default App;
