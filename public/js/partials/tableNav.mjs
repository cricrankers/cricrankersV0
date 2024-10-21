import { goToSlide } from "./tableSlider.mjs";

document.getElementById('tableNavParent6').addEventListener('click',(Event)=>{
  let  navElement = 'nav-element-c';
  let  selectedTab = 'selected-tab-c';
  let  idChar = 'c';
  let  carouselId = 'carousel-c'
  let carouselItems = document.querySelectorAll('.carousel-item-c').length;
  tableNav(Event,navElement,selectedTab,idChar,carouselId,carouselItems);
});



document.getElementById('tableNavParent3').addEventListener('click',(Event)=>{
  let navElement = 'nav-element-i';
  let selectedTab = 'selected-tab-i';
  let idChar = 'i';
  let carouselId = 'carousel-i';
  let carouselItems = document.querySelectorAll('.carousel-item-i').length;
  tableNav(Event,navElement,selectedTab,idChar,carouselId,carouselItems);
});


function tableNav(Event,navElement,selectedTab,idChar,carouselId,carouselItems){
  if(Event.target.classList.contains(`${navElement}`)){

    const allTabs = Array.from(document.getElementsByClassName(`${navElement}`));

    allTabs.forEach(tabs =>{
        tabs.classList.remove(`${selectedTab}`);
    });
    //call function to update table here
    goToSlide(idChar,Event.target.id,carouselId,carouselItems);
    Event.target.classList.add(`${selectedTab}`);
}

}


//function to update navBar with respect to the item being displayed in the table
 export function updateNavBar(navElement,selectedTabId,selectedTabSlider){
  const allTabs = Array.from(document.getElementsByClassName(`${navElement}`));

  const selectedTab = document.getElementById(`${selectedTabId}`);
  allTabs.forEach(tabs => {
    tabs.classList.remove(`${selectedTabSlider}`);
  });
  setTimeout(()=>{
    selectedTab.classList.add(`${selectedTabSlider}`);
  },100);
  
}




