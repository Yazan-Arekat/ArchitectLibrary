import {
  auth,
  onAuthStateChanged,
  signOut,
  db,
  doc,
  getDoc,
  updateDoc
} from "./js/firebase.js";
// حماية صفحة الأدمن
onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = "login.html";
  }
});

const zain = document.getElementById("zain");
const orange = document.getElementById("orange");
const cliq = document.getElementById("cliq");

const ref = doc(db, "settings", "payment");

// تحميل البيانات
async function loadData() {
  const snap = await getDoc(ref);

  if (snap.exists()) {
    const data = snap.data();

    zain.value = data.zain || "";
    orange.value = data.orange || "";
    cliq.value = data.cliq || "";
  }
}

loadData();

// حفظ البيانات
document.getElementById("saveBtn").onclick = async () => {
  await updateDoc(ref, {
    zain: zain.value,
    orange: orange.value,
    cliq: cliq.value
  });

  document.getElementById("status").innerHTML = "Saved Successfully ✔️";
};
document.getElementById("logoutBtn").onclick = async () => {
    await signOut(auth);
    window.location.href = "login.html";
};