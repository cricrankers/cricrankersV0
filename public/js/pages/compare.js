
document.querySelectorAll('.compare-photo-container').forEach(element => {
    element.addEventListener('click',()=>{
        let player = element.getAttribute('data-playerId').trim();
        window.location.href = `/profile?player=${player}` ;
    })
  
});