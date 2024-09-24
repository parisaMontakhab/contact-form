import { it, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MyForm from '../../src/components/MyForm';


describe('MyForm', () => {
    it('should be renders form elements correctly', () => {
        render(<MyForm/>)

        const inputFirstName = screen.getByLabelText(/First Name/i);
        const inputLastName = screen.getByLabelText(/Last Name/i);
        const inputEmail = screen.getByLabelText(/Email Adress/i);
        const inputGeneralquery = screen.getByLabelText(/General Enquiry/i);
        const inputSupportQuery = screen.getByLabelText(/Support Request/i);
        const textAreaElement = screen.getByLabelText(/Message/i);
        const checkBoxElement = screen.getByRole('checkbox');
        const submitButton = screen.getByRole('button',{name:/submit/i});

        expect(inputFirstName).toBeInTheDocument();
        expect(inputLastName).toBeInTheDocument();
        expect(inputEmail).toBeInTheDocument();
        expect(inputGeneralquery).toBeInTheDocument();
        expect(inputSupportQuery).toBeInTheDocument();
        expect(textAreaElement).toBeInTheDocument();
        expect(checkBoxElement).toBeInTheDocument();
        expect(submitButton).toBeInTheDocument();
    })
    
})