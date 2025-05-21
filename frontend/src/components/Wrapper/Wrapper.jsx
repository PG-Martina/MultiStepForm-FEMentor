import './_wrapper.scss'
import bgMobile from '../../assets/bg-sidebar-mobile.svg';
import { useFormContext } from '../../contexts/FormContext';
import Sidebar from '../Sidebar/Sidebar';
import FormSteps from '../FormSteps/FormSteps';

function Wrapper() {
    const { isMobile } = useFormContext();

    return (
        <div className="wrapper">
            {isMobile &&
                <div className="wrapper__top">
                    <img src={bgMobile} alt="Decorative image" />
                    <Sidebar/>
                </div>
            }
            <div className="wrapper__card">
                {!isMobile && <Sidebar/>}
                <FormSteps />
            </div>
        </div>
    )
}

export default Wrapper;