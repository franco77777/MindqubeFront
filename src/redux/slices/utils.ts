import { PayloadAction, createSlice } from "@reduxjs/toolkit";


interface initState {
	sideBarIsEnabled: Boolean
	delaySidebar: Boolean
	isLoading: Boolean

	
}

const initialState:initState = {
	sideBarIsEnabled:true,
	delaySidebar:true,
	isLoading:false
   
};

const utilsSlice = createSlice({
	name: "utils",
	initialState,
	reducers: {
		setSideBar: (state, action: PayloadAction<Boolean>) =>{
			state.sideBarIsEnabled = action.payload
		},
		setDelaySideBar: (state, action: PayloadAction<Boolean>) =>{
			state.delaySidebar = action.payload
		},
		},

	
});

export const  {setSideBar,setDelaySideBar} = utilsSlice.actions;
export default utilsSlice.reducer