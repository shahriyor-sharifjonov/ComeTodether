// Header Menu
const headerButton: HTMLButtonElement =
  document.querySelector(".header__button");
const headerMenu: HTMLUListElement = document.querySelector(".header__menu");
const headerLink: HTMLCollection = document.getElementsByClassName("header__link");
const header2Link: HTMLCollection = document.getElementsByClassName("header2__link");
let menuOpened = false;
const menuToggle = () => {
  menuOpened = !menuOpened;
  headerButton.classList.toggle("open");
  headerMenu.classList.toggle("open");
};

headerButton.onclick = menuToggle;

window.onclick = (e: MouseEvent) => {
  if (
    menuOpened &&
    !e.composedPath().includes(headerButton) &&
    !e.composedPath().includes(headerMenu)
  )
    menuToggle();
};

window.onclick = function(e){
  if(e.target.classList.contains('header__link')){
    if(menuOpened){
      menuToggle()
      headerLinkCLicked(this)
      function headerLinkCLicked(e){
        for(let i = 0; i < headerLink.length; i++){
          headerLink[i].classList.remove('current');
        }
        e.classList.add('current');
      }
      
    }
  }
}
window.onclick = function(e){
  if(e.target.classList.contains('header2__link')){
    if(menuOpened){
      menuToggle()
      header2LinkCLicked(this)
      function header2LinkCLicked(e){
        console.log(e);
        
        for(let i = 0; i < header2Link.length; i++){
          header2Link[i].classList.remove('current');
        }
        e.classList.add('current');
      }
    }
  }
}