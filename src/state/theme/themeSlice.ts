import { createSlice } from '@reduxjs/toolkit'
import isStorageSupported from '../../utils/isStorageSupported'
import getDefaultTheme from '../../utils/getDeafultTheme'

import { ThemeInitialStateObj } from '../../types/interfaces'
const initialState: ThemeInitialStateObj = {
    colorTheme: getDefaultTheme(),
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    //Sync reducers list
    reducers: {
        setColorTheme: (state) => {
            let newValue
            if (state.colorTheme === 'dark') {
                newValue = 'light'
            } else {
                newValue = 'dark'
            }
            state.colorTheme = newValue
            //Adding value to local storage
            isStorageSupported('localStorage') &&
                localStorage.setItem('default-theme', JSON.stringify(newValue))
        },
    },
})

export const { setColorTheme } = themeSlice.actions

export default themeSlice.reducer
