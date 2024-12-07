import { useState, useEffect } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

const ThemeToggle = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem('theme') || 'light'
    );

    useEffect(() => {
        // Apply theme to document element
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    // Toggle between light and dark themes
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <label className="swap swap-rotate">
            <input
                type="checkbox"
                className="theme-controller"
                checked={theme === 'dark'}
                onChange={toggleTheme}
            />

            {/* sun icon */}
            <MdLightMode className="swap-off fill-current w-6 h-6" />


            {/* moon icon */}
            <MdDarkMode className="swap-on fill-current w-6 h-6" />

        </label>
    );
};

export default ThemeToggle;