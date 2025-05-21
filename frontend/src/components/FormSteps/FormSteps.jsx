import { useFormContext } from '../../contexts/FormContext';
import Step1 from '../FormSteps/Step1';
import Step2 from '../FormSteps/Step2';
import Step3 from '../FormSteps/Step3';
import Step4 from '../FormSteps/Step4';
import './_form-steps.scss'

function Steps() {
    const { step } = useFormContext();

    const Steps = {
        1: Step1,
        2: Step2,
        3: Step3,
        4: Step4
    }

    const StepComponent = Steps[step];

    return (
        <div className="form-steps">
            {StepComponent ? <StepComponent /> : <p>Step not found</p>}
        </div>
    )
}

export default Steps;