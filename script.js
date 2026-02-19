document.addEventListener('DOMContentLoaded', () => {

  const sidebar = document.querySelector('.sidebar');
  const sidebarToggle = document.querySelector('.sidebar-toggle');
  const visitarButton = document.querySelector('.visitar');
  const projects = document.querySelectorAll('.project img');
  const sidebarImage = document.getElementById('sidebar-image');
  const sidebarTitle = document.getElementById('sidebar-title');
  const sidebarDescription = document.getElementById('sidebar-description');

  let selectedImageSrc = '';
  let selectedImageTitle = '';
  let selectedImageDescription = '';

  // Selecionar imagem
  projects.forEach(img => {
    img.addEventListener('click', () => {

      selectedImageSrc = img.dataset.src || img.src;
      selectedImageTitle = img.dataset.title || 'Projeto';
      selectedImageDescription = img.dataset.description || 'Descrição do projeto.';

      projects.forEach(image => image.classList.remove('selected'));
      img.classList.add('selected');

    });
  });

  // Botão Visualizar
  if (sidebarToggle) {
    sidebarToggle.addEventListener('click', () => {

      if (selectedImageSrc) {
        sidebarImage.src = selectedImageSrc;
        sidebarTitle.textContent = selectedImageTitle;
        sidebarDescription.textContent = selectedImageDescription;
        sidebar.classList.add('active');
      } else {
        alert('Por favor, selecione um projeto primeiro.');
      }

    });
  }

  // Botão Visitar
  if (visitarButton) {
    visitarButton.addEventListener('click', () => {
      window.open('https://seu-site-aqui.com', '_blank');
    });
  }

});
