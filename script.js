document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.querySelector('.sidebar');
  const visitarButton = document.querySelector('.visitar');
  const projects = document.querySelectorAll('.project img');
  const sidebarImage = document.getElementById('sidebar-image');
  const sidebarTitle = document.getElementById('sidebar-title');
  const sidebarDescription = document.getElementById('sidebar-description');

  let selectedProject = null;

  // Abrir projeto na sidebar com duplo clique
  projects.forEach(img => {
    img.addEventListener('dblclick', () => {
      // Remove seleção anterior
      projects.forEach(image => image.classList.remove('selected'));
      // Seleciona a clicada
      img.classList.add('selected');
      selectedProject = img;

      // Atualiza sidebar com dados do projeto
      sidebarImage.src = img.dataset.src || img.src;
      sidebarTitle.textContent = img.dataset.title || 'Projeto';
      sidebarDescription.textContent = img.dataset.description || 'Descrição não disponível';

      // Mostra sidebar
      sidebar.classList.add('active');

      // Mostra botão visitar
      visitarButton.style.display = 'inline-block';
    });
  });

  // Botão visitar abre link do projeto selecionado
  visitarButton.addEventListener('click', () => {
    if (!selectedProject) {
      alert('Selecione um projeto antes de visitar.');
      return;
    }
    const link = selectedProject.dataset.link || 'https://seu-site-aqui.com';
    window.open(link, '_blank');
  });

  // Clique fora da sidebar fecha ela
  document.body.addEventListener('click', (e) => {
    if (
      !sidebar.contains(e.target) &&
      ![...projects].some(img => img === e.target)
    ) {
      sidebar.classList.remove('active');
      visitarButton.style.display = 'none';
      projects.forEach(img => img.classList.remove('selected'));
      selectedProject = null;
    }
  });
});
