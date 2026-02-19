document.addEventListener('DOMContentLoaded', () => {

  const sidebar = document.querySelector('.sidebar');
  const overlay = document.querySelector('.overlay');
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

      if (sidebarOpen) updateSidebar(selectedProject);

    });
  });

  // Toggle sidebar
  sidebarToggle.addEventListener('click', () => {
    if (!selectedProject) {
      alert('Por favor, selecione um projeto antes de visualizar.');
      return;
    }

    sidebarOpen = !sidebarOpen;
    if (sidebarOpen) {
      sidebar.classList.add('active');
      overlay.classList.add('active');
      sidebarToggle.textContent = "Fechar";
      updateSidebar(selectedProject);
    } else {
      sidebar.classList.remove('active');
      overlay.classList.remove('active');
      sidebarToggle.textContent = "Visualizar";
    }
  });

  // Clicar no overlay fecha sidebar
  overlay.addEventListener('click', () => {
    sidebarOpen = false;
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
    sidebarToggle.textContent = "Visualizar";
  });

  // Botão Visitar
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

  // Atualiza sidebar
  function updateSidebar(project) {
    sidebarImage.src = project.dataset.src || project.src;
    sidebarTitle.textContent = project.dataset.title || 'Projeto';
    sidebarDescription.textContent = project.dataset.description || 'Descrição não disponível';
  }

});
