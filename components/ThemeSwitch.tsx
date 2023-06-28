import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function IndexPage() {
    const { theme, setTheme } = useTheme()
    return (
        <>
            <button
                className="rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black"
                onClick={() => {
                    setTheme(theme === 'light' ? 'dark' : 'light')
                }}
            >
                Change Theme
            </button>
        </>
    )
}