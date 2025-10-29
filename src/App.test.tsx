import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
    it('renders FAQ accordion items from faqItems', () => {
        render(<App />);
        expect(screen.getByText(/What is Github/i)).toBeInTheDocument();
        expect(screen.getByText(/How do I see GitHub's availability/i)).toBeInTheDocument();
    })
})