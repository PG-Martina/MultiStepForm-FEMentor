import { useFormContext } from "../../contexts/FormContext";

function InputBox({ label, name, type, placeholder}) {
    const { data, setData } = useFormContext();

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setData((prevData) => ({
        ...prevData,
        [name]: value,
        }));
    }

    return (
        <div className="input-box">
            <label htmlFor={name}>{label}</label>
            <input type={type} placeholder={placeholder} name={name} value={data[name] || ""} onChange={handleInputChange}/>
        </div>
    )
}

export default InputBox;