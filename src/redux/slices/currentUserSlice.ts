import { createSlice,PayloadAction} from "@reduxjs/toolkit";
import { getUser } from "../tasks/userTask";
//import { User } from "../../utils/interfaces";
import {GoogleData, User, UserDatabaseResponse} from "../../types/userType"


interface initState {
	user: UserDatabaseResponse,
	googleAccount:GoogleData|null,
	isLoading:boolean

	
}

const initialState:initState = {
	user: {
        id: 0,
        email:"",
        role:{id:0,role:""},                  
        token:""
    },
	googleAccount:null,
	
	isLoading:false
   
};



const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setGoogleAccount: (state, action: PayloadAction<GoogleData|null>) =>{
			state.googleAccount = action.payload
		},
		setUser:(state,action:PayloadAction<UserDatabaseResponse>) =>{
			state.user = action.payload
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getUser.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(getUser.fulfilled, (state, action:PayloadAction< UserDatabaseResponse>) => {
			state.isLoading = false;
			state.user = action.payload;
		});
		builder.addCase(getUser.rejected, (state) => {
			state.isLoading = false;
		});}
	
});

export const {
	setGoogleAccount,
	setUser
} = userSlice.actions;
 export default userSlice.reducer;
// export const allUsers = (state: RootState) => state.user;