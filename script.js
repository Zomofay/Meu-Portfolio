document.addEventListener('DOMContentLoaded', () => {

  const sidebar = document.querySelector('.sidebar');
  const sidebarToggle = document.querySelector('.sidebar-toggle');
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

    // Se sidebar estiver aberta, fecha e volta ao padrão
    if (sidebarOpen) {
      sidebar.classList.remove('active');
      sidebarOpen = false;
      return;
    }

    // Se não tiver projeto selecionado, alerta
    if (!selectedProject) {
      alert('Por favor, selecione um projeto antes de visualizar.');
      return;
    }

    // Caso sidebar esteja fechada e projeto selecionado → abre e mostra conteúdo
    sidebar.classList.add('active');
    sidebarOpen = true;

    updateSidebar(selectedProject);

  });

  // Função para atualizar conteúdo da sidebar
  function updateSidebar(project) {
    sidebarImage.src = project.dataset.src || project.src;
    sidebarTitle.textContent = project.dataset.title || 'Projeto';
    sidebarDescription.textContent = project.dataset.description || 'Descrição não disponível';
  }

});
