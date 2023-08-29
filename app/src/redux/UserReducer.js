import { createSlice } from '@reduxjs/toolkit'
import { userList } from '../util/Data'

const userSlice = createSlice({
    name: 'users',
    initialState: userList,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload)
        },
        editUser: (state, action) => {
            const { id, name, email } = action.payload
            const userToEdit = state.find(user => user.id === id)
            if (userToEdit) {
                userToEdit.email = email
                userToEdit.name = name
            }
        },
        deleteUSer: (state, action) => {
            const { id } = action.payload
            return state.filter(user => user.id !== id)
        }
    },

})



export const { addUser, editUser, deleteUSer } = userSlice.actions
export default userSlice.reducer