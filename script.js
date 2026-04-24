import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, push, onChildAdded } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDoiMseGNNFPgUua2uQVCX6TRLpCaf1XFA",
  authDomain: "pvchat-a758d.firebaseapp.com",
  projectId: "pvchat-a758d",
  storageBucket: "pvchat-a758d.firebasestorage.app",
  messagingSenderId: "729530180678",
  appId: "1:729530180678:web:53a30c4a72e68421e9d647",
  databaseURL: "https://pvchat-a758d-default-rtdb.asia-southeast1.firebasedatabase.app"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const chatRef = ref(db, "pesan");

document.getElementById("sendBtn").onclick = () => {
    const input = document.getElementById("msgInput");
    if (input.value.trim() !== "") {
        push(chatRef, { teks: input.value, waktu: Date.now() });
        input.value = "";
    }
};

onChildAdded(chatRef, (snapshot) => {
    const msg = snapshot.val();
    const div = document.createElement("div");
    div.innerText = msg.teks;
    document.getElementById("messages").appendChild(div);
});