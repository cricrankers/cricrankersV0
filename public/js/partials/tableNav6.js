import { goToSlide } from "./tableSlider.js";
const allTabs = Array.from(document.getElementsByClassName('nav-element'));

document.getElementById('tableNavParent').addEventListener('click',(Event)=>{
    
    if(Event.target.classList.contains('nav-element')){
        allTabs.forEach(tabs =>{
            tabs.classList.remove('selected-tab');
        });
        //call function to update table here
        goToSlide(Event.target.id);
        Event.target.classList.add('selected-tab');
    }

});

//function to update navBar with respect to the item being displayed in the table
 export function updateNavBar(selectedTabId){

  const selectedTab = document.getElementById(`${selectedTabId}`);
  allTabs.forEach(tabs => {
    tabs.classList.remove('selected-tab');
  });
  selectedTab.classList.add('selected-tab');

}




