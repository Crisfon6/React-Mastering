import { fireEvent, render, screen } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';
import "@testing-library/jest-dom";

describe('CounterApp Component',()=>{
    const testValue = 10;
    test('should render the component',()=>{
        render(<CounterApp value={testValue} />);
        expect(screen.getByRole('heading',{level:2}).innerHTML).toBe(testValue.toString());
    })
   test('should match with snapshot',()=>{
    const {container} = render(<CounterApp value={testValue} />);
   })
   test('should increment with the +1 button',()=>{
    render(<CounterApp value={testValue} />);
    fireEvent.click(screen.getByRole('button',{name:'+1'}));
    expect(screen.getByRole('heading',{level:2}).innerHTML).toBe((testValue+1).toString());
   })
   test('should decrement with the -1 button',()=>{
    render(<CounterApp value={testValue} />);
    fireEvent.click(screen.getByRole('button',{name:'-1'}));
    expect(screen.getByRole('heading',{level:2}).innerHTML).toBe((testValue-1).toString());
   })
   test('should reset with the reset button',()=>{
    render(<CounterApp value={testValue} />);
    fireEvent.click(screen.getByRole('button',{name:'-1'}));
    fireEvent.click(screen.getByRole('button',{name:'-1'}));
    fireEvent.click(screen.getByRole('button',{name:'-1'}));
    fireEvent.click(screen.getByRole('button',{name:'-1'}));
    fireEvent.click(screen.getByRole('button',{name:'Reset'}));
    expect(screen.getByRole('heading',{level:2}).innerHTML).toBe(testValue.toString());
   })
})
