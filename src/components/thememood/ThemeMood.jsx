import React, { useEffect, useState } from 'react'
import Card from './Card'
import ThemeBtn from './ThemeBtn'
import { ThemeProvider } from './Theme'

function ThemeMood() {

    const [themeMode, setThemeMode] = useState("light")

    const darkTheme = () => {
        setThemeMode("dark")
    }
    const lightTheme = () => {
        setThemeMode("light")
    }

    useEffect(() => {
        document.querySelector('html').classList.remove("light","dark")
        document.querySelector('html').classList.add(themeMode)
    }, [themeMode])
    

  return (
    <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
    <div className="flex flex-wrap items-center">
        <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-2">
                <ThemeBtn />
            </div>

        </div>
    </div>
    </ThemeProvider>
  )
}

export default ThemeMood