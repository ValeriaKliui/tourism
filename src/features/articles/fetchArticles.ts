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
>("articles/fetchArticles", async (sortType, { rejectWithValue }) => {
  try {
    const ref = collection(db, "articles");
    let querySnapshot;
    if (sortType) {
      querySnapshot = await getDocs(
        query(
          ref,
          where("type", "array-contains", sortType),
          orderBy("date", "desc")
        )
      );
    } else {
      querySnapshot = await getDocs(query(ref, orderBy("date", "desc")));
    }
    const docs = querySnapshot.docs;
    return docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
      date: doc.data().date.toDate().toLocaleDateString("en-us", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
    }));
  } catch (error) {
    console.error(error);
    return rejectWithValue("error");
  }
});
