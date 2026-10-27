import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Button } from './styles';
import { FaSun } from 'react-icons/fa';
import { FaMoon } from 'react-icons/fa';

export const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();
  const [checked, setChecked] = useState(true);
  useEffect(() => {
    theme === 'light' ? setChecked(false) : setChecked(true);
  }, [theme]);
  const handleChange = () => {
    setChecked(!checked);
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <Button title="Toggle theme" onClick={() => handleChange()}>
      {theme === 'light' ? <FaMoon size={20} /> : <FaSun size={20} />}
    </Button>
  );
};
