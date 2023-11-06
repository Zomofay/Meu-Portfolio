sidebarToggle.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});

const sidebar = document.querySelector('.sidebar');
const sidebarToggle = document.querySelector('.sidebar-toggle');

// Selecione os botões de visualização de projeto
const projectButtons = document.querySelectorAll('.project-button');

projectButtons.forEach(button => {
  button.addEventListener('click', () => {
    const projectId = button.getAttribute('data-project-id');
    const project = document.getElementById(projectId);
    
    if (project) {
      // Remova a classe "active" de todos os projetos
      const allProjects = document.querySelectorAll('.project');
      allProjects.forEach(proj => {
        proj.classList.remove('active');
      });
      
      // Adicione a classe "active" ao projeto selecionado
      project.classList.add('active');
      sidebar.classList.add('active');
    }
  });
});

// Adicione um evento de clique ao botão "Fechar" na barra lateral para ocultá-la
const closeButton = document.querySelector('.sidebar-close-button');
if (closeButton) {
  closeButton.addEventListener('click', () => {
    sidebar.classList.remove('active');
  });
};
