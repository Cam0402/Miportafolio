//La validación del formulário con javascript es considerada un desafío extra, no es obligatório realizar esta validación para realizar su entrega

document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Añade la clase visible cuando el elemento está en la vista
          entry.target.classList.add('visible');
        } else {
          // Quita la clase visible cuando el elemento sale de la vista
          entry.target.classList.remove('visible');
        }
      });
    }, {
      threshold: 0.1 // Puedes ajustar este valor según tus necesidades
    });
  
    const elements = document.querySelectorAll('.sobre-mi__texto');
    elements.forEach(el => observer.observe(el));
  });
  
  //Habilidades//

  document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Añade la clase visible cuando el elemento está en la vista
          entry.target.classList.add('visible');
        } else {
          // Quita la clase visible cuando el elemento sale de la vista
          entry.target.classList.remove('visible');
        }
      });
    }, {
      threshold: 0.1 // Puedes ajustar este valor según tus necesidades
    });
  
    const elements = document.querySelectorAll('.habilidades__lista');
    elements.forEach(el => observer.observe(el));
  });

  //aficiones//

  document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Añade la clase visible cuando el elemento está en la vista
          entry.target.classList.add('visible');
        } else {
          // Quita la clase visible cuando el elemento sale de la vista
          entry.target.classList.remove('visible');
        }
      });
    }, {
      threshold: 0.1 // Puedes ajustar este valor según tus necesidades
    });
  
    const elements = document.querySelectorAll('.aficiones__lista');
    elements.forEach(el => observer.observe(el));
  });

  //formacion academica//

  document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Añade la clase visible cuando el elemento está en la vista
          entry.target.classList.add('visible');
        } else {
          // Quita la clase visible cuando el elemento sale de la vista
          entry.target.classList.remove('visible');
        }
      });
    }, {
      threshold: 0.1 // Puedes ajustar este valor según tus necesidades
    });
  
    const elements = document.querySelectorAll('.formacion__lista');
    elements.forEach(el => observer.observe(el));
  });