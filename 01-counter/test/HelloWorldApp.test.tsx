import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { HelloWorldApp } from '../src/HelloWorldApp';

describe('HelloWorldApp Component', () => {
   /*  test('renders correctly with given prop name', () => {
        const testName = 'Cristian';

        const {container} = render(<HelloWorldApp name={testName} />);

        expect(container).toMatchSnapshot();
        
    }); */
    test('should have the title in a h1 tag',()=>{
        const testName = 'Cristian';
        const testSubtitle = 'This is a simple React component.';
        const { container , getByText, getByTestId, getAllByText} = render(<HelloWorldApp name={testName} subtitle={testSubtitle} />);
        
        expect(getByText(`Hello ${testName}`)).toBeTruthy();
        /* const h1 = container.querySelector('h1'); */
        /* expect(h1).not.toBeNull();
        expect(h1?.innerHTML).toContain(`Hello ${testName}`); */
        expect(getByTestId('test-title')).toHaveTextContent(`Hello ${testName}`);
        expect(getAllByText(testSubtitle)).toBeTruthy();
        expect(getAllByText(testSubtitle).length).toBe(2);
    })
});
