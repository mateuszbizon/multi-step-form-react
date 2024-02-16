import SignupSidebar from "./components/SignupSidebar";
import useMultistepForm from "./hooks/useMultistepForm";
import "./sass/main.scss";

function App() {
	const { steps, currentStepIndex } = useMultistepForm([<div>hello</div>, <div>hello2</div>]);

	return (
		<>
			<div className='signup'>
				<SignupSidebar steps={steps} currentStepIndex={currentStepIndex} />
			</div>
		</>
	);
}

export default App;
