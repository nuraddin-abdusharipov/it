import { db } from "./firebase.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

async function loadAdminStats() {
  const usersSnap = await getDocs(collection(db, "users"));
  const resultsSnap = await getDocs(collection(db, "results"));

  document.getElementById("userCount").textContent = usersSnap.size;
  const uniqueUsers = new Set();
  let totalScore = 0;

  resultsSnap.forEach((doc) => {
    const data = doc.data();
    uniqueUsers.add(data.uid);
    totalScore += data.score;
  });

  document.getElementById("testedUsers").textContent = uniqueUsers.size;
  document.getElementById("attemptsCount").textContent = resultsSnap.size;
  const avg = resultsSnap.size ? (totalScore / resultsSnap.size).toFixed(1) : 0;
  document.getElementById("avgScore").textContent = avg;

  const tbody = document.getElementById("resultsTable");
  tbody.innerHTML = '';
  resultsSnap.forEach((doc) => {
    const d = doc.data();
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${d.username}</td>
      <td>${d.category}</td>
      <td>${d.score}</td>
      <td>${d.attempts}</td>
      <td>${new Date(d.date.seconds * 1000).toLocaleString()}</td>
    `;
    tbody.appendChild(tr);
  });
}

loadAdminStats();