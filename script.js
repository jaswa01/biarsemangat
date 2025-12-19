const music = document.getElementById('music');
const hearts = document.getElementById('hearts');
const bgLove = document.getElementById('bgLove');
const letterText = document.getElementById('letterText');

/* TEKS FINAL */
const text = [
  "Semangat kuliahnya 💪",
  "jangan pernah menyerah",
  "tetaplah ramah dan senyum 😊"
];

let line = 0;
let char = 0;

/* BUKA SURAT */
function openLetter() {
  document.getElementById('envelope').style.display = 'none';
  document.getElementById('letter').classList.remove('hidden');

  letterText.innerHTML = "";
  line = 0;
  char = 0;

  if (music) music.play();

  typeText();
}

/* TYPING AMAN */
function typeText() {
  if (line < text.length) {
    if (char < text[line].length) {
      letterText.innerHTML += text[line].charAt(char);
      char++;
      setTimeout(typeText, 50);
    } else {
      letterText.innerHTML += "<br>";
      line++;
      char = 0;
      setTimeout(typeText, 400);
    }
  } else {
    startHearts();
  }
}

/* HATI DEPAN */
function startHearts() {
  setInterval(() => {
    const h = document.createElement('span');
    h.textContent = '❤';
    h.style.left = Math.random() * 100 + 'vw';
    h.style.fontSize = Math.random() * 14 + 12 + 'px';
    h.style.animationDuration = Math.random() * 4 + 4 + 's';
    hearts.appendChild(h);
    setTimeout(() => h.remove(), 8000);
  }, 400);
}

/* LOVE BACKGROUND PELAN */
setInterval(() => {
  const bg = document.createElement('span');
  bg.textContent = '❤';
  bg.style.left = Math.random() * 100 + 'vw';
  bg.style.fontSize = Math.random() * 30 + 20 + 'px';
  bg.style.animationDuration = Math.random() * 12 + 10 + 's';
  bgLove.appendChild(bg);
  setTimeout(() => bg.remove(), 20000);
}, 1200);