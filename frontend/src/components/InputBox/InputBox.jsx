import { useFormContext } from "../../contexts/FormContext";
import './_input-box.scss'

function InputBox({ label, name, type, placeholder}) {
    const { data, setData } = useFormContext();

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setData((prevData) => ({
        ...prevData,
        [name]: {
            ...prevData[name],
            value: value,
            errorMessage: ''

        },
        }));
    }

    return (
        <div className="input-box">
            <div className="input-box__labels">
                <label htmlFor={name}>{label}</label>
                {data[name].errorMessage !== '' && <span className="input-box__error">{data[name].errorMessage}</span>}
            </div>
            <input type={type} placeholder={placeholder} name={name} value={data[name].value || ""} onChange={handleInputChange} className={data[name].errorMessage !== '' ? 'error' : ''}/>
        </div>
    )
}

export default InputBox;