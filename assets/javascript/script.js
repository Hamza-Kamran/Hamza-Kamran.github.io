function toggleList() {
  let list = document.getElementById("proofs");
  list.style.display = (list.style.display === "none" || list.style.display === "") ? "block" : "none";
}

document.getElementById("divine-origin-heading").onclick = toggleList;
