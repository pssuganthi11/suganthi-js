const quotes = [
  { text: "Dream, dream, dream. Dreams transform into thoughts and thoughts result in action.", author: "Abdul kalam" },
  { text: "It always seems impossible until it's done.", author: "nelson mandela" },
  { text: "It always seems impossible until it's done..", author: "nelson mandela" },
  { text: "If you want to shine like a sun, first burn like a sun.", author: "Abdul kalam" },
  { text: "Education is the most powerful weapon which you can use to change the world.", author: "nelson mandela" },
  { text: "Imagination means nothing without doing..", author: "Charlie Chaplin" },
  { text: "It is better to die standing than to live on your knees.", author: "Emiliano Zapata" },
  { text: "Confidence and hard work is the best medicine to kill the disease called failure. It will make you a successful person.", author: "Abdul kalam" },
  { text: "Ever onward to victory!", author: "Che' Guevara" },
  { text: "All of us do not have equal talent. But, all of us have an equal opportunity to develop our talents.", author: "Abdul kalam" }
];

const quoteEL = document.getElementById("quote");
const authorEL = document.getElementById("author");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
 const randomQuotes = Math.floor(Math.random()*10) ;
 quoteEL.textContent =quotes[randomQuotes].text;
 authorEL.textContent = quotes[randomQuotes].author;
});
