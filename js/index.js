var qoutes_array = [
  {
    qoute: '"Be yourself; everyone else is already taken."',
    author: '--Oscar Wilde'
  },
  {
    qoute: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me.",
    author: '--Marilyn Monroe"'
  },
  {
    qoute: '"So many books, so little time."',
    author: '--Frank Zappa'
  },
  {
    qoute: '"Two things are infinite: the universe and human stupidity; and Im not sure about the universe."',
    author: '--Albert Einstein'
  },
  {
    qoute: '"A room without books is like a body without a soul.Be yourself; everyone else is already taken."',
    author: '--Marcus Tullius Cicero'
  },
  {
    qoute: '"You only live once, but if you do it right, once is enough."',
    author: '--Mae West'
  },
  {
    qoute: '"Be the change that you wish to see in the world."',
    author: '--Mahatma Gandhi'
  },
  {
    qoute: '"In three words I can sum up everything Ive learned about life: it goes on."',
    author: '--Robert Frost'
  },
  {
    qoute: '"If you tell the truth, you don\'t have to remember anything."',
    author: '--Mark Twain'
  },
  {
    qoute: '"To live is the rarest thing in the world. Most people exist, that is all."',
    author: '--Oscar Wilde'
  },

]


function ChangeQoute() {
  var i = Math.floor(Math.random() * 10);
  document.getElementById('demo').innerHTML = qoutes_array[i].qoute;
  document.getElementById('auther').innerHTML = qoutes_array[i].author;
  i++
}


