const loadBtn = document.getElementById('load-btn');
const content = document.getElementById('content');

loadBtn.addEventListener('click', () => {
  content.innerHTML = 'Carregando dados...';

  // Exemplo com dados estáticos simulando uma resposta da API
  setTimeout(() => {
    const desafios = [
      {
        nome: "Desafio 1",
        descricao: "Elimine 3 oponentes usando rifles de assalto.",
        recompensa: "150 XP"
      },
      {
        nome: "Desafio 2",
        descricao: "Visite 3 locais diferentes em um único jogo.",
        recompensa: "200 XP"
      },
      {
        nome: "Desafio 3",
        descricao: "Dance em 5 pontos de dança diferentes.",
        recompensa: "100 XP"
      }
    ];

    content.innerHTML = '';

    desafios.forEach(d => {
      const div = document.createElement('div');
      div.classList.add('challenge');
      div.innerHTML = `
        <h3>${d.nome}</h3>
        <p>${d.descricao}</p>
        <small>Recompensa: ${d.recompensa}</small>
      `;
      content.appendChild(div);
    });
  }, 1200);
});
