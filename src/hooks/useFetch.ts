import { useCallback } from 'react';

interface IFetchOptions extends RequestInit {}

interface ILogEntry {
  url: string;
  method: string;
  body: any;
  timestamp: string;
  status?: number;
  error?: string;
}

const useFetch = () => {
  const customFetch = useCallback(async (url: string, options: IFetchOptions = {}): Promise<any> => {
    const logEntry: ILogEntry = {
      url,
      method: options.method || 'GET',
      body: options.body || null,
      timestamp: new Date().toISOString(),
    };

    try {
      const response = await fetch(url, options);
      logEntry.status = response.status;

      console.log("API Call Log:", logEntry);

      try {
        const existingLogs: ILogEntry[] = JSON.parse(localStorage.getItem('apiLogs') || '[]');
        existingLogs.push(logEntry);
        localStorage.setItem('apiLogs', JSON.stringify(existingLogs));
      } catch {
        localStorage.removeItem('apiLogs');
        localStorage.setItem('apiLogs', JSON.stringify([logEntry]));
      }

      return await response.json();
    } catch (error: any) {
      logEntry.error = error.message;

      console.error("API Error Log:", logEntry);
      
      try {
        const existingLogs: ILogEntry[] = JSON.parse(localStorage.getItem('apiLogs') || '[]');
        existingLogs.push(logEntry);
        localStorage.setItem('apiLogs', JSON.stringify(existingLogs));
      } catch {
        localStorage.removeItem('apiLogs');
        localStorage.setItem('apiLogs', JSON.stringify([logEntry]));
      }
      throw error;
    }
  }, []);

  return customFetch;
};

export default useFetch;
