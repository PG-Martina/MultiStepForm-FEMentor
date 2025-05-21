import Wrapper from './components/Wrapper/Wrapper'
import { FormProvider } from './contexts/FormContext'

function App() {

  return (
    <FormProvider>
      <h1 className='sr-only'>Multistep form</h1>
       <Wrapper/>
    </FormProvider>
  )
}

export default App
