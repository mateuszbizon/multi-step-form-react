import { ReactNode } from "react";

type SignupSidebarProps = {
	steps: ReactNode[];
	currentStepIndex: number;
};

function SignupSidebar({ steps, currentStepIndex }: SignupSidebarProps) {
	return (
		<div className='signup-sidebar'>
			<div className='signup-sidebar__steps'>
				{steps.map((_, index) => (
					<>
						<div
							className={
								currentStepIndex === index
									? "signup-sidebar__step signup-sidebar__step--active"
									: "signup-sidebar__step"
							}>
							{index + 1}
						</div>
					</>
				))}
			</div>
		</div>
	);
}

export default SignupSidebar;
