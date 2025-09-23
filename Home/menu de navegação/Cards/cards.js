// Pega o container onde os cards vão aparecer
const container = document.getElementById('cards-container');

// Função para criar um card HTML a partir dos dados
function criarCard(card) {
  const div = document.createElement('div');
  div.className = 'card';

  // Se quiser, adicione a imagem (deixe as URLs no JSON)
  if(card.image){
    const img = document.createElement('img');
    img.src = card.image;
    img.alt = card.title;
    div.appendChild(img);
  }

  const titulo = document.createElement('h2');
  titulo.textContent = card.title;
  div.appendChild(titulo);

  const desc = document.createElement('p');
  desc.textContent = card.description;
  div.appendChild(desc);

  if(card.link){
    const a = document.createElement('a');
    a.href = card.link;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.textContent = "Saiba mais";
    div.appendChild(a);
  }

  return div;
}

// Carrega o JSON e adiciona os cards no container
fetch('cards.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(card => {
      const cardElemento = criarCard(card);
      container.appendChild(cardElemento);
    });
  })
  .catch(err => {
    console.error('Erro ao carregar os cards:', err);
    container.textContent = "Não foi possível carregar os cards.";
  });
