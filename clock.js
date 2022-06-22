const clock = document.querySelector('span');

const tick = () =>{

  const time = new Date();

  const h= time.getHours();
  const m = time.getMinutes();
  const s= time.getSeconds();

  const hours = h < 10 ? `0${h}` : h;
  const mins = m < 10 ? `0${m}` : m;
  const secs = s < 10 ? `0${s}` : s;

  clock.innerHTML = `${hours} : ${mins} : ${secs}`;
}


setInterval(tick, 1000);