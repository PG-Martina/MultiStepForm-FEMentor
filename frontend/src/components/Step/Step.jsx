import { useFormContext } from "../../contexts/FormContext";
import './_step.scss'

function Step({ label, counter}) {
    const { step } = useFormContext();
    return (
        <div className={`step${step === counter? ' active' : ''}`}>
            <span className="step__counter">{counter}</span>
            <div className="step__info">
                <span className="step__number">{`Step ${counter}`}</span>
                <span className="step__label">{label}</span>
            </div>
        </div>
    )
}

export default Step;