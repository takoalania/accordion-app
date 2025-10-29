import { render, screen } from '@testing-library/react';
import { accordionItemType } from "../../types"
import Accordion from "./Accordion";
import userEvent from '@testing-library/user-event';

const items: accordionItemType[] = [
    { title: 'Question 1', content: 'Answer 1' },
    { title: 'Question 2', content: 'Answer 2' },
];

describe('Accordion', () => {
    it('renders all titles', () => {
        render(<Accordion items={items} allowMultipleOpen />);
        expect(screen.getByText('Question 1')).toBeInTheDocument();
        expect(screen.getByText('Question 2')).toBeInTheDocument();
    })

    it('toggles open/close for multiple items if allowMultipleOpen is true', async () => {
        render(<Accordion items={items} allowMultipleOpen />);

        const user = userEvent.setup();

        const button1 = screen.getByText('Question 1');
        await user.click(button1);
        expect(screen.getByText('Answer 1')).toBeInTheDocument();

        const button2 = screen.getByText('Question 2');
        await user.click(button2);
        expect(screen.getByText('Answer 2')).toBeInTheDocument();

        await user.click(button1);
        expect(screen.queryByText('Answer 1')).not.toBeInTheDocument();
    })

    it('only allows one item open if allowMultipleOpen is false', async () => {
        render(<Accordion items={items}  allowMultipleOpen={false} />);

        const user = userEvent.setup();

        const button1 = screen.getByText('Question 1');
        await user.click(button1);
        expect(screen.getByText('Answer 1')).toBeInTheDocument();

        const button2 = screen.getByText('Question 2');
        await user.click(button2);
        expect(screen.getByText('Answer 2')).toBeInTheDocument();
        expect(screen.queryByText('Answer 1')).not.toBeInTheDocument();
    })
})