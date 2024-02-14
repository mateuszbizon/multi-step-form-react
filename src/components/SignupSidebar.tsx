import { ReactNode } from "react";

type SignupSidebarProps = {
	steps: ReactNode[];
	currentStep: number;
};

function SignupSidebar({ steps, currentStep }: SignupSidebarProps) {
	return (
		<div className='signup-sidebar'>
			<div className='signup-sidebar__steps'>
				{steps.map((_, index) => (
					<>
						<div
							className={
								currentStep === index
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
