import { renderHook } from '@testing-library/react'
import { act } from 'react-dom/test-utils';
import { useCounter } from '../../src/hooks/useCounter'

describe('useCounter Hook', () => {

    test('should return default values', () => {
        const { result } = renderHook(() => useCounter());
        const { counter, increment, decrement, reset } = result.current;

        expect(counter).toBe(10);
        expect(increment).toEqual(expect.any(Function));
        expect(decrement).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));
    })

    test('should render counter with initialValue 100', () => {
        const { result } = renderHook(() => useCounter(100));
        const { counter } = result.current;

        expect(counter).toBe(100);
    })

    test('should increment counter', () => {
        const { result } = renderHook(() => useCounter(25));
        const { increment } = result.current;

        act(() => {
            increment();
            increment(5);
        })

        const { counter } = result.current;
        expect(counter).toBe(31);
    })

    test('should decrement counter', () => {
        const { result } = renderHook(() => useCounter(25));
        const { decrement } = result.current;

        act(() => {
            decrement();
            decrement(4);
        })

        const { counter } = result.current;
        expect(counter).toBe(20);
    })

    test('should reset counter', () => {
        const { result } = renderHook(() => useCounter(25));
        const { increment, decrement, reset } = result.current;

        act(() => {
            increment(150);
            decrement(30)
            reset();
        })

        const { counter } = result.current;
        expect(counter).toBe(25);
    })

})