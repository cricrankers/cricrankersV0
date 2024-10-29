
document.querySelectorAll('.rankDiv').forEach(element => {
    element.addEventListener('click',()=>{
        let player = element.getAttribute('data-playerName').trim().replaceAll(' ','-');
        window.location.href = `/profile?player=${player}` ;
    })
  
});

