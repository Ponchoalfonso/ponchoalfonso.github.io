document.addEventListener('DOMContentLoaded', () => {
  let options = document.querySelectorAll('nav ul li a');
  
  if (options)
   document.addEventListener('scroll', () => { changeSelectedSection(options) });
});

const changeSelectedSection = options => {
  const selected = document.querySelector('.selected');
  if (selected)
    selected.classList.remove('selected');
  for (let i = options.length - 1; i >= 0; i--) {
    const option = options[i];
    const elm = document.querySelector(option.hash);
    if (elm && window.scrollY >= elm.getBoundingClientRect().top - document.body.getBoundingClientRect().top - 1) {
      option.classList.add('selected');
      break;
    }
  }
}