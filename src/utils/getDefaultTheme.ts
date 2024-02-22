import isStorageSupported from './isStorageSupported'

const getDefaultTheme = (matchMediaFn?: (query: string) => MediaQueryList) => {
    const defaultMatchMedia = matchMediaFn || window.matchMedia
    let defaultTheme

    const colorScheme = defaultMatchMedia(
        '(prefers-color-scheme: dark)'
    ).matches

    if (isStorageSupported('localStorage')) {
        try {
            // Returning from localStorage if the theme is set in the app
            defaultTheme = JSON.parse(
                localStorage.getItem('default-theme') || ''
            )
        } catch (err) {
            // Theme wasn't set in the app, getting the theme value from the browser
            defaultTheme = colorScheme ? 'dark' : 'light'
        }
        // Local storage not functioning, getting the theme value from the browser
    } else {
        defaultTheme = colorScheme ? 'dark' : 'light'
    }

    return defaultTheme
}

export default getDefaultTheme
