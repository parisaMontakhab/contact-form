import React from 'react';
import { it, expect, describe } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MyForm from '../../src/components/MyForm';


describe('MyForm', () => {
    beforeEach(() => {
        render(<MyForm />); 
      });

    it('should we have all of the elements when the form is rendered ', () => {
        
        expect(screen.getByText(/Contact Us/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Last Name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Email Adress/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/General Enquiry/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Support Request/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();
        expect(screen.getByRole('checkbox')).toBeInTheDocument();
        expect(screen.getByRole('button',{name:/submit/i})).toBeInTheDocument();
    }); 

    it('should accept valid firstName and lastName', () => {
        
      fireEvent.change(screen.getByLabelText(/First Name/i), {target: {value: 'Parisa'}});
      fireEvent.change(screen.getByLabelText(/Last Name/i), {target: {value: 'Montakhabisani'}});
      fireEvent.click(screen.getByRole('button',{name:/submit/i}));

      expect(screen.queryByText(/Invalid first name/i)).not.toBeInTheDocument();
      expect(screen.queryByText(/Invalid last name/i)).not.toBeInTheDocument();
        
    });

    it('should reject invalid firstName and lastName', () => {
        
        fireEvent.change(screen.getByLabelText(/First Name/i), {target: {value: 'Pari@123'}});
        fireEvent.change(screen.getByLabelText(/Last Name/i), {target: {value: 'Monti!@123'}});
        fireEvent.click(screen.getByRole('button',{name:/submit/i}));
  
        expect(screen.queryByText(/Invalid first name/i)).toBeInTheDocument();
        expect(screen.queryByText(/Invalid last name/i)).toBeInTheDocument();
          
      });

      it('should not submit form if firstname input or lastname input is missing ', () => {
        
        fireEvent.change(screen.getByLabelText(/First Name/i), {target: {value: ''}});
        fireEvent.change(screen.getByLabelText(/Last Name/i), {target: {value: ''}});
        fireEvent.click(screen.getByRole('button',{name:/submit/i}));

        expect(screen.queryAllByText(/This field is required/i).length).toBe(4);

      });
     

    
})