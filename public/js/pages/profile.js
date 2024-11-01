async function shareProfile(){
    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title,
          url: window.location.href,
          text:"Get Detailed analysis of Players career on CricRankers"
        });
      } catch (error) {
        console.error("Error sharing URL:", error);
      }
    } else {
      alert("Sharing not supported in this browser.");
    }
  };
  document.querySelectorAll(".stats-row").forEach(div => {
    div.addEventListener('click', () => {
      
    });
  });
  