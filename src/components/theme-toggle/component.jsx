import { useMemo } from 'react';
import { Button } from "../button/component.jsx";
import { useCurrentTheme, ThemeContext } from '../../contexts/theme.js';

export const ThemeToggle = () => {
    const {toggleTheme} = useCurrentTheme();
    const headerTheme = useMemo(() => ({theme: 'default'}), []);

    return (
        //  {/* чтобы эта кнопка не меняла тему в зависимости от контекста*/}
         <ThemeContext.Provider value={headerTheme}>
            <Button onClick={toggleTheme}>
                Toggle theme
            </Button>
        </ThemeContext.Provider> 
    )
}