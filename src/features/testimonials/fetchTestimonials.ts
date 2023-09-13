import { createAsyncThunk } from "@reduxjs/toolkit";
import { Testimonial } from "../../assets/types/types";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";

export const fetchTestimonials = createAsyncThunk<
  Testimonial[],
  undefined,
  {
    rejectValue: string;
  }
>("testimonials/fetchTestimonials", async (_, { rejectWithValue }) => {
  try {
    const querySnapshot = await getDocs(collection(db, "testimonials"));
    const docs = querySnapshot.docs;
    return docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  } catch (error) {
    console.error(error);
    return rejectWithValue("error");
  }
});
