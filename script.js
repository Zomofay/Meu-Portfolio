document.addEventListener('DOMContentLoaded', () => {

  const sidebar = document.querySelector('.sidebar');
  const sidebarToggle = document.querySelector('.sidebar-toggle'); // Botão Visualizar
  const visitarButton = document.querySelector('.Visitar'); // Botão Visitar
  const projects = document.querySelectorAll('.project img');
  const sidebarImage = document.getElementById('sidebar-image');
  const sidebarTitle = document.getElementById('sidebar-title');
  const sidebarDescription = document.getElementById('sidebar-description');

  let selectedProject = null;
  let sidebarOpen = false;

  // Seleciona projeto
  projects.forEach(img => {
    img.addEventListener('click', () => {
      projects.forEach(image => image.classList.remove('selected'));
      img.classList.add('selected');
      selectedProject = img;

      // Atualiza automaticamente se sidebar estiver aberta
      if (sidebarOpen) updateSidebar(selectedProject);
    });
  });

  // Toggle sidebar + muda texto do botão
  sidebarToggle.addEventListener('click', () => {

    if (!selectedProject) {
      alert('Por favor, selecione um projeto antes de visualizar.');
      return;
    }

    sidebarOpen = !sidebarOpen;

    if (sidebarOpen) {
      sidebar.classList.add('active');
      sidebarToggle.textContent = "Fechar"; // Aqui muda o texto
      updateSidebar(selectedProject);
    } else {
      sidebar.classList.remove('active');
      sidebarToggle.textContent = "Visualizar"; // Volta para o padrão
    }
  });

  // Botão Visitar
  visitarButton.addEventListener('click', () => {
    if (!selectedProject) {
      alert('Por favor, selecione um projeto antes de visitar.');
      return;
    }
    const link = selectedProject.dataset.link || 'https://seu-site-aqui.com';
    window.open(link, '_blank');
  });

  // Atualiza conteúdo da sidebar
  function updateSidebar(project) {
    sidebarImage.src = project.dataset.src || project.src;
    sidebarTitle.textContent = project.dataset.title || 'Projeto';
    sidebarDescription.textContent = project.dataset.description || 'Descrição não disponível';
  }

});
