import { createSlice,PayloadAction} from "@reduxjs/toolkit";
import { getUser } from "../tasks/userTask";
//import { User } from "../../utils/interfaces";
import {GoogleData, User} from "../../types/userType"


interface initState {
	user: User
	googleAccount:GoogleData|null,
	isLoading:boolean

	
}

const initialState:initState = {
	user: {
        id: 0,
        password: "",
        email:"",
        role:{id:0,role:""},                  
        username:""             
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
		},
	extraReducers: (builder) => {
		builder.addCase(getUser.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(getUser.fulfilled, (state, action:PayloadAction< User>) => {
			state.isLoading = false;
			state.user = action.payload;
		});
		builder.addCase(getUser.rejected, (state) => {
			state.isLoading = false;
		});}
	
});

export const {
	setGoogleAccount
} = userSlice.actions;
 export default userSlice.reducer;
// export const allUsers = (state: RootState) => state.user;