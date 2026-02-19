document.addEventListener('DOMContentLoaded', () => {

  const sidebar = document.querySelector('.sidebar');
  const sidebarToggle = document.querySelector('.sidebar-toggle');
  const projects = document.querySelectorAll('.project img');
  const sidebarImage = document.getElementById('sidebar-image');
  const sidebarTitle = document.getElementById('sidebar-title');
  const sidebarDescription = document.getElementById('sidebar-description');

  let selectedProject = null; // Projeto selecionado
  let sidebarOpen = false;    // Sidebar aberta ou não

  // Selecionar projeto (sem abrir)
  projects.forEach(img => {
    img.addEventListener('click', () => {

      // Marca visualmente
      projects.forEach(image => image.classList.remove('selected'));
      img.classList.add('selected');

      selectedProject = img;

      // Atualiza automaticamente se a sidebar já estiver aberta
      if (sidebarOpen) {
        updateSidebar(selectedProject);
      }

    });
  });

  // Botão Visualizar
  sidebarToggle.addEventListener('click', () => {

    // 🔒 Verifica se algum projeto foi selecionado
    if (!selectedProject) {
      // Se não tiver projeto selecionado, mostra alerta e NÃO abre sidebar
      sidebar.classList.remove('active');
      sidebarOpen = false;
      alert('Por favor, selecione um projeto antes de visualizar.');
      return;
    }

    // Abre sidebar
    sidebar.classList.add('active');
    sidebarOpen = true;

    // Atualiza o conteúdo da sidebar
    updateSidebar(selectedProject);

  });

  // Função para atualizar conteúdo da sidebar
  function updateSidebar(project) {
    sidebarImage.src = project.dataset.src || project.src;
    sidebarTitle.textContent = project.dataset.title || 'Projeto';
    sidebarDescription.textContent = project.dataset.description || 'Descrição não disponível';
  }

});
