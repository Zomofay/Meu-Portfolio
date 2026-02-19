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

  // Selecionar projeto
  projects.forEach(img => {
    img.addEventListener('click', () => {

      projects.forEach(image => image.classList.remove('selected'));
      img.classList.add('selected');

      selectedProject = img;

      // Atualiza automaticamente se sidebar aberta
      if (sidebarOpen) {
        updateSidebar(selectedProject);
      }

    });
  });

  // Botão Visualizar → toggle
  sidebarToggle.addEventListener('click', () => {

    if (!selectedProject) {
      alert('Por favor, selecione um projeto antes de visualizar.');
      return;
    }

    if (sidebarOpen) {
      sidebar.classList.remove('active');
      sidebarOpen = false;
    } else {
      updateSidebar(selectedProject);
      sidebar.classList.add('active');
      sidebarOpen = true;
    }

  });

  // Botão Visitar → abre nova aba
  if (visitarButton) {
    visitarButton.addEventListener('click', () => {
      if (!selectedProject) {
        alert('Por favor, selecione um projeto antes de visitar.');
        return;
      }

      const link = selectedProject.dataset.link || 'https://seu-site-aqui.com';
      window.open(link, '_blank');
    });
  }

  // Atualiza conteúdo da sidebar
  function updateSidebar(project) {
    sidebarImage.src = project.dataset.src || project.src;
    sidebarTitle.textContent = project.dataset.title || 'Projeto';
    sidebarDescription.textContent = project.dataset.description || 'Descrição não disponível';
  }

});
