document.addEventListener('DOMContentLoaded', (event) => {
  const sidebar = document.querySelector('.sidebar');
  const sidebarToggle = document.querySelector('.sidebar-toggle');
  const visitarButton = document.querySelector('.Visitar');
  const projects = document.querySelectorAll('.project img');
  const sidebarImage = document.getElementById('sidebar-image');
  const sidebarTitle = document.getElementById('sidebar-title');
  const sidebarDescription = document.getElementById('sidebar-description');
  let selectedImageSrc = '';
  let selectedImageTitle = '';
  let selectedImageDescription = '';

  // Adicionar evento de clique às imagens dos projetos
  projects.forEach(img => {
    img.addEventListener('click', () => {
      selectedImageSrc = img.getAttribute('data-src');
      selectedImageTitle = img.getAttribute('data-title');
      selectedImageDescription = img.getAttribute('data-description');
      projects.forEach(img => img.classList.remove('selected'));
      img.classList.add('selected');
    });
  });

  // Adicionar funcionalidade ao botão "Visualizar"
  sidebarToggle.addEventListener('click', () => {
    if (selectedImageSrc) {
      sidebarImage.src = selectedImageSrc;
      sidebarTitle.textContent = selectedImageTitle;
      sidebarDescription.textContent = selectedImageDescription;
      sidebar.classList.toggle('active');
    } else {
      alert('Por favor, selecione uma imagem primeiro.');
    }
  });

  // Adicionar funcionalidade ao botão "Visitar"
  visitarButton.addEventListener('click', () => {
    window.location.href = 'file:///C:/Users/Bruno/Desktop/Meu-Portfolio-main/banner.jpg'; // Substitua pelo link desejado
  });
});
