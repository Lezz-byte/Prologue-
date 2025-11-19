const textElement = document.getElementById('text');
const continueBtn = document.getElementById('continueBtn');
const proposal = document.getElementById('proposal');
const heart = document.getElementById('heart');
const lines = [
    "Every connection has a beginning.",
    "Sometimes it comes quietly…",
    "Sometimes it arrives as someone unexpected.",
    "Your eyes… I find myself thinking about them more than I should.",
    "Your lips, your humor, the way you're just… interesting.",
    "I don’t even know how, but you caught my attention.",
    "Before we meet next week… I need to ask you something."
];
let currentLine = 0;
function showLine() {
    textElement.style.opacity = 0;
    setTimeout(() => {
        textElement.textContent = lines[currentLine];
        textElement.style.opacity = 1;
    }, 300);
    currentLine++;
    if (currentLine < lines.length) {
        setTimeout(showLine, 2600);
    } else {
        setTimeout(() => continueBtn.classList.remove('hidden'), 2600);
    }
}
window.onload = showLine;
continueBtn.addEventListener('click', () => {
    textElement.classList.add('hidden');
    continueBtn.classList.add('hidden');
    proposal.classList.remove('hidden');
    setTimeout(() => heart.style.opacity = 1, 500);
});