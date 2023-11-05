import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AlertType } from "../../types/othersType";


interface initState {
	sideBarIsEnabled: Boolean
	alertHandler:AlertType|null

	isLoading: Boolean
    
	
}

const initialState:initState = {
	sideBarIsEnabled:true,
	alertHandler:null,
	isLoading:false
   
};

const utilsSlice = createSlice({
	name: "utils",
	initialState,
	reducers: {
		setSideBar: (state, action: PayloadAction<Boolean>) =>{
			state.sideBarIsEnabled = action.payload
		},
		setAlert: (state, action: PayloadAction<AlertType|null>) =>{
			state.alertHandler = action.payload
		},
		},

	
});

export const  {setSideBar,setAlert} = utilsSlice.actions;
export default utilsSlice.reducer