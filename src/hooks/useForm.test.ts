import { act, renderHook } from "@testing-library/react"
import { useForm } from "./useForm"
import React from 'react';

describe('useForm custom hook', () =>{
  it('should return default values', () =>{
    const {result} = renderHook(() =>useForm())
    expect(result.current.value).toBe('')
    expect(result.current.error).toBe('')
    expect(result.current.onChange).toBeInstanceOf(Function)
    expect(result.current.setValue).toBeInstanceOf(Function)
  })

  it('should return new values in a Input Element with no error regex', () =>{
    const {result} = renderHook(() =>useForm())
    const event = {
      target: { value: "test@test.com", placeholder: "Email" }
    } as React.ChangeEvent<HTMLInputElement>;
    act(() => {
      result.current.onChange(event);
    });
    expect(result.current.value).toBe('test@test.com')
    expect(result.current.error).toBe('')
  })

  it('should return new values in a Input Element with error regex', () =>{
    const {result} = renderHook(() =>useForm())
    const event = {
      target: { value: "test@", placeholder: "Email" }
    } as React.ChangeEvent<HTMLInputElement>;
    act(() => {
      result.current.onChange(event);
    });
    expect(result.current.value).toBe('test@')
    expect(result.current.error).toBe('Please fill in a valid email.')
  })
})