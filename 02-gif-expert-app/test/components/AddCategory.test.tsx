import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';
import React from 'react';
describe('Testing AddCategory',()=>{

   
    test('shoudl change the value of the input',()=>{
         
        render(<AddCategory onNewCategory={()=>{}}/>)
        const input = screen.getByRole('textbox') as HTMLInputElement;
        fireEvent.change(input, {target: {value: 'gatos'}});
        expect(input.value).toBe('gatos');
    })
    test('should not add a category if the input is empty',()=>{
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory}/>)
        const input = screen.getByRole('textbox') as HTMLInputElement;
        const form = screen.getByRole('form');
        fireEvent.change(input, {target: {value: ''}});
        fireEvent.submit(form);
        expect(input.value).toBe('');        
        expect(onNewCategory).not.toHaveBeenCalled();
    })
    test('should call onNewCategory if the input is not empty',()=>{
        const onNewCategory = jest.fn();
        const category = 'gatos';
        render(<AddCategory onNewCategory={onNewCategory}/>)
        const input = screen.getByRole('textbox') as HTMLInputElement;
        const form = screen.getByRole('form');
        fireEvent.change(input, {target: {value: category}});
        fireEvent.submit(form);
        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledWith(category);
        expect(onNewCategory).toHaveBeenCalledTimes(1);
    })
    
})