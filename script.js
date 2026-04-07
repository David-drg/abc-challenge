
let contador = 0;

function voltear(card) {
  // Si ya está volteada → la voy a devolver
  if (card.classList.contains("volteada")) {
    card.classList.remove("volteada");

    if (card.classList.contains("vista")) {
      card.classList.remove("vista");
      contador--;
    }
  } else {
    // Si no está volteada → la voy a voltear
    card.classList.add("volteada");

    if (!card.classList.contains("vista")) {
      card.classList.add("vista");
      contador++;
    }
  }

  document.getElementById("contador").textContent = contador;
}

function filtrar(tipo) {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    if (tipo === "todas") {
      card.style.display = "flex";
    } else {
      if (card.dataset.tipo === "vocal") {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    }
  });
}
