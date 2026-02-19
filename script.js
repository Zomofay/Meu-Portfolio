document.addEventListener('DOMContentLoaded', () => {

  const sidebar = document.querySelector('.sidebar');
  const sidebarToggle = document.querySelector('.sidebar-toggle');
  const projects = document.querySelectorAll('.project img');
  const sidebarImage = document.getElementById('sidebar-image');
  const sidebarTitle = document.getElementById('sidebar-title');
  const sidebarDescription = document.getElementById('sidebar-description');

  let sidebarOpen = false;

  // Clicar no botão Visualizar ativa/desativa o modo visualização
  sidebarToggle.addEventListener('click', () => {

    sidebarOpen = !sidebarOpen;
    sidebar.classList.toggle('active');

  });

  // Agora os projetos só atualizam se a sidebar estiver aberta
  projects.forEach(img => {
    img.addEventListener('click', () => {

      if (!sidebarOpen) return; // Se não estiver aberta, não faz nada

      // Marca visualmente
      projects.forEach(image => image.classList.remove('selected'));
      img.classList.add('selected');

      // Atualiza conteúdo
      sidebarImage.src = img.dataset.src;
      sidebarTitle.textContent = img.dataset.title;
      sidebarDescription.textContent = img.dataset.description;

    });
  });

});
