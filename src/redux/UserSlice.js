import { createAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
    name: 'user',
    initialState: {
        data: []
    },
    reducers: {
        addUser(state, action) {  //create action -For add user
            state.data.push(action.payload)
        }, 
        updateUser(state, action) { // create action -For update user
            let temp=state.data
            temp.map((item, index) => {
                if (index == action.payload.index) {
                    item.name = action.payload.name
                        item.email = action.payload.email
                        item.phone = action.payload.phone
                        item.address = action.payload.address
             }
            })
            state.data=temp
        }, 
        deleteUser(state,action){ // create action -For delete user
            let temp =state.data
            let final= temp.filter((item,index)=>{
                return index!=action.payload
            })
            state.data=final
        }
    }
})
export const { addUser, updateUser,deleteUser} = UserSlice.actions
export default UserSlice.reducer