import { doc, setDoc, addDoc, collection } from "@firebase/firestore";

export default async function (docObj, path) {
  const { $firestore } = useNuxtApp();

  const docRef = collection($firestore, path);

  try {
    await addDoc(docRef, docObj);
    console.log(`Document ajouté avec l'ID: ${docRef.id}`);
  } catch (e) {
    console.log(`Error writing document: ${e.message}`);
  }
}
