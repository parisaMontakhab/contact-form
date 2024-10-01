import React from "react";
import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MyMessage from "../../src/components/MyMessage";
import userEvent from "@testing-library/user-event";

describe('MyMessage', () => {
    render(<MyMessage/>)
    it('should return all them when MyMessage is rendering', () => {
        expect(screen.getByText(/Message sent !/i)).toBeInTheDocument();
        expect(screen.getByText(/Thanks for completing the form,we'll be in touch soon!/i)).toBeInTheDocument();
        expect(screen.getByTestId(/testId/i)).toBeInTheDocument();
    })
    
})