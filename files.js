import {
  db,
  doc,
  updateDoc
} from "./js/firebase.js";

import {
  collection,
  addDoc,
  getDocs,
  deleteDoc
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

const name = document.getElementById("name");
const program = document.getElementById("program");
const type = document.getElementById("type");
const category = document.getElementById("category");
const path = document.getElementById("path");

const table = document.getElementById("table");
const addBtn = document.getElementById("addBtn");

let editMode = false;
let editID = "";

async function loadFiles() {

    table.innerHTML = "";

    const snapshot = await getDocs(collection(db, "files"));

    snapshot.forEach((docItem) => {

        const data = docItem.data();

        table.innerHTML += `
<tr>

<td>${data.name}</td>

<td>${data.program}</td>

<td>${data.type ?? "Library"}</td>

<td>${data.category}</td>

<td>${data.path}</td>

<td>

<button
class="actionBtn editBtn"
onclick="editFile(
'${docItem.id}',
'${data.name}',
'${data.program}',
'${data.type ?? "Library"}',
'${data.category}',
'${data.path}'
)">
Edit
</button>

<button
class="actionBtn deleteBtn"
onclick="deleteFile('${docItem.id}')">
Delete
</button>

</td>

</tr>
`;

    });

}

loadFiles();

addBtn.onclick = async () => {

    if (editMode) {

        await updateDoc(doc(db, "files", editID), {

            name: name.value,
            program: program.value,
            type: type.value,
            category: category.value,
            path: path.value

        });

        alert("File Updated Successfully");

        editMode = false;
        editID = "";
        addBtn.innerHTML = "Add File";

    } else {

        await addDoc(collection(db, "files"), {

            name: name.value,
            program: program.value,
            type: type.value,
            category: category.value,
            path: path.value

        });

        alert("File Added Successfully");

    }

    name.value = "";
    program.value = "AutoCAD";
    type.value = "Library";
    category.value = "";
    path.value = "";

    await loadFiles();

};

window.deleteFile = async function (id) {

    if (!confirm("Delete this file?")) return;

    await deleteDoc(doc(db, "files", id));

    await loadFiles();

};

window.editFile = function (id, n, p, t, c, pa) {

    editMode = true;
    editID = id;

    name.value = n;
    program.value = p;
    type.value = t;
    category.value = c;
    path.value = pa;

    addBtn.innerHTML = "Update File";

};