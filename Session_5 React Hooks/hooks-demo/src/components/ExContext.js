// ExContext truyền CompB truyền CompC
import React, {useState, createContext} from 'react';
import CompB from './CompB'

// tạo ngữ cảnh context chia sẻ DL
export const ThemeContext = createContext();
export default function ExContext() {
    const [theme, setTheme] = useState('light');
    const [message, setMessage] = useState('Rikkei JaVa 10');
    const handleToggleTheme =()=>{
        setTheme (theme ==='light' ? 'dark': 'light');
    }
  return (
    <div>
        <ThemeContext.Provider value={{theme, message}}>
        <h2>React Hooks - Context and useContext</h2>
        <button onClick={handleToggleTheme}>Toggle Theme</button>
        <CompB></CompB>
        </ThemeContext.Provider>
    </div>
  )
}
