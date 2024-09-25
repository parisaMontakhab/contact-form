import React from 'react';
import { it, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MyForm from '../../src/components/MyForm';


describe('MyForm', () => {
    it('should we have all of them when the form is rendered', () => {
        render(<MyForm/>)
        
        expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Last Name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Email Adress/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/General Enquiry/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Support Request/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();
        expect(screen.getByRole('checkbox')).toBeInTheDocument();
        expect(screen.getByRole('button',{name:/submit/i})).toBeInTheDocument();
    })
    
})