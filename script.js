function settime() {
    let timeset=document.getElementById('time')
    let time=new Date();
    timeset.innerHTML=time
}
setInterval(settime,1000)