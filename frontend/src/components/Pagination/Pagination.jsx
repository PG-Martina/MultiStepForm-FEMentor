import { useFormContext } from '../../contexts/FormContext';
import './_pagination.scss'
import Button from '@mui/material/Button';

function Pagination({ requiredFields }) {
    const { step, setStep, data, setData } = useFormContext();

    console.info(requiredFields)

    const handleNextStepClick = () => {
        if(requiredFields.some(input => data[input].value.toString().trim() === '')) {
            requiredFields.forEach(input => {
                    if(data[input].value === '') {
                        setData(prev => (
                            {
                            ...prev,
                            [input]: {
                                ...prev[input],
                                errorMessage: 'This field is required'
                            }
                            }
                        ))
                    } else {
                        setData(prev => (
                            {
                            ...prev,
                            [input]: {
                                ...prev[input],
                                errorMessage: ''
                            }
                            }
                        ))
                    }
                });
        } else {
            setStep(step + 1);
        }
    };

    const handlePrevStepClick = () => {
        setStep(step - 1);
    };

    return (
        <div className="pagination">
            {step > 1 && <Button variant="text" sx={{color: "hsl(231, 11%, 63%)", textTransform: "none", fontFamily:"'Ubuntu', sans-serif"}} onClick={handlePrevStepClick}>Go Back</Button>}
            {step < 4 && <Button variant="contained" sx={{backgroundColor: "hsl(213, 96%, 18%)", textTransform: "none", fontFamily:"'Ubuntu', sans-serif", marginLeft: "auto"}} onClick={handleNextStepClick}>Next Step</Button>}
        </div>
    )
}

export default Pagination;