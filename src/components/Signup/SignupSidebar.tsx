import { sidebarInfoSteps } from "../../data/sidebarInfo";

type SignupSidebarProps = {
	currentStepIndex: number;
};

function SignupSidebar({ currentStepIndex }: SignupSidebarProps) {
	return (
		<div className='signup-sidebar'>
			<div className='signup-sidebar__steps'>
				{sidebarInfoSteps.map((step, index) => (
					<div key={step} className="signup-sidebar__step-box">
						<div
							className={
								currentStepIndex === index
									? "signup-sidebar__step signup-sidebar__step--active"
									: "signup-sidebar__step"
							}>
							{index + 1}
						</div>
						<div className="signup-sidebar__step-info">
							<span className="signup-sidebar__step-info-number">step {index + 1}</span>
							<span className="signup-sidebar__step-info-text">{step}</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default SignupSidebar;
