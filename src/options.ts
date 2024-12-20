export function getOptions() {
    return { theme: 'dark', fontSize: '14px' };
  }
  
  export function saveOptions(options: { theme: string, fontSize: string }) {
    localStorage.setItem('options', JSON.stringify(options));
  }
  