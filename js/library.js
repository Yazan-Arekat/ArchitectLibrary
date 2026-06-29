import {
    db
} from "./firebase.js";

import {
    collection,
    getDocs
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

const params = new URLSearchParams(window.location.search);

const program = params.get("program");
const type = params.get("type") || "Library";

const container = document.getElementById("files");
const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");

title.textContent =` ${program} ${type};`

subtitle.textContent =` ${type} - ${program};`

async function loadFiles() {

    const snapshot = await getDocs(collection(db, "files"));

    container.innerHTML = "";

    let found = false;

    snapshot.forEach((docItem) => {

        const data = docItem.data();

        if (data.program !== program) return;
        if ((data.type || "Library") !== type) return;

        found = true;

        container.innerHTML += `
        <a class="file-link" href="../${data.path}" target="_blank">
            📁 ${data.name}
        </a>
        `;

    });

    if (!found) {

        container.innerHTML = `
            <div class="empty">
                No ${type} available for ${program}
            </div>
        `;

    }

}

loadFiles();