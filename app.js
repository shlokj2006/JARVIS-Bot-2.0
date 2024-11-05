const btn = document.querySelector('.talk')
const content = document.querySelector('.content')


function speak(text) {
  const text_speak = new SpeechSynthesisUtterance(text);

  text_speak.rate = 1;
  text_speak.volume = 1;
  text_speak.pitch = 1;

  window.speechSynthesis.speak(text_speak);
}

function wishMe() {
  const currentTime = new Date();
  const hour = currentTime.getHours();

  const greetings = {
    morning: "Good Morning Shlok...",
    afternoon: "Good Afternoon Master...",
    evening: "Good Evening Sir...",
  };

  let greeting;
  if (hour >= 0 && hour < 12) {
    greeting = greetings.morning;
  } else if (hour >= 12 && hour < 17) {
    greeting = greetings.afternoon;
  } else {
    greeting = greetings.evening;
  }

  speak(greeting);
}

function wishMe() {
  const currentTime = new Date();
  const hour = currentTime.getHours();

  let greeting;
  switch (true) {
    case hour >= 0 && hour < 12:
      greeting = "Good Morning Shlok...";
      break;
    case hour >= 12 && hour < 17:
      greeting = "Good Afternoon Master...";
      break;
    default:
      greeting = "Good Evening Sir...";
  }

  speak(greeting);
}

window.addEventListener('load', () => {
  speak("Initializing JARVIS..");
  wishMe();
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
  const currentIndex = event.resultIndex;
  const transcript = event.results[currentIndex][0].transcript;
  content.textContent = transcript;
  takeCommand(transcript.toLowerCase());

}

btn.addEventListener('click', () => {
  content.textContent = "Listening...."
  recognition.start();
})

function takeCommand(message) {
  if (message.includes('hey') || message.includes('hello')) {
    speak("Hello Sir, How May I Help You?");
  }
  else if (message.includes('jarvis')) {
    speak("What would you like to do today ?");
  }

  else if (message.includes('3000')) {
    speak("I am iron man");
  }

  else if (message.includes("open google")) {
    window.open("https://google.com", "_blank");
    speak("Opening Google...")
  }

  else if (message.includes("open youtube")) {
    window.open("https://youtube.com", "_blank");
    speak("Opening Youtube...")
  }

  else if (message.includes("open Insta")) {
    window.open("https://instagram.com", "_blank");
    speak("Opening Facebook...")
  }

  else if (message.includes('what is') || message.includes('who is') || message.includes('what are')) {
    window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
    const finalText = "This is what i found on internet regarding " + message;
    speak(finalText);

  }

  else if (message.includes('wikipedia')) {
    window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
    const finalText = "This is what i found on wikipedia regarding " + message;
    speak(finalText);
  }

  else if (message.includes('time')) {
    const time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" })
    const finalText = time;
    speak(finalText);
  }

  else if (message.includes('date')) {
    const date = new Date().toLocaleString(undefined, { month: "short", day: "numeric" })
    const finalText = date;
    speak(finalText);
  }

  else if (message.includes('calculator')) {
    window.open('Calculator:///')
    const finalText = "Opening Calculator";
    speak(finalText);
  }

  else if (message.includes('kill')) {
    const countdownSeconds = [5, 4, 3, 2, 1];
    const countdownString = countdownSeconds.join(', ');
    speak(`Code red. Initializing self-destruction in ${countdownString}.`);
    console.warn("Security alert : self-destruction sequence initiated")
    let password = prompt("Enter password to cancel self-destruction");
           if (password == 2006) { console.log("you are safe "); speak("You are safe") }
            else { console.log("self-destruction sequence initiated"); speak("Self-destruction sequence initiated backing up all files get ready to evacuate  ") }




  }

  else if (message.includes('maps')) {
    window.open('https://www.google.com/maps', "_blank");
    const finalText = "Opening Google Maps";
    speak(finalText);
  }

  else if (message.includes('translate')) {
    window.open('https://translate.google.com/', "_blank");
    const finalText = "Opening Google Translate";
    speak(finalText);
  }

  else if (message.includes('music')) {
    window.open('https://music.youtube.com/', "_blank");
    const finalText = "Opening YouTube Music";
    speak(finalText);
  }

  else if (message.includes('news')) {
    window.open(`https://news.google.com/topstories?hl=en-IN&gl=IN&ceid=IN:en`, "_blank");
    const finalText = "Here are the latest news headlines";
    speak(finalText);
  }

  else if (message.includes('bored')) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let userGuess = prompt("Guess the number between 1 and 100");
    let turns = 0;

    while (userGuess != randomNumber) {
      if (userGuess < randomNumber) {
        userGuess = prompt("Your guess was too low. Try again.");
      } else {
        userGuess = prompt("Your guess was too high. Try again.");
      }
      turns++;
    }

    const score = 100 - turns;
    console.log(`Congratulations! You guessed the number in ${turns} turns! Your score is ${score}.`);
    speak(`Congratulations! You guessed the number in ${turns} turns!Your score is ${score}.`);

  }
  else if (message.includes('444')) {
    window.open('game1.html');
    const finalText = "Opening game";
    speak(finalText);
  }
  else {
    window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
    const finalText = "I found some information for " + message + " on google";
    speak(finalText);
  }
}