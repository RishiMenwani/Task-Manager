import { useState } from 'react';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import { useAppDispatch, useAppSelector } from '@/common/hooks/useRedux';
import { themeActions } from '@/store/slices/theme';
import { useEffect } from 'react';

export function ThemeSwitch() {
    const theme = useAppSelector((x) => x.themeSlice.theme);
    const dispatch = useAppDispatch();
    const [isDarkMode, setIsDarkMode] = useState(theme === 'dark');

    useEffect(() => {
        const htmlClasses = document.querySelector('html')!.classList;
        isDarkMode ? htmlClasses.add('dark') : htmlClasses.remove('dark');
    }, [isDarkMode]);

    const handleOnChange = (event) => {
        const newValue = event.target.checked;
        setIsDarkMode(newValue);
        dispatch(themeActions.changeTheme(newValue ? 'dark' : 'light'));
    };

    return (
        <FormGroup>
            <FormControlLabel
                control={
                    <Switch
                        sx={{ m: 1 }}
                        checked={isDarkMode}
                        onChange={handleOnChange}
                        defaultChecked={isDarkMode}
                    />
                }
                label="MUI switch"
            />
        </FormGroup>
    );
}
