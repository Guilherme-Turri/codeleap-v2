import React from 'react'

export const useFetchData = () => {
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);

  const request = React.useCallback(async <T> (url: string, options: RequestInit) => {
    let response;
    let json:T | null;
    setLoading(true)
    try {
      setError(null)
      response = await fetch(url, options)
      json = await response.json()
      if (!response.ok) throw new Error()
    } catch (e: any) {
      json = null;
      setError('Fail to fetch.')
    }
    finally {
      setLoading(false)
          }
    return { response, json } 
  }, []);
  return { error, request, loading }
} 
