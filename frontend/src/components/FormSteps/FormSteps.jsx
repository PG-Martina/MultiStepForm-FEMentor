import { useFormContext } from '../../contexts/FormContext';
import Step1 from '../FormSteps/Step1';
import Step2 from '../FormSteps/Step2';
import Step3 from '../FormSteps/Step3';
import Step4 from '../FormSteps/Step4';
import Pagination from '../Pagination/Pagination';
import './_form-steps.scss'

function Steps() {
    const { step, isMobile } = useFormContext();

    const Steps = {
        1: {component: Step1, required: ["name", "phone", "email"]},
        2: {component: Step2, required: ["name", "phone", "email"]},
        3: {component: Step3, required: ["name", "phone", "email"]},
        4: {component: Step4, required: ["name", "phone", "email"]}
    }

    const StepComponent = Steps[step];

    return (
        <div className="form-steps">
            <div className="form-steps__steps">
                {StepComponent ? <StepComponent.component /> : <p>Step not found</p>}
            </div>
            {!isMobile && <Pagination requiredFields={StepComponent.required}/>}
        </div>
    )
}

export default Steps;