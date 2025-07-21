document.addEventListener('DOMContentLoaded', function() {
  function aplicarResponsividade() {
    const largura = window.innerWidth;
    const body = document.body;
    // Remove classes antigas
    body.classList.remove('mobile', 'tablet', 'desktop');
    if (largura <= 480) {
      body.classList.add('mobile');
    } else if (largura <= 768) {
      body.classList.add('tablet');
    } else {
      body.classList.add('desktop');
    }
  }
  window.addEventListener('resize', aplicarResponsividade);
  aplicarResponsividade();
});
