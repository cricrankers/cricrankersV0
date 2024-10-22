// cricrankers table slider block
{
  let navElement = 'nav-element-c';
  let selectedTabSlider = 'selected-tab-c';
  let isTouching = false;
  let startX;
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
      moveSlideLeft(idChar, carousel, navElement, selectedTabSlider, totalItems);
      isTouching = false;
    } else if (diffX < -30) {
      moveSlideRight(idChar, carousel, navElement, selectedTabSlider, totalItems);
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
      moveSlideLeft(idChar, carousel, navElement, selectedTabSlider, totalItems);
      isTouching = false;
    } else if (diffX < -30) {
      moveSlideRight(idChar, carousel, navElement, selectedTabSlider, totalItems);
      isTouching = false;
    }
  }, { passive: true });

  carousel.addEventListener('touchend', () => {
    isTouching = false;
  }, { passive: true });
}

// Function to move to the next slide (left swipe)
function moveSlideLeft(idChar, carousel, navElement, selectedTabSlider, totalItems) {
  const currentIndex = getCurrentSlideIndex(carousel);
  if (currentIndex < totalItems - 1) {
    updateNavBar(navElement, `${idChar}${currentIndex + 2}`, selectedTabSlider);
    carousel.style.transform = `translateX(-${(currentIndex + 1) * 100}%)`;
  }
}

// Function to move to the previous slide (right swipe)
function moveSlideRight(idChar, carousel, navElement, selectedTabSlider, totalItems) {
  const currentIndex = getCurrentSlideIndex(carousel);
  if (currentIndex > 0) {
    updateNavBar(navElement, `${idChar}${currentIndex}`, selectedTabSlider);
    carousel.style.transform = `translateX(-${(currentIndex - 1) * 100}%)`;
  }
}

// Helper function to get the current slide index based on the carousel's transform
function getCurrentSlideIndex(carousel) {
  const transformValue = carousel.style.transform;
  const match = transformValue.match(/translateX\(-(\d+)%\)/);
  return match ? parseInt(match[1]) / 100 : 0;
}

function updateNavBar(navElement, selectedTabId, selectedTabSlider) {
  const allTabs = Array.from(document.getElementsByClassName(`${navElement}`));
  const selectedTab = document.getElementById(`${selectedTabId}`);
  allTabs.forEach(tabs => {
    tabs.classList.remove(`${selectedTabSlider}`);
  });
  setTimeout(() => {
    selectedTab.classList.add(`${selectedTabSlider}`);
  }, 100);
}
