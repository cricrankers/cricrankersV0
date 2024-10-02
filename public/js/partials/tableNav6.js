const allTabs = Array.from(document.getElementsByClassName('nav-element'));

document.getElementById('tableNavParent').addEventListener('click',(Event)=>{
    
    if(Event.target.classList.contains('nav-element')){
        allTabs.forEach(tabs =>{
            tabs.classList.remove('selected-tab');
        });
        Event.target.classList.add('selected-tab');
    }

}); 



