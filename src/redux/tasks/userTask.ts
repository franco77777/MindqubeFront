import axios from "axios";
import { createAsyncThunk} from "@reduxjs/toolkit";

export const getUser = createAsyncThunk('user/getUser', async () => {
	try {
		const { data } = await axios(`http://localhost:8080/user/test`);
		return data[0]
	} catch (error:any) {
		throw new Error(error.message);
	}
} ) 

