import { createAsyncThunk } from "@reduxjs/toolkit";
import { Destination } from "../../assets/types/types";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";

export const fetchDestinations = createAsyncThunk<
  Destination[],
  undefined,
  {
    rejectValue: string;
  }
>("destinations/fetchDestinations", async (_, { rejectWithValue }) => {
  try {
    const querySnapshot = await getDocs(collection(db, "top-destinations"));
    const docs = querySnapshot.docs;
    return docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  } catch (error) {
    console.error(error);
    return rejectWithValue("error");
  }
});
