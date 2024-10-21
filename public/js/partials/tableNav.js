
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


function goToSlide(idChar, slideId, carouselId, carouselItems) {
  const carousel = document.getElementById(`${carouselId}`);

  const slideNumber = parseInt(slideId.replace(`${idChar}`, ''), 10);

  if (slideNumber >= 1 && slideNumber <= carouselItems) {
    let currentIndex = slideNumber - 1;
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
  } else {
    console.error(`Invalid slideId: ${slideId}. Please pass a valid ID like 'c1', 'i1', etc.`);
  }
}





