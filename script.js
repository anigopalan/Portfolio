// Optional: Typewriter effect for header
const intro = document.querySelector('header h1');
let text = intro.textContent;
intro.textContent = '';
let i = 0;
function typeWriter() {
  if (i < text.length) {
    intro.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 75);
  }
}
typeWriter();
