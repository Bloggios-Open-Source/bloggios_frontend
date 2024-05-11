import {createSlice} from "@reduxjs/toolkit";

const ThemeSlice = createSlice({
    name: 'theme',
    initialState: {
        theme: 'light',
        isSelected: false,
    },
    reducers: {
        setTheme: (state, action) => {
            const {
                theme,
                isSelected
            } = action.payload;
            state.theme = theme;
            state.isSelected = isSelected;
        }
    }
});

export {ThemeSlice};

export const {setTheme} = ThemeSlice.actions;