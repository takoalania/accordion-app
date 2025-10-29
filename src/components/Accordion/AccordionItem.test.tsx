import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import AccordionItem from "./AccordionItem"

describe('AccordionItem', () => {
    const props = {
        title: "Test Title",
        content: "Test Content",
        isOpen: false,
        onClick: vi.fn(),
    }

    it('renders title and icon', () => {
        render(<AccordionItem {...props} />);
        expect(screen.getByText(/Test Title/i)).toBeInTheDocument();
        expect(screen.queryByText(/Test Content/i)).not.toBeInTheDocument();
    })

    it('calls onClick when clicked', async () => {
        render(<AccordionItem {...props} />);        
        const user = userEvent.setup();
        const button = screen.getByRole('button');
        await user.click(button);
        expect(props.onClick).toHaveBeenCalledTimes(1);
    }) 

    it('shows content if isOpen is true', () => {
        render(<AccordionItem {...props} isOpen={true} />);
        expect(screen.getByText(/Test Content/i)).toBeInTheDocument();
    })
})