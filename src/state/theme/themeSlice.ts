import { createSlice } from '@reduxjs/toolkit'
import isStorageSupported from '../../utils/isStorageSupported'
import getDefaultTheme from '../../utils/getDeafultTheme'

import { ThemeInitialStateObj } from '../../types/interfaces'
const initialState: ThemeInitialStateObj = {
    filterStatus: null,
    openFormModal: false,
    colorTheme: getDefaultTheme(),
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    //Sync reducers list
    reducers: {
        setStatus: (state, action) => {
            state.filterStatus = action.payload
        },
        setOpenModal: (state, action) => {
            state.openFormModal = action.payload
        },
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

export const { setStatus, setOpenModal, setColorTheme } = themeSlice.actions

export default themeSlice.reducer
