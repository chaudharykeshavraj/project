import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: 'user',
    initialState: {
        value: null
    },
    reducers: {
        serUser: (state, action) => {
            state.value = action.payload
        },
        clearUser: state => {
            state.value = null
        }
    }
})

export default userSlice.reducer    // reducers and reducer different , import directly with name

export const {setUser, clearUser} = userSlice.actions       // named export, during import indirectly "import as ...", data of store is volatile