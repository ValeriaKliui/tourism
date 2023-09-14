import { createAsyncThunk } from "@reduxjs/toolkit";
import { Article } from "../../assets/types/types";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";

export const fetchArticles = createAsyncThunk<
  Article[],
  undefined,
  {
    rejectValue: string;
  }
>("articles/fetchArticles", async (_, { rejectWithValue }) => {
  try {
    const querySnapshot = await getDocs(collection(db, "articles"));
    const docs = querySnapshot.docs;
    return docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  } catch (error) {
    console.error(error);
    return rejectWithValue("error");
  }
});
