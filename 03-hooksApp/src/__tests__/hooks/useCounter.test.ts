import { describe, it, expect } from 'vitest'
import { useCounter } from '../../hooks/useCounter'
import { act, renderHook } from '@testing-library/react'

describe('useCounter', () => {
    it('should return the initial state', () => {
        const { result } = renderHook(() => useCounter())
        const { counter, increment, decrement, reset } = result.current;
        expect(counter).toBe(10)
        expect(increment).toBeTypeOf('function')
        expect(decrement).toBeTypeOf('function')
        expect(reset).toBeTypeOf('function')
    })
    it('should generate the initial state with a custom value', () => {
        const { result } = renderHook(() => useCounter(100))
        expect(result.current.counter).toBe(100)
    })
    it('should increment the counter', () => {
        const { result } = renderHook(() => useCounter())
        act(() => {
            result.current.increment()
        })
        expect(result.current.counter).toBe(11)
       
    })
    it('should decrement the counter', () => {
        const { result } = renderHook(() => useCounter())
        act(() => {
            result.current.decrement()
            result.current.decrement()
        })
        expect(result.current.counter).toBe(8)
    })
    it('increment with a custom factor', () => {
        const { result } = renderHook(() => useCounter())
        act(() => {
            result.current.increment(2)
        })
        expect(result.current.counter).toBe(12)
    })
    it('decrement with a custom factor', () => {
        const { result } = renderHook(() => useCounter())
        act(() => {
            result.current.decrement(2)
        })
        expect(result.current.counter).toBe(8)
    })
    it('should reset the counter', () => {
        const { result } = renderHook(() => useCounter())
        act(() => {
            result.current.reset()
        })
        expect(result.current.counter).toBe(10)
    })
})      