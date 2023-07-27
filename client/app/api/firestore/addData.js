// import { firestore } from "../../_firebase/config";
// import { getFirestore, doc, setDoc } from "firebase/firestore";

// const db = getFirestore(firebase_app);

// export default async function addData(collection, data) {
//   console.log("addData.js: addData() called", collection);
//   let result = null;
//   let error = null;

//   try {
//     result = await setDoc(doc(db, "id", collection), data, {
//       merge: true,
//     });
//     console.log(result);
//   } catch (e) {
//     error = e;
//   }

//   return { result, error };
// }
