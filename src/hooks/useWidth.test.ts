import { renderHook } from "@testing-library/react"

import { useWidth } from './useWidth';

describe('useWidth', () => {
  it('should return the window width', () => {
    const { result } = renderHook(() => useWidth());
    expect(result.current).toBe(window.innerWidth);
  });
});