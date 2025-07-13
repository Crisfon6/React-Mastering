import { describe, it, expect } from 'vitest'
import { useForm } from '../../hooks/useForm'
import { act, renderHook } from '@testing-library/react'
import { ChangeEvent } from 'react'

describe('useForm', () => {
    const initialForm = {
        name: 'John',
        email: 'john@example.com'
    }
    it('should return the initial state', () => {
        const { result } = renderHook(() => useForm({}));
        const { formState, onInputChange, onResetForm } = result.current;
        expect(formState).toEqual({});
        expect(onInputChange).toBeTypeOf('function');
        expect(onResetForm).toBeTypeOf('function');
    })
    it('should return the initial state with a custom value', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const { formState } = result.current;
        expect(formState).toEqual(initialForm);
    })
    it('should change the name of the form', () => {
        const newName = 'Jane';
        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange } = result.current;
        act(() => {
            onInputChange({ target: { name: 'name', value: newName } } as ChangeEvent<HTMLInputElement>);
        })
        expect(result.current.formState.name).toBe(newName);
    })
    it('should reset the form', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const { onResetForm } = result.current;
        act(() => {
            onResetForm();
        })
        expect(result.current.formState).toEqual(initialForm);
    })

})