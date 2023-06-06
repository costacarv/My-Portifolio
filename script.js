const tecnologias = document.querySelectorAll('.tecnologias-left li')
const textTecRight = document.querySelector('.tecnologias-right')
const textTec = ['Tenho contato com javaScript desde que comecei a programar e contínuo tendo contato até hoje. É uma linguagem que sofre bastante mudança desde o ECS6 e sempre tenho ficado atento as atualizações.', 'React é um framework que venho utilizado bastante em meus projetos, por ser prático e facilitar bastante no código.', 'HTML é linguagem de marcação de texto que sempre tenho contato em quase todos os projetos que faço. Sempre alio as TAGs a mentalidade SEO para ter um codígo relevante e inteligível.',
'É uma linguagem que uso bastante junto com banco de dados SQL', 'Css é uma linguagem de estilo em cascata que é bastante versátil e apoiada a metodologia UX/IX traz uma experiência muito satisfatória pro usuário final.', 'Node é usado bastante em meus projetos back-end, principalmente em projetos que consomem APIs e banco de dados NO-SQL.']
const textPadrao = '*/Passe por cima dos ícones para ler!*/'

tecnologias.forEach(tecnologia => {
    tecnologia.addEventListener("mousemove", (event) => {
    event.preventDefault()
    if(event.target.getAttribute('alt') == 'javascript') {
      textTecRight.innerHTML = textTec[0]
    } else if(event.target.getAttribute('alt') == 'react') {
      textTecRight.innerHTML = textTec[1]
    } else if(event.target.getAttribute('alt') == 'html') {
      textTecRight.innerHTML = textTec[2]
    } else if(event.target.getAttribute('alt') == 'php') {
      textTecRight.innerHTML = textTec[3]
    }
    else if(event.target.getAttribute('alt') == 'css') {
      textTecRight.innerHTML = textTec[4]
    }
    else if(event.target.getAttribute('alt') == 'node') {
      textTecRight.innerHTML = textTec[5]
    }
  });
})

tecnologias.forEach(tecnologia => {
  tecnologia.addEventListener("mouseout", (event) => {
    event.preventDefault()
    textTecRight.innerHTML = textPadrao
  })
})

const showTextBtn = document.querySelector('.email');
const textContainer = document.getElementById('text-container');

showTextBtn.addEventListener('click', function() {
  textContainer.style.display = 'block';
  textContainer.innerText = 'matheuscarvalhomcc0@gmail.com';

  setTimeout(function() {
    textContainer.style.display = 'none';
  }, 3000); 
});

const menuBtn = document.querySelector('.items-menu-mobile i')
        menuBtn.addEventListener('click', ()=> {
            let itensMenu = document.querySelector('.menu-mobile')
            if(itensMenu.classList.contains('show')) {
                itensMenu.classList.remove('show')
                itensMenu.classList.add('hide')
            } else {
                itensMenu.classList.remove('hide')
                itensMenu.classList.add('show')
            }
        })

        function isElementInViewport(element) {
          var rect = element.getBoundingClientRect();
          return (
              rect.top >= 0 &&
              rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
          );
      }

      function isElementInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    }

    // Função para verificar se a section está visível e adicionar a classe 'visible'
    function handleScroll() {
        var section = document.querySelector('.no-visible');
        if (isElementInViewport(section)) {
            section.classList.add('visible');
            window.removeEventListener('scroll', handleScroll); // Remover o listener após a transição ocorrer
        }
    }

    // Adicionar o listener ao evento 'scroll'
    window.addEventListener('scroll', handleScroll);

    function getScrollDirection() {
      if (window.scrollY > this.lastScrollTop) {
          return 'down';
      } else {
          return 'up';
      }
  }

  // Função para manipular o scroll
  function handleScroll1() {
      var scrollDownMessage = document.querySelector('.scroll-down-message');
      var scrollDirection = getScrollDirection();
      if (scrollDirection === 'down') {
          scrollDownMessage.classList.add('hidden');
      } else {
          scrollDownMessage.classList.remove('hidden');
      }
      this.lastScrollTop = window.scrollY;
  }

  // Adicionar o listener ao evento 'scroll'
  window.addEventListener('scroll', handleScroll1);