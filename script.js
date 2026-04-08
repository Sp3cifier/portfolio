// Copy LTC address to clipboard
function copyLtc() {
  const addr = document.getElementById("ltc-addr");
  const btn = document.getElementById("ltc-copy-btn");
  navigator.clipboard.writeText(addr.textContent.trim());
  btn.textContent = "✅";
  setTimeout(() => { btn.textContent = "📋"; }, 1100);
}

// Navbar scroll active effect (optional)
const links = document.querySelectorAll('.nav-links a');
window.onscroll = () => {
  const scrollY = window.scrollY;
  links.forEach(link => link.classList.remove('active'));
  if (scrollY < 400) links[0].classList.add('active');
  else if (scrollY < 1200) links[1].classList.add('active');
  else links[2].classList.add('active');
};