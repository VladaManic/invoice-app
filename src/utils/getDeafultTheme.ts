import isStorageSupported from './isStorageSupported'

const getDefaultTheme = () => {
    let defaultTheme
    const colorScheme = window.matchMedia(
        '(prefers-color-scheme: dark)'
    ).matches
    if (isStorageSupported('localStorage')) {
        try {
            //Returning from localStorage if theme is set in app
            defaultTheme = JSON.parse(
                localStorage.getItem('default-theme') || ''
            )
        } catch (err) {
            //Theme wasn't set in app, getting theme value from browser
            defaultTheme = colorScheme ? 'dark' : 'light'
        }
        //Local storage not functioning, getting theme value from browser
    } else {
        defaultTheme = colorScheme ? 'dark' : 'light'
    }
    return defaultTheme
}

export default getDefaultTheme
