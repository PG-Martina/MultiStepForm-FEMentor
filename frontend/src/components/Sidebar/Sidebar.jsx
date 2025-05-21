import './_sidebar.scss'
import bgDesktop from '../../assets/bg-sidebar-desktop.svg';
import { useFormContext } from '../../contexts/FormContext';
import Steps from '../Steps/Steps';

function Sidebar() {
    const { isMobile } = useFormContext();
    return (
        <div className="sidebar" style={isMobile? null : {backgroundImage: `url("${bgDesktop}")`}}>
            <Steps />
        </div>
    )
}

export default Sidebar;