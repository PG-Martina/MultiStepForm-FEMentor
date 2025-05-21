import InputBox from "../InputBox/InputBox";
import TitleBox from "../TitleBox/TitleBox";

function Step1() {
    const inputs = [
        {label: "Name", placeholder: "e.g. Stephen King", type: "text", name: "name"},
        {label: "Email Address", placeholder: "e.g. stephenking@lorem.com", type: "email", name: "email"},
        {label: "Phone number", placeholder: "e.g. +1 234 567 890", type: "tel", name: "phone"}
    ];
    return (
        <div className="form-step">
            <TitleBox title="Personal info" desc="Please provide your name, email address, and phone number."/>
            <div className="form-step__form">
                {inputs.map((input, index) => 
                    <InputBox key={index} label={input.label} name={input.name} type={input.type} placeholder={input.placeholder}/>
                )}
            </div>
        </div>
    )
}

export default Step1;