import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"


test("Should load Contact Us Component", () => {

    render(<Contact/>)
    
    const heading = screen.getByRole("heading")

    expect(heading).toBeInTheDocument()
})

test("Should loads the button inside the Contact Component", () => {

    render(<Contact/>)
    
    const button = screen.getByRole("button")

    expect(button).toBeInTheDocument()
})

test("Should loads the button inside the Contact Component", () => {

    render(<Contact/>)
    
    const inputBoxes = screen.getAllByRole("textbox")

    expect(inputBoxes.length).toBe(2)

})

