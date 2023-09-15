import { createAsyncThunk } from "@reduxjs/toolkit";
import { Article, TypeArticle } from "../../assets/types/types";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from "../../../firebase";

export const fetchArticles = createAsyncThunk<
  Article[],
  TypeArticle | null,
  {
    rejectValue: string;
  }
>("articles/fetchArticles", async (sortType, { rejectWithValue, getState }) => {
  try {
    const ref = collection(db, "articles");
    let querySnapshot;
    console.log(sortType);
    if (sortType) {
      querySnapshot = await getDocs(
        query(ref, where("type", "array-contains", sortType))
      );
    } else {
      querySnapshot = await getDocs(query(ref));
    }
    const docs = querySnapshot.docs;
    return docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  } catch (error) {
    console.error(error);
    return rejectWithValue("error");
  }
});
