const paragraphs = [
    "You cannot change your future, but you can change your habits, and surely your habits can change your future.",
    "Perhaps if you know you are insane then you are not insane. Or you are becoming sane, finally.",
    "In theory, there is no difference between theory and practice - in practice, there is",
    "If there ever comes a day when we can't be together, keep me in your heart. I'll stay there forever.",
    "If A is success in life, then A = x + y + z. Work is x, play is y and z is keeping your mouth shut.",
    "You can, you should, and if you're brave enough to start, you will.",
    "Why are you trying so hard to fit in when you were born to stand out?",
    "If the world thinks you're a monster, what does it matter? The world is wrong. But when you start to think of yourself as a monster…",
    "Youth can not know how age thinks and feels. But old men are guilty if they forget what it was to be young.",
    "Those of us who have made something of their lives will look at those that haven't as nothing but clowns.",
    "It doesn't matter who you are or what you look like, so long as somebody loves you.",
    "God’s plan is like a beautiful tapestry. And the tragedy of being human is that we only get to see it from the back. With all the ragged threads and the muddy colors. And we only get a hint at the true beauty that would be revealed if we could see the whole pattern on the other side…as God does.",
    "Is getting rid of all thorns in someone's path really what's best for them?",
    "You could be whoever, whatever you wanna be, even someone good. I mean, just in case someone told you different.",
    "They often say that humans can't live alone, but you can live pretty long by yourself. Instead of feeling alone in a group, it's better to be alone in your solitude.",
    "It’s only once you’ve stopped that you realize how hard it is to start again.",
    "There's no such thing as a painless lesson, they just don't exist. Sacrifices are necessary. You can't gain anything without losing something first. Although if you can endure that pain and walk away from it, you'll find that you now have a heart strong enough to overcome any obstacle. Yeah... a heart made fullmetal.",
    "I remember when I was a kid I got into web design by ripping off sites I liked. All you had to do was view source on your browser and there it was. The code. You could copy-paste it, modify it a little, put your name on it, and like that, it was your site. View source. What if we had that for people? Would people really wanna see?",
    "Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.",
    "People's lives don't end when they die, it ends when they lose faith."
];
const topEnglishWords = [
    "the", "be", "of", "and", "a", "to", "in", "he", "have", "it", "that",
    "for", "they", "with", "as", "not", "on", "she", "at", "by", "this",
    "we", "you", "do", "but", "from", "or", "which", "one", "would", "all",
    "will", "there", "say", "who", "make", "when", "can", "more", "if", "no",
    "man", "out", "other", "so", "what", "time", "up", "go", "about", "than",
    "into", "could", "state", "only", "new", "year", "some", "take", "come",
    "these", "know", "see", "use", "get", "like", "then", "first", "any",
    "work", "now", "may", "such", "give", "over", "think", "most", "even",
    "find", "day", "also", "after", "way", "many", "must", "look", "before",
    "great", "back", "through", "long", "where", "much", "should", "well",
    "people", "down", "own", "just", "because", "good", "each", "those",
    "feel", "seem", "how", "high", "too", "place", "little", "world",
    "very", "still", "nation", "hand", "old", "life", "tell", "write",
    "become", "here", "show", "house", "both", "between", "need", "mean",
    "call", "develop", "under", "last", "right", "move", "thing", "general",
    "school", "never", "same", "another", "begin", "while", "number", "part",
    "turn", "real", "leave", "might", "want", "point", "form", "off", "child",
    "few", "small", "since", "against", "ask", "late", "home", "interest",
    "large", "person", "end", "open", "public", "follow", "during", "present",
    "without", "again", "hold", "govern", "around", "possible", "head",
    "consider", "word", "program", "problem", "however", "lead", "system",
    "set", "order", "eye", "plan", "run", "keep", "face", "fact", "group",
    "play", "stand", "increase", "early", "course", "change", "help", "line",
    "city", "put", "close", "case", "force", "meet", "once", "water", "upon",
    "war", "build", "hear", "light", "unite", "live", "every", "country",
    "bring", "center", "let", "side", "try", "provide", "continue", "name",
    "certain", "power", "pay", "result", "question", "study", "woman", "member",
    "until", "far", "night", "always", "service", "away", "report", "something",
    "company", "week", "church", "toward", "start", "social", "room", "figure",
    "nature", "though", "young", "less", "enough", "almost", "read", "include",
    "president", "nothing", "yet", "better", "big", "boy", "cost", "business",
    "value", "second", "why", "clear", "expect", "family", "complete",
    "act", "sense", "mind", "experience", "art", "next", "near", "direct",
    "car", "law", "industry", "important", "girl", "until", "service", "away",
    "report", "something", "company", "week", "church", "toward", "start",
    "social", "room", "figure", "nature", "though", "young", "less", "enough",
    "almost", "read", "include", "president", "nothing", "yet", "better", "big",
    "boy", "cost", "business", "value", "second", "why", "clear", "expect",
    "family", "complete", "act", "sense", "mind", "experience", "art", "next",
    "near", "direct", "car", "law", "industry", "important", "girl"
];

const typingText = document.querySelector(".typing-text p")
const inpField = document.querySelector(".wrapper .input-field")
const tryAgainBtn = document.querySelector(".typing-text button")
const timeTag = document.querySelector(".time span b")
const mistakeTag = document.querySelector(".mistake span")
const wpmTag = document.querySelector(".wpm span")
const cpmTag = document.querySelector(".cpm span")
const navButtons = document.querySelectorAll('.nav-option');
const wrapper = document.querySelector('.wrapper');
const modeSwitchBtn = document.getElementById('mode-switch');
const bodyElement = document.body;

let mode = 'direct';
let timer;
let maxTime = 60;
let timeLeft = maxTime;
let charIndex = mistakes = isTyping = 0;

navButtons.forEach(button => {
    button.addEventListener('click', () => {
        const option = button.getAttribute('data-option');
        if (option === 'direct') {
            mode = 'direct';
        } else if (option === 'random') {
            mode = 'random';
        }
        loadParagraph();
    });
});

function generateParagraph() {
    const paragraphLength = 80; // Define the desired length of the paragraph
    let paragraph = "";
    for (let i = 0; i < paragraphLength; i++) {
        const randomIndex = Math.floor(Math.random() * topEnglishWords.length);
        const word = topEnglishWords[randomIndex];
        paragraph += word + " ";
    }
    return paragraph.trim(); // Remove trailing whitespace
}

function loadParagraph() {
    const ranIndex = Math.floor(Math.random() * paragraphs.length);
    typingText.innerHTML = "";
    let paragraph = ""
    if (mode === 'direct') {
        paragraph = paragraphs[ranIndex];
    } else if (mode === 'random') {
        paragraph = generateParagraph();
    }
    paragraph.split("").forEach(char => {
        let span = `<span>${char}</span>`
        typingText.innerHTML += span;
    });
    wrapper.querySelectorAll("span")[0].classList.add("active");
    document.addEventListener("keydown", () => inpField.focus());
    typingText.addEventListener("click", () => inpField.focus());
}

function initTyping() {
    let characters = typingText.querySelectorAll("span");
    let typedChar = inpField.value.split("")[charIndex];
    if (charIndex < characters.length - 1 && timeLeft > 0) {
        if (!isTyping) {
            timer = setInterval(initTimer, 1000);
            isTyping = true;
        }
        if (typedChar == null) {
            if (charIndex > 0) {
                charIndex--;
                if (characters[charIndex].classList.contains("incorrect")) {
                    mistakes--;
                }
                characters[charIndex].classList.remove("correct", "incorrect");
            }
        } else {
            if (characters[charIndex].innerText === typedChar) {
                characters[charIndex].classList.add("correct");
            } else {
                mistakes++;
                characters[charIndex].classList.add("incorrect");
            }
            charIndex++;
        }
        characters.forEach(span => span.classList.remove("active"));
        characters[charIndex].classList.add("active");

        let wpm = Math.round(((charIndex - mistakes) / 5) / (maxTime - timeLeft) * 60);
        wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;

        wpmTag.innerText = wpm;
        mistakeTag.innerText = mistakes;
        cpmTag.innerText = charIndex - mistakes;
    } else {
        clearInterval(timer);
        inpField.value = "";
    }
}

function initTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        timeTag.innerText = timeLeft;
        let wpm = Math.round(((charIndex - mistakes) / 5) / (maxTime - timeLeft) * 60);
        wpmTag.innerText = wpm;
    } else {
        clearInterval(timer);
    }
}

function resetGame() {
    loadParagraph();
    clearInterval(timer);
    timeLeft = maxTime;
    charIndex = mistakes = isTyping = 0;
    inpField.value = "";
    timeTag.innerText = timeLeft;
    wpmTag.innerText = 0;
    mistakeTag.innerText = 0;
    cpmTag.innerText = 0;

}

modeSwitchBtn.addEventListener('click', () => {
    bodyElement.classList.toggle('light-mode');
});

loadParagraph();
inpField.addEventListener("input", initTyping);
tryAgainBtn.addEventListener("click", resetGame);