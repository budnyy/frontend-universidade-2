const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll("#solucoes .card");

searchForm.addEventListener("submit", event => {
  event.preventDefault();
  const search = searchInput.value.toLowerCase();

  cards.forEach(card => {
    const text = card.textContent.toLowerCase();

    if(text.includes(search)){
      card.classList.remove("hidden");
    }
    else{
      card.classList.add("hidden");
    }
  });

  location.hash = "solucoes";
});
