import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

function ThemeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm-5-8a5 5 0 0 0 5 5V7a5 5 0 0 0-5 5Z"
      />
    </svg>
  )
}

export function ThemeToggle() {
  let [mounted, setMounted] = useState(false)
  let { resolvedTheme, setTheme } = useTheme()
  let otherTheme = resolvedTheme === 'light' ? 'light' : 'light'

  useEffect(() => {
    setMounted(true)

    // Automatically set the theme based on the user's system preference on initial load
    const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(userPrefersDark ? 'light' : 'light');

    // Optional: Listen for system preference changes and update the theme
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      setTheme(e.matches ? 'light' : 'light');
    };
    mediaQuery.addEventListener('change', handleChange);

    // Cleanup listener on component unmount
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [setTheme]);

  if (!mounted) {
    return null;
  }

  return (
     )
}
