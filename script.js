document.addEventListener('DOMContentLoaded', () => {

  const sidebar = document.querySelector('.sidebar');
  const sidebarToggle = document.querySelector('.sidebar-toggle');
  const visitarButton = document.querySelector('.visitar');
  const projects = document.querySelectorAll('.project img');
  const sidebarImage = document.getElementById('sidebar-image');
  const sidebarTitle = document.getElementById('sidebar-title');
  const sidebarDescription = document.getElementById('sidebar-description');

  let selectedProject = null;
  let sidebarOpen = false;

  // Selecionar projeto (sem abrir)
  projects.forEach(img => {
    img.addEventListener('click', () => {

      projects.forEach(image => image.classList.remove('selected'));
      img.classList.add('selected');

      selectedProject = img;

      // Atualiza automaticamente se a sidebar estiver aberta
      if (sidebarOpen) {
        updateSidebar(selectedProject);
      }

    });
  });

  // Botão Visualizar como TOGGLE
  sidebarToggle.addEventListener('click', () => {

    // Se sidebar estiver aberta → fecha
    if (sidebarOpen) {
      sidebar.classList.remove('active');
      sidebarOpen = false;
      return;
    }

    // Se não tiver projeto selecionado → alerta
    if (!selectedProject) {
      alert('Por favor, selecione um projeto antes de visualizar.');
      return;
    }

    // Caso sidebar esteja fechada e projeto selecionado → abre e mostra conteúdo
    sidebar.classList.add('active');
    sidebarOpen = true;
    updateSidebar(selectedProject);

  });

  // Botão Visitar → abre nova aba
  if (visitarButton) {
    visitarButton.addEventListener('click', () => {
      if (!selectedProject) {
        alert('Por favor, selecione um projeto antes de visitar.');
        return;
      }

      // Abre link do projeto em nova aba
      // Para cada projeto você pode definir um data-link, aqui um exemplo genérico:
      const link = selectedProject.dataset.link || 'https://seu-site-aqui.com';
      window.open(link, '_blank');
    });
  }

  // Função para atualizar conteúdo da sidebar
  function updateSidebar(project) {
    sidebarImage.src = project.dataset.src || project.src;
    sidebarTitle.textContent = project.dataset.title || 'Projeto';
    sidebarDescription.textContent = project.dataset.description || 'Descrição não disponível';
  }

});
