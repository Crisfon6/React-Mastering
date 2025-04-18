import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CardCategory } from "../../src/components/CardCategory";
import React from "react";

describe("CardCategory", () => {
  test("to match snapshot", () => {
    const url = "https://media1.giphy.com/media/v1.Y2lkPTNhZGQxM2Vidmw2eWtvYnJjNGJuN3g1N2F6anBlbThjc3ByNWZtOGdsejhlN2s5MSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/VXJWhaO7afRe/giphy.gif";

    const {container} =  render(<CardCategory title="test" url={url}/>);
    expect(container).toMatchSnapshot();
  });
  test("should render the card category", () => {
    const url = "https://media1.giphy.com/media/v1.Y2lkPTNhZGQxM2Vidmw2eWtvYnJjNGJuN3g1N2F6anBlbThjc3ByNWZtOGdsejhlN2s5MSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/VXJWhaO7afRe/giphy.gif";

    render(<CardCategory title="test" url={url}/>);
    expect(screen.getByText("test")).toBeTruthy();
  });
  test("should render the card category with the correct url", () => {
    const url = "https://media1.giphy.com/media/v1.Y2lkPTNhZGQxM2Vidmw2eWtvYnJjNGJuN3g1N2F6anBlbThjc3ByNWZtOGdsejhlN2s5MSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/VXJWhaO7afRe/giphy.gif";

    render(<CardCategory title="test" url={url}/>);
    const backgroundDiv = screen.getByTestId("gif-image");
    expect(backgroundDiv).toHaveStyle(`background-image: url(${url})`);
  });
  test("should render the card category with the correct title", () => {
    const title = "test";
    const url = "https://media1.giphy.com/media/v1.Y2lkPTNhZGQxM2Vidmw2eWtvYnJjNGJuN3g1N2F6anBlbThjc3ByNWZtOGdsejhlN2s5MSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/VXJWhaO7afRe/giphy.gif";
    render(<CardCategory title={title} url={url}/>);
    expect(screen.getByText(title)).toBeTruthy();
    expect(screen.getByRole("heading", {name: title}).innerHTML).toBe(title);
  });
});
