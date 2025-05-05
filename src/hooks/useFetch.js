import { useCallback } from 'react';

const useFetch = () => {
  const customFetch = useCallback(async (url, options = {}) => {
    const logEntry = {
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
        const existingLogs = JSON.parse(localStorage.getItem('apiLogs')) || [];
        existingLogs.push(logEntry);
        localStorage.setItem('apiLogs', JSON.stringify(existingLogs));
      } catch {
        localStorage.removeItem('apiLogs');
        localStorage.setItem('apiLogs', JSON.stringify([logEntry]));
      }

      return await response.json();
    } catch (error) {
      logEntry.error = error.message;

      console.error("API Error Log:", logEntry);
      
      try {
        const existingLogs = JSON.parse(localStorage.getItem('apiLogs')) || [];
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
