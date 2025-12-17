
const btn = document.querySelector('.cta');
btn.addEventListener('click',()=>{
  btn.innerText = 'Loading...';
  setTimeout(()=>btn.innerText='Started!',1000);
});