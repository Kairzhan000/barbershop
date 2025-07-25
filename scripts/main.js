document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.header__inner_left_list');
  const menuLinks = menu.querySelectorAll('a'); // Все ссылки в меню

  burger.addEventListener('click', () => {
    burger.classList.toggle('_active');
    menu.classList.toggle('_active');
  });

  // Закрытие меню при клике на любой пункт
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('_active');
      menu.classList.remove('_active');
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const signupButtons = document.querySelectorAll('.signup-btn');

  signupButtons.forEach(button => {
    button.addEventListener('click', () => {
      window.location.href = 'signup.html';
    });
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
});
