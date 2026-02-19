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

  // Botão Visualizar
  sidebarToggle.addEventListener('click', () => {

    if (!selectedProject) {
      // 🔔 Mostrar alerta amigável se não tiver nada selecionado
      alert('Por favor, selecione um projeto antes de visualizar.');
      return;
    }

    sidebarOpen = true;
    sidebar.classList.add('active');

    updateSidebar(selectedProject);

  });

  // Função para atualizar conteúdo da sidebar
  function updateSidebar(project) {
    sidebarImage.src = project.dataset.src;
    sidebarTitle.textContent = project.dataset.title;
    sidebarDescription.textContent = project.dataset.description;
  }

});
