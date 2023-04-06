// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc, connectFirestoreEmulator, query, getDocs, setDoc, doc, deleteDoc, onSnapshot } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDU7Sc9_WqIIHN6siYrIUKqPf-5404y5DY",
  authDomain: "gettingstartedwithfireba-d38f6.firebaseapp.com",
  projectId: "gettingstartedwithfireba-d38f6",
  storageBucket: "gettingstartedwithfireba-d38f6.appspot.com",
  messagingSenderId: "777429333088",
  appId: "1:777429333088:web:501f9362711dfa57157f05",
  measurementId: "G-SGMYE7X6HQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(app);

const db = getFirestore();
connectFirestoreEmulator (db, "localhost", 8080)

//Adding or creating data to the database
const saveBtn = document.querySelector(".save")
saveBtn.addEventListener("click", async () => {
  const diaryCollectionRef = collection(db, "diary")
  try{
    const newDiaryRef = await addDoc(diaryCollectionRef,{
      Date: document.getElementById('date').value,
      Title: document.getElementById('title').value,
      Entry: document.getElementById('entry').value
    })
    alert("Entry Added");
    console.log('Created a new diary entry!')
  } catch(error){
    console.log(error)
  }
  
})

//Viewing data stored in the database
const getDataBtn = document.querySelector(".get-data")
getDataBtn.addEventListener('click', async () => {
  const q = query(collection(db, "diary"))
  const diary = await getDocs(q)
  diary.forEach((entrie) => {
    console.log(entrie.data())
  })
})

//Updating data in the database
const changeDataBtn = document.querySelector(".change-data")
changeDataBtn.addEventListener('click', async () => {
const q = query(collection(db, "diary"))
const diary = await getDocs(q)
if(diary.empty){
  console.log("No diary to edit yet!")
  return
}
await setDoc(doc(db, 'diary', diary.docs[0].id), {
  Date: document.getElementById('date').value,
  Title: document.getElementById('title').value,
  Entry: document.getElementById('entry').value
  
}, {merge: true})
alert("Latest entry is edited successfully");
}) 

//Deleting data from the database
const deleteDataBtn = document.querySelector(".delete-data")
deleteDataBtn.addEventListener('click', async () => {
  const q = query(collection(db, 'diary'))
  const diary = await getDocs(q)
  if(diary.empty){
    console.log("No diary entry to delete")
    return
  }

  await deleteDoc(doc(db, 'diary', diary.docs[diary.docs.length-1].id))
  alert("Deleted Successfully!");
  console.log("Deleted Successfully!")
})

const q = query(collection(db, "diary"))
const unsubscribe = onSnapshot(q, (querySnapshot) => {
  console.log('------------------------------------------------------')
  querySnapshot.forEach((entrie) => {
    console.log(entrie.data())
  })
})