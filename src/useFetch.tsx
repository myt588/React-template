import { useState, useEffect } from 'react';
import { useAuth0 } from './Auth0';
import { APIClient } from './APIClient';

export function useFetch<T>(initialState: T, fetch: (token: string | undefined) => Promise<APIJSONPayload<T>>) {
  const { getTokenSilently } = useAuth0();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<T>(initialState);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    setError(null);
    try {
      setIsLoading(true);
      const token = await getTokenSilently();
      const res = await fetch(token);
      setData(res.data);
    } catch (e) {
      setError(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, isLoading, error };
}

export function usePrivate() {
  const fetchData = (token: string | undefined) => {
    const api = new APIClient(token);
    return api.getPrivate();
  };
  return useFetch<API.PrivateResponse>({ message: '' }, fetchData);
}
