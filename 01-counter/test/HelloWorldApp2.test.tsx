import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { HelloWorldApp } from "../src/HelloWorldApp";

describe("HelloWorldApp Component", () => {
  const testName = "Cristian";
  const testSubtitle = "This is a simple React component.";
  test("should have the title in a h1 tag", () => {
    const { container } = render(
      <HelloWorldApp name={testName} subtitle={testSubtitle} />
    );
    expect(container).toMatchSnapshot();
  });
  test("should be the title Hello Cristian", () => {
    render(<HelloWorldApp name={testName} subtitle={testSubtitle} />);
    expect(screen.getByText(`Hello ${testName}`)).toBeInTheDocument();
  });
  test('should have the title in h1 tag',()=>{
    render(<HelloWorldApp name={testName} subtitle={testSubtitle} />);
    expect(screen.getByRole('heading',{level:1})).toHaveTextContent(`Hello ${testName}`);
  })
  test('should have the subtitle in a p tag',()=>{
    render(<HelloWorldApp name={testName} subtitle={testSubtitle} />);
    expect(screen.getAllByText(testSubtitle).length).toBe(2);
  })
});
