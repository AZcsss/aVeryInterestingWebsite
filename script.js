
const BIRTHDAY_NAME = "IEEE SIGHT&ECE's Most Important Girl"; // Change this to her name

const MESSAGES = [
    "اهلا يا سندوسسسسسس اهلااااا",

       "مضايقاكي سندوس؟",

       "طب سندوس سندوس سندوسسسسس ساااااندوووووسسسس",

       "ءحم",

       "خلاص مش هرخم اوي المرة دي",

       "النهاردة يوم مهم جدا جدا جدا",

       "النهاردة يوم الجمعة عيد المسلمين الاسبوعي",

       "و في حاجة كمان يعني حصلت زي النهاردة من عشريييييييييييييييين سنة",

       "زي النهاردة من عشرين سنة دكتور وائل كان لسة بيشرح سيمي كونداكتور",

       "برضو معرفش دي حاجة مهمة ولا لا بس يعني في شخص مهم اوي اوي اوي و من اكتر الناس تأثيرا في حياة اهم شخص في القرن الواحد وعشرين -انا يعني- اتولد",

       "مش اكثر الناس اوي يعني علشان ميتغرش يعني, نص نص",

       "بصي يا سندس",

       "بما انك مبتقبليش الهدايا من ولاد فقعدت افكر كتير كتير كتير اعمل ايه علشان اوريكي ان ده يوم مهم نسبيا",

       "علشان دكتور وائل طبعا",

       "بتدوسي نيكست بسرعة ليه بالراحة يماما",

       "اقصد سندس",

       "اسكتي شوية",

       "المهم يعني",

       "طبعا بتسألي دلوقتي مش هندخل فالموضوع ولا ايه",

       "براحتي دكتور وائل قال منتكلمش اصلا",

       "🥁🥁🥁🥁🥁🥁🥁🥁🥁🥁🥁🥁",

       "كل سنة وانت طيبة و بخير و دايما سعيدة و مبسوطة يا سندس و تكون السنة دي احسن سنة عدت عليكي و تكون حياتك من هنا و رايح كلها سعادة و انبساط و رخامة مني و غلاسة مني برضو و متعمليليش بلوك فيها و نستنا كمان سنة ولا حاجة يعني ياريت كرم حضرتك يغرقنا وكده",

       "متضايقيش اني حاولت اعمل حاجة في عيد ميلادك مهو اكيد مش هيجي يوم ذكرى اول يوم اتنين في شهر اتنين سنة 2006 و اسكت كده لازم اعمل حاجة",

       "يلا من هنا بقا وقتك خلص معايا"

];

const LETTER_CONTENT = {
    sad: {
        title: "When You Feel Sad 💙",
        message: "بما انك استخديمها مرة يا سندوس فانا مش عاوزك تيجي هنا يا سندوس ليه علشان كونك جيتي هنا معناها انك زعلانة و معنى اتنك زعلانة اني حاسس بيكي لييه بقااا علشان قلب الام قولتلك يا سندس بقا انت لما بتبقي زعلانة مبتفتكريش, يا سندوس بصي, ايوا ابعتي ايموجي العين شاطرة شاطرة و امسحي دموعك كده ليه علشان يا سندس دموعك حاجة من اغلى عشر حاجات في الكوكب كله فليه تعيطي, استني استني برضو متمسحيهاش يعني خزنيها افضل علشان الحاجات دي غالية اوي, مهما كان اللي بتمري بيه يا سندس افتكري انه ربنا بيحبك ودليل على كده ان كل الناس بتحبك فده سسبب كفاية ان انتي تبطلي تعيطي و تتبسطي كده و تفضلي مبسوطة يارب يا سندوس تفضلي مبسوطة طول عمرك و انت دلوقتي بتعيطي اقفلي بقا و تعالي عيطي عندي علشان نشوف ايه السبب و نحله"
    },
    doubt: {
        title: "When You Doubt Yourself ✨",
        message: "Hey, listen to me: you are so much more capable than you realize. I've watched you tackle challenges that would break others, and you've come out stronger every single time. That voice of doubt in your head? It's lying to you. You are talented, intelligent, and worthy of every good thing that comes your way. Believe in yourself the way I believe in you. You've got this! <<<<<<< بطلي تقللي من مقدار نفسك يماما انت علامة اكبر من كتير  كده "
    },
    miss: {
        title: "When You Block me 😏",
        message: "انت فتحت المكان ده ليه يعم انت, متهزرش معايا علشان ايه, معرفش بس يعني لو انت فتحتي ده ده معناها ان فضولك شدك علشان اكيد انت معملتيش بلوك انت اكبر من كده و انسانة عاقلة جدا و بقيتي عشرين سنة يعني خلاص يعني عيب والله"
    },
    sleep: {
        title: "When You Can't Sleep 🌙",
        message: "Sometimes our minds just won't quiet down, and that's okay. Take a deep breath and let go of the worries you're carrying. Tomorrow is a new day, and whatever you're stressing about will still be there in the morning—but you'll be more ready to face it after rest. Think of peaceful things: gentle ocean waves, soft rain on windows, the warmth of sunlight. You are safe, you are okay, and sleep will come when you're ready. Sweet dreams, my friend. لا دي كاتبها شات جي بي تي ههه"
    },
    motivation: {
        title: "When You Need Motivation 🌟",
        message: "You are capable of achieving absolutely anything you set your mind to. I've seen your determination, your passion, and your drive firsthand. Every step forward, no matter how small, is progress. Don't compare your journey to anyone else's—this is YOUR path, and you're exactly where you need to be. Keep going. Keep pushing. Keep believing. The world needs what only you can offer. You're going to do amazing things—I just know it! انا عارف وانت عارفة يا سندس ان انت اشطر حد و اكتر حد مجتهد عموما و مفيش حد بيتعب زيك كده وان ربنا شايلك كل حاجة بتتعبيها و زيادة كمان او انت مش عارفة انا عارف عادي "
    },
   dontknow: {
        title: "When You Need استفزاز 😛",
        message: "😛😛😛😛😛😛😛😛😛😛😛😛😛😛😛😛😛😛😛😛😛😛😛😛😛😛😛😛😛😛😛😛😛😛😛😛😛😛😛😛😛😛😛😛😛😛😛😛😛😛😛😛"
    }
};


let currentMessageIndex = 0;
let isTyping = false;

const giftBox = document.getElementById('giftBox');
const giftContainer = document.getElementById('giftContainer');
const clickHint = document.getElementById('clickHint');
const messageContainer = document.getElementById('messageContainer');
const messageText = document.getElementById('messageText');
const nextButton = document.getElementById('nextButton');
const birthdayTitle = document.getElementById('birthdayTitle');
const birthdayName = document.getElementById('birthdayName');
const lettersButton = document.getElementById('lettersButton');
const giftSection = document.getElementById('giftSection');
const lettersSection = document.getElementById('lettersSection');
const confettiContainer = document.getElementById('confettiContainer');
const musicToggle = document.getElementById('musicToggle');
const bgMusic = document.getElementById('bgMusic');
const letterCards = document.querySelectorAll('.letter-card');
const modal = document.getElementById('letterModal');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const modalTitle = document.getElementById('modalTitle');
const modalMessage = document.getElementById('modalMessage');


giftBox.addEventListener('click', openGiftBox);

function openGiftBox() {
    // Add opening animation
    giftBox.classList.add('opening');
    clickHint.classList.add('hidden');
    
    // After animation, hide gift and show first message
    setTimeout(() => {
        giftContainer.classList.add('opened');
        showMessage(0);
    }, 800);
}

// ================================
// MESSAGE DISPLAY WITH TYPEWRITER
// ================================

function showMessage(index) {
    if (index >= MESSAGES.length) {
        showBirthdayTitle();
        return;
    }
    
    currentMessageIndex = index;
    messageContainer.classList.add('active');
    
    // Typewriter effect
    typeWriter(MESSAGES[index], 0);
}

function typeWriter(text, charIndex) {
    if (isTyping) return;
    
    isTyping = true;
    messageText.textContent = '';
    
    const typingInterval = setInterval(() => {
        if (charIndex < text.length) {
            messageText.textContent += text.charAt(charIndex);
            charIndex++;
        } else {
            clearInterval(typingInterval);
            isTyping = false;
        }
    }, 30);
}

nextButton.addEventListener('click', () => {
    if (isTyping) return;
    
    currentMessageIndex++;
    
    if (currentMessageIndex < MESSAGES.length) {
        // Fade out and show next message
        messageContainer.classList.remove('active');
        setTimeout(() => {
            showMessage(currentMessageIndex);
        }, 400);
    } else {
        // All messages shown, transition to birthday title
        messageContainer.classList.remove('active');
        setTimeout(() => {
            showBirthdayTitle();
        }, 400);
    }
});


function showBirthdayTitle() {
    birthdayName.textContent = BIRTHDAY_NAME;
    birthdayTitle.classList.add('active');
    createConfetti();
}

function createConfetti() {
    const colors = ['#ffb8b1', '#ff9a8e', '#ffc9c9', '#ffe5d9', '#ffd5cd'];
    const confettiCount = 80;
    
    for (let i = 0; i < confettiCount; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 0.5 + 's';
            confetti.style.animationDuration = Math.random() * 2 + 2 + 's';
            
            confettiContainer.appendChild(confetti);
            
            // Remove confetti after animation
            setTimeout(() => {
                confetti.remove();
            }, 4000);
        }, i * 30);
    }
}

// ================================
// TRANSITION TO LETTERS SECTION
// ================================

lettersButton.addEventListener('click', () => {
    giftSection.classList.add('hidden');
    
    setTimeout(() => {
        lettersSection.classList.add('active');
    }, 500);
});

// ================================
// LETTER CARDS INTERACTION
// ================================

letterCards.forEach(card => {
    card.addEventListener('click', () => {
        const letterType = card.getAttribute('data-letter');
        openLetterModal(letterType);
    });
});

function openLetterModal(letterType) {
    const content = LETTER_CONTENT[letterType];
    
    if (content) {
        modalTitle.textContent = content.title;
        modalMessage.textContent = content.message;
        modal.classList.add('active');
        
        // Prevent body scroll
        document.body.style.overflow = 'hidden';
    }
}

// ================================
// MODAL CLOSE FUNCTIONALITY
// ================================

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal on ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// ================================
// MUSIC TOGGLE (Optional)
// ================================

let isMusicPlaying = false;

musicToggle.addEventListener('click', () => {
    if (isMusicPlaying) {
        bgMusic.pause();
        musicToggle.classList.remove('playing');
        isMusicPlaying = false;
    } else {
        // Note: Auto-play might be blocked by browser
        // User interaction is required for audio
        bgMusic.play().catch(err => {
            console.log('Audio playback failed:', err);
        });
        musicToggle.classList.add('playing');
        isMusicPlaying = true;
    }
});

// ================================
// KEYBOARD NAVIGATION
// ================================

document.addEventListener('keydown', (e) => {
    // If message is showing and Enter is pressed
    if (messageContainer.classList.contains('active') && e.key === 'Enter') {
        nextButton.click();
    }
});

// ================================
// MOBILE TOUCH IMPROVEMENTS
// ================================

// Prevent double-tap zoom on buttons
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('touchend', (e) => {
        e.preventDefault();
        button.click();
    });
});

// ================================
// SMOOTH SCROLL INITIALIZATION
// ================================

window.addEventListener('load', () => {
    window.scrollTo(0, 0);
});

// ================================
// PERFORMANCE OPTIMIZATION
// ================================

// Use passive event listeners for scroll
window.addEventListener('scroll', () => {
    // Add scroll effects if needed
}, { passive: true });

// ================================
// CONSOLE MESSAGE (Easter Egg)
// ================================

console.log('%c🎂 Happy Birthday! 🎂', 'font-size: 24px; color: #ff9a8e; font-weight: bold;');
console.log('%cMade with ❤️ and JavaScript', 'font-size: 14px; color: #ffb8b1;');
