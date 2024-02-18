const quotes = [
  {
    quote: "Don't dwell on the past",
    author: "과거에 연연하지 말아라",
  },
  {
    quote: "Love your self",
    author: "자기 자신을 사랑하라",
  },
  {
    quote: "No pain,No Gain",
    author: "고통 없이 얻는 것은 없다",
  },
  {
    quote: "Don't dream, Be it",
    author: "꿈만 꾸지 말고 되어라",
  },
  {
    quote:
      "Life is like riding a bicycle. To keep your balance you must keep moving.",
    author: "인생은 자전거를 타는 것과 같다.균형을 잡으려면 움직여야 한다",
  },
  {
    quote: "Success isn't permanent, and failure isn't fatal.",
    author: "성공은 영원하지 않고 실패는 치명적이지 않다",
  },
  {
    quote: "A discovery is said to be an accident meeting a prepared mind.",
    author: "발견은 준비된 사람이 맞딱뜨린 우연이다",
  },
  {
    quote:
      "The revolution is not an apple that falls when it is ripe. You have to make it fall.",
    author:
      "혁명은 다 익어 저절로 떨어지는 사과가 아니다. 떨어뜨려야 하는 것이다.",
  },
  {
    quote:
      "Respect your efforts, respect yourself. Self-respect leads to self-discipline. When you have both firmly under your belt, that's real power.",
    author:
      "당신의 노력을 존중하라. 당신 자신을 존중하라. 자존감은 자제력을 낳는다. 이 둘을 모두 겸비하면, 진정한 힘을 갖게 된다",
  },
  {
    quote:
      "A man is but the product of his thoughts. What he thinks, he becomes.",
    author: "인간은 오직 사고(思考)의 산물일 뿐이다. 생각하는 대로 되는 법.",
  },
];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerHTML = todaysQuote.quote;
author.innerHTML = todaysQuote.author;

// 스타일주기
quote.style.font = "30px bolder ";
author.style.font = "20px bold gray";
