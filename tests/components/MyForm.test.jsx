import { it, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MyForm from '../../src/components/MyForm';


describe('MyForm', () => {
    it('should be renders form elements correctly', () => {
        render(<MyForm/>)
    })
    
})