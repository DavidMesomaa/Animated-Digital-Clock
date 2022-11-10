const printHrs = () => {
    let d = new Date();
    let hours = d.getHours();
    document.getElementById('hours').innerHTML = hours = hours < 10 ? "0" + hours : hours;
  };
  setInterval(printHrs, 1000);
  
  const printMins = () => {
    let d = new Date();
    let minutes = d.getMinutes();
    document.getElementById('minutes').innerHTML = minutes = minutes < 10 ? "0" + minutes : minutes;
  };
  setInterval(printMins, 1000);
  
  const printSecs = () => {
    let d = new Date();
    let seconds = d.getSeconds();
    document.getElementById('seconds').innerHTML = seconds = seconds < 10 ? "0" + seconds : seconds;
  };
  setInterval(printSecs, 1000);
  
  
  const btn = document.getElementById("clicked");
     let checked = false;
       btn.addEventListener("click",() =>{
          //checked = true;
          if(checked === false) {
           document.getElementById("house").style.backgroundColor = "#151a21";
           document.getElementById("full-clock").style.backgroundColor = "#151a21";
           document.getElementById("colon1").style.color = "#fe3b32";
           document.getElementById("colon2").style.color = "#fe3b32";
           checked = true;
          } else {
            document.getElementById("house").style.backgroundColor = "#e0e5ec";
            document.getElementById("full-clock").style.backgroundColor = "#fe3b32";
            document.getElementById("colon1").style.color = "#151a21";
            document.getElementById("colon2").style.color = "#151a21";
            checked = false;
          }
  });