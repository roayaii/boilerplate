import { useLocalStorage, useDark, useToggle } from "@vueuse/core"

export default function () {
    const isDark = useDark({
        selector: 'html',
        attribute: 'class',
        valueDark: 'dark',
        valueLight: 'light',
    })
    
    // const theme = useLocalStorage('userPrefferedTheme', () => false)


    function setDark() {
        console.log('dark theme')
        console.log(isDark.value)
        isDark.value = true

    }



    function setLight () {
        console.log('light theme')
        console.log(isDark.value)
        isDark.value = false
    }

    
    return {
        isDark ,
        setDark,
        setLight,
    }
}