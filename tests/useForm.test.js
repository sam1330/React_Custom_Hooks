
import { renderHook, act } from "@testing-library/react-hooks";

import { useForm } from "../../hooks/useForm";

describe("tests in useForm", () => {
  const initialForm = {
    name: "Sammy",
    email: "sammy@g.com",
  };

  test("should return default form", () => {
    
    const { result } = renderHook(() => useForm(initialForm));
    const [formValues, handleInputChange, reset] = result.current;

    expect(formValues).toEqual(initialForm);
    expect(typeof handleInputChange).toBe('function');
    expect(typeof reset).toBe('function');
  });

  test("should change the name value in the form", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange] = result.current;

    act(() => {
      handleInputChange({
        target: {
          name: "name",
          value: "mariana"
        }
      });
    });

    const [formValues] = result.current;

    expect(formValues).toEqual({
      ...initialForm,
      name: "mariana"
    });

  });

  test("should reset the form values", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange, reset] = result.current;

    act(() => {
      handleInputChange({
        target: {
          name: "name",
          value: "mariana"
        }
      });
      reset();
    });

    const [formValues] = result.current;

    expect(formValues).toEqual(initialForm);

  });


});