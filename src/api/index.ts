import { db } from "@/firebaseConfig";
import { ItemGameProps } from "@/interfaces";
import { collection, doc, getDoc, setDoc } from "firebase/firestore";

const gamesCollection = collection(db, "games");

export const setItemsInGames = async (items: ItemGameProps) => {
  const reference = doc(gamesCollection, "coral_island");

  try {
    const response = await setDoc(reference, {
      database: items,
    });

    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const getItemsInDatabase = async () => {
  const reference = doc(gamesCollection, "coral_island");

  try {
    const docSnap = await getDoc(reference);
    return docSnap.data()?.database as ItemGameProps[];
  } catch (error) {
    console.log(error);
  }
};
