import { renderHook, act } from "@testing-library/react-hooks";

import { useCounter } from "../../hooks/useCounter";

describe('Tests in useCounter', () => {

  test("should return default values", () => {
    
    const { result } = renderHook(() => useCounter());

    expect(result.current.counter).toBe(10);
    expect( typeof result.current.increment).toBe('function');
    expect( typeof result.current.decrement).toBe('function');
    expect( typeof result.current.reset).toBe('function');

  });

  test("should return counter on 100", () => {

    const { result } = renderHook(() => useCounter(100));
    expect(result.current.counter).toBe(100);

  });

  test("should increment counter on 1", () => {
    const { result } = renderHook(() => useCounter(100));
    const { increment } = result.current;

    act(() => {
      increment();
    });

    const { counter } = result.current;
    expect(counter).toBe(101);
  });

  test("should decrement counter on 1", () => {
    const { result } = renderHook(() => useCounter(100));
    const { decrement } = result.current;

    act(() => {
      decrement();
    });

    const { counter } = result.current;
    expect(counter).toBe(99);
  });

  test("should reset counter to 100", () => {
    const { result } = renderHook(() => useCounter(100));
    const { decrement } = result.current;
    const { reset } = result.current;

    act(() => {
      decrement();
      reset();
    });

    const { counter } = result.current;
    expect(counter).toBe(100);
  });

});

