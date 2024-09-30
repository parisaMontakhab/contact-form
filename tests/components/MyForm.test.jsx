import React from "react";
import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MyForm from "../../src/components/MyForm";
import userEvent from "@testing-library/user-event";

describe("MyForm", () => {
  beforeEach(() => {
    render(<MyForm />);
  });

  it("should return  all of the elements in the form ", () => {
    expect(screen.getByText(/Contact Us/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Last Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email Adress/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/General Enquiry/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Support Request/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
  });

  it("should return this field is required if value of inputs are missing, like first name,last name,email,message", async () => {
    const user = userEvent.setup();

    await user.clear(screen.getByLabelText(/First Name/i));
    await user.clear(screen.getByLabelText(/Last Name/i));
    await user.clear(screen.getByLabelText(/Email Adress/i));
    await user.clear(screen.getByLabelText(/Message/i));
    await user.click(screen.getByRole("button", { name: /submit/i }));

    expect(screen.queryAllByText(/This field is required/i)).toHaveLength(4);
  });

  it("should return invalid first name and last name with number and like @/&..", async () => {
    const user = userEvent.setup();

    await user.type(screen.getByLabelText(/First Name/i), "Pari@123");
    await user.type(screen.getByLabelText(/Last Name/i), "Monta$$123");
    await user.click(screen.getByRole("button", { name: /submit/i }));

    expect(screen.queryByText(/Invalid first name/i)).toBeInTheDocument();
    expect(screen.queryByText(/Invalid last name/i)).toBeInTheDocument();
  });

  it("should return invalid name if first name and last name are not between 2 and 50 charecters ", async () => {
    const user = userEvent.setup();

    await user.type(screen.getByLabelText(/First Name/i), "A");
    await user.type(screen.getByLabelText(/Last Name/i), "B");
    await user.click(screen.getByRole("button", { name: /submit/i }));

    expect(screen.queryByText(/Invalid first name/i)).toBeInTheDocument();
    expect(screen.queryByText(/Invalid last name/i)).toBeInTheDocument();

    await user.clear(screen.getByLabelText(/First Name/i));
    await user.clear(screen.getByLabelText(/Last Name/i));


    await user.type(screen.getByLabelText(/First Name/i), "A".repeat(51));
    await user.type(screen.getByLabelText(/Last Name/i), "B".repeat(51));
    await user.click(screen.getByRole("button", { name: /submit/i }));

    expect(screen.queryByText(/Invalid first name/i)).toBeInTheDocument();
    expect(screen.queryByText(/Invalid last name/i)).toBeInTheDocument();
  });
});
