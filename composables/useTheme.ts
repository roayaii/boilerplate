import { useLocalStorage } from "@vueuse/core"
export default function () {
    const theme = useLocalStorage('userPrefferedTheme', () => 'normal')

    
    return {
        theme,
    }
}