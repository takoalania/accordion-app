import { useState } from 'react'
import type { accordionItemType } from '../../types'
import AccordionItem from './AccordionItem';

interface Props {
    items: accordionItemType[];
    allowMultipleOpen?: boolean;
}

const Accordion = ({items, allowMultipleOpen = false}: Props) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [openIndexes, setOpenIndexes] = useState<number[]>([]);

    const toggleItem = (index: number) => {
        if (allowMultipleOpen) {
            setOpenIndexes((prev) => 
                prev.includes(index)
                ? prev.filter((i) => i !== index)
                : [...prev, index]
            )
        } else {
            setOpenIndex(prev => (prev === index ? null : index));
        }
    }

  return items.map((item, index) => (
    <AccordionItem 
        key={index}
        title={item.title}
        content={item.content}
        isOpen={allowMultipleOpen ? openIndexes.includes(index) : openIndex === index}
        onClick={() => toggleItem(index)}
    />
  ))
}

export default Accordion