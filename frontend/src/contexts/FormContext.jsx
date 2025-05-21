import { createContext, useContext, useState } from "react";
import { useWindowSize } from '../hooks/useWindowSize';

const FormContext = createContext(null);

export const useFormContext = () => useContext(FormContext);

export const FormProvider = ({children}) => {
    const [step, setStep] = useState(1);
    const [data, setData] = useState({
        name:{value:"", errorMessage: ""},
        email:{value:"", errorMessage: ""},
        phone:{value:"", errorMessage: ""}
    });

    const isMobile = useWindowSize();

    const value = {
        step,
        setStep,
        data,
        setData,
        isMobile
    }


    return (
        <FormContext.Provider value={value}>
            {children}
        </FormContext.Provider>
    )
}