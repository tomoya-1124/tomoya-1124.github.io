function toggleNav(){
  const nav = document.getElementById('nav');
  const btn = document.querySelector('.nav-toggle');
  const open = nav.classList.toggle('open');
  btn.setAttribute('aria-expanded', open ? 'true' : 'false');
}
document.addEventListener('DOMContentLoaded', ()=>{
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
});
// ▼ Service Worker登録
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js");
  });
}

