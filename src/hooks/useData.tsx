import {useState, useCallback} from 'react';

const useData = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async (id: string) => {
    setIsLoading(true);
    const URL = `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${id}&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true`;

    try {
      const response = await fetch(URL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          'x-cg-pro-api-key': 'CG-RafJRjawreuHsr5SMPnAyjcL',
        },
      });
      const parsedResponse = await response.json();

      if (!response.ok) {
        throw new Error(parsedResponse.status.error_message);
      }
      return parsedResponse;
    } catch (err) {
      console.log('fetchData error', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const clearError = () => setError(null);

  return {fetchData, isLoading, error, clearError};
};

export default useData;
