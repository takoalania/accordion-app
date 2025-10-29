import './Accordion.css';

interface Props {
    title: string;
    content: string;
    isOpen: boolean;
    onClick: () => void;
}

const AccordionItem = ({title, content, isOpen, onClick}: Props) => {
  return (
    <div className="accordion-item">
        <button className="accordion-title" onClick={onClick}>
            <span>{title}</span>
            <span className={`accordion-icon ${isOpen ? 'open' : ''}`} />
        </button>
        {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  )
}

export default AccordionItem