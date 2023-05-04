import { act, renderHook } from "@testing-library/react"
import { useFetchData } from "./useFetchData"

describe('useFetchData custom hook', () =>{
  it('should return default values', () =>{
    const {result} = renderHook(() =>useFetchData())
    expect(result.current.error).toBe(null);
    expect(result.current.loading).toBe(false);
    expect(result.current.request).toBeInstanceOf(Function);
   })

  it('should called request with url and options', async () =>{
   const {result} = renderHook(() =>useFetchData())
   const mockFetch = jest.spyOn(window, 'fetch');
   mockFetch.mockImplementationOnce(() =>
    Promise.resolve(
      new Response(JSON.stringify({}), {
        status: 200,
      })
    )
);
  const url = '123';
  const options = {};
    await act(async () => {
    result.current.request(url, options);
    });

    expect(mockFetch).toHaveBeenCalledWith(url, options);
    expect(result.current.error).toBe(null);  

    
   })

   it('should fail to fetch in server down', async () =>{
    const {result} = renderHook(() =>useFetchData())
    const mockFetch = jest.spyOn(window, 'fetch');

  mockFetch.mockImplementationOnce(() =>
  Promise.resolve(
    new Response(JSON.stringify({}), {
      status: 404,
      statusText: 'Not Found',
      headers: { 'Content-type': 'application/json' }
    })
  )
);

    const url = '123';
    const options = {};

    await act(async () => {
    await result.current.request(url, options);
    });

    expect(mockFetch).toHaveBeenCalledWith(url, options);
    expect(result.current.error).toBe('Fail to fetch.');  

 

  })


})


