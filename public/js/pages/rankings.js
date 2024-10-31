
document.querySelectorAll('.rankDiv').forEach(element => {
    element.addEventListener('click',()=>{
        let player = element.getAttribute('data-playerName').trim();
        window.location.href = `/profile?player=${player}` ;
    })
  
});

