import './_steps.scss';
import Step from '../Step/Step';

function Steps() {
     const steps = ["Your info", "Select plan", "Add-ons", "Summary"];

    return (
        <div className="steps">
            {steps.map((item, index) =>
                <Step key={index} label={item} counter={index + 1}/>
            )}
        </div>
    )
}

export default Steps;