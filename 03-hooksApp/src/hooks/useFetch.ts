import { useEffect, useState } from "react";

interface State<T> {
  data: T | null;
  loading: boolean;
  hasError: boolean;
  error: string | null;
}

const localCache: Record<string, any> = {};
export const useFetch = <T>(url: string) => {
  const [state, setState] = useState<State<T>>({
    data: null,
    loading: true,
    hasError: false,
    error: null,
  });
  
  const setLoadinState = () => {
    setState({
      data: null,
      loading: true,
      hasError: false,
      error: null,
    });
  }
  const fetchData = async (isMounted: boolean,url:string) => {
    try {
      setLoadinState();
      if(localCache[url]){
        console.log('Fetching data from cache');
        setState({
          data: localCache[url],
          loading: false,
          hasError: false,
          error: null,
        });
        return;
      }
      const resp = await fetch(url);
      if (!resp.ok) {
        throw new Error(`HTTP error! status: ${resp.status}`);
      }
      const data = await resp.json();
      
      if (isMounted) {
        setState({
          data: data,
          loading: false,
          hasError: false,
          error: null,
        });
      }
      //Save in cache
      localCache[url] = data;
    } catch (error) {
      if (isMounted) {
        setState({
          data: null,
          loading: false,
          hasError: true,
          error: error instanceof Error ? error.message : 'An error occurred'
        });
      }
    }
  };
  useEffect(() => {
    let isMounted = true;    

    fetchData(isMounted,url);

    return () => {
      isMounted = false;
    };
  }, [url]);

  return {
    ...state,
  };
};
