import Accordion from './components/Accordion/Accordion'
import { faqItems } from './data/faq'

function App() {
  return (
    <>
      <Accordion items={faqItems} allowMultipleOpen/>
    </>
  )
}

export default App
