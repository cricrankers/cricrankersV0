
// cricrankers table slider block
{
  let navElement = 'nav-element-c';
  let selectedTabSlider = 'selected-tab-c';
  let isTouching = false;
  let startX;
  let currentIndex = 0;
  let idChar = 'c';
  const carousel = document.getElementById('carousel-c');
  const totalItems = document.querySelectorAll('.carousel-item-c').length;
  
  carousel.addEventListener('touchstart', (e) => {
    isTouching = true;
    startX = e.touches[0].clientX;
  }, { passive: true });
  
  carousel.addEventListener('touchmove', (e) => {
    if (!isTouching) return;
  
    const x = e.touches[0].clientX;
    const diffX = startX - x;
  
    if (diffX > 30) {
      currentIndex = nextSlide(idChar, carousel, navElement, currentIndex, selectedTabSlider, totalItems);
      isTouching = false;
    } else if (diffX < -30) {
      currentIndex = prevSlide(idChar, carousel, navElement, currentIndex, selectedTabSlider, totalItems);
      isTouching = false;
    }
  }, { passive: true });
  
  carousel.addEventListener('touchend', () => {
    isTouching = false;
  }, { passive: true });
  
}

// icc table slider block
{
  let navElement = 'nav-element-i';
  let selectedTabSlider = 'selected-tab-i';
  let isTouching = false;
  let startX;
  let currentIndex = 0;
  let idChar = 'i';
  const carousel = document.getElementById('carousel-i');
  const totalItems = document.querySelectorAll('.carousel-item-i').length;
  
  carousel.addEventListener('touchstart', (e) => {
    isTouching = true;
    startX = e.touches[0].clientX;
  }, { passive: true });
  
  carousel.addEventListener('touchmove', (e) => {
    if (!isTouching) return;
  
    const x = e.touches[0].clientX;
    const diffX = startX - x;
  
    if (diffX > 30) {
      currentIndex = nextSlide(idChar, carousel, navElement, currentIndex, selectedTabSlider, totalItems);
      isTouching = false;
    } else if (diffX < -30) {
      currentIndex = prevSlide(idChar, carousel, navElement, currentIndex, selectedTabSlider, totalItems);
      isTouching = false;
    }
  }, { passive: true });
  
  carousel.addEventListener('touchend', () => {
    isTouching = false;
  }, { passive: true });
  
}

// Function to move to the next slide
function nextSlide(idChar, carousel, navElement, currentIndex, selectedTabSlider, totalItems) {
  if (currentIndex < totalItems - 1) {
    currentIndex++;
    updateNavBar(navElement, `${idChar}${currentIndex + 1}`, selectedTabSlider);
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
  }
  return currentIndex;
}

// Function to move to the previous slide
function prevSlide(idChar, carousel, navElement, currentIndex, selectedTabSlider, totalItems) {
  if (currentIndex > 0) {
    currentIndex--;
    updateNavBar(navElement, `${idChar}${currentIndex + 1}`, selectedTabSlider);
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
  }
  return currentIndex;
}

function updateNavBar(navElement,selectedTabId,selectedTabSlider){
  const allTabs = Array.from(document.getElementsByClassName(`${navElement}`));

  const selectedTab = document.getElementById(`${selectedTabId}`);
  allTabs.forEach(tabs => {
    tabs.classList.remove(`${selectedTabSlider}`);
  });
  setTimeout(()=>{
    selectedTab.classList.add(`${selectedTabSlider}`);
  },100);
  
}
