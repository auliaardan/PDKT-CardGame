const questions = [
  "Sebutkan satu kegiatan favoritmu dengan aku?",
  "Apa salah satu rintangan yang pernah kamu hadapi, dan bagaimana kamu menanganinya?",
  "Sebutkan salah satu hal yang sangat kamu khawatirkan, apakah aku bisa membantunya?",
  "Apakah ada guru yang mengubah hidupmu?",
  "Apa prioritas utamamu untuk sisa tahun ini?",
  "Kapan terakhir kali aku membuat kamu merasa hebat tentang diri sendiri dan bagaimana aku bisa melakukannya lebih sering?",
  "Apa yang paling kamu nantikan saat menjadi tua?",
  "Apa sesuatu yang kamu berusaha sangat keras menyukai tetapi tidak bisa?",
  "Apa hal yang paling kamu tidak sukai dari dirimu sendiri, apakah ingin mengubahnya?",
  "Sebutkan 3 hal yang kamu senang lakukan denganku?",
  "Apa penyesalan terbesar kamu, apakah kamu ingin mengubahnya?",
  "Apa yang kebanyakan orang melebih-lebihkan atau meremehkan tentang kamu?",
  "Apa pujian terbaik yang pernah kamu dapatkan?",
  "Apa ada hal yang kamu pernah lakukan, namun tidak akan pernah melakukanya lagi?",
  "Sebutkan kebodohan/kekonyolan terkenang kamu saat SD/SMP/SMA",
  "Apa cita-citamu 10 tahun yang lalu, apakah sudah tercapai?",
  "Apa saja yang membuat kamu gugup?",
  "Apakah kamu percaya bahwa setiap orang pantas mendapatkan pengampunan?",
  "Apa saja hal yang membuat kamu bosen?",
  "Ceritakan salah satu fantasi yang kamu pernah pikirkan/harapkan"
]

const cardHandler = {
    displayCard1: '',
    displayCard2: '',
    gameState: 0, //0 = Not yet choosen card, 1 = chose card
    hasChoosen: false,
    gameStarted: false,
};

const cards = document.querySelectorAll('.card');
[...cards].forEach((card)=>{
  card.addEventListener( 'click', function(event) {
    cardChosen();
    card.classList.toggle('is-flipped');
  });
});

const cardHolder = document.querySelector('.card-holder');
const btn_startGame = document.querySelector('#startButton');
const txt_countDown = document.querySelector('.countdown');

function startGame () {
  let counter = 3;
  btn_startGame.classList.toggle('turn-off');
  const startInterval = setInterval(() =>{
    if (counter == 0){
      txt_countDown.innerHTML = "Let's play, choose your card!";
      setTimeout(() =>{
        txt_countDown.innerHTML = "";
      }, 1000);
      setTimeout(() =>{
        cardHolder.classList.add('turn-on');
        loadQuestions();
      }, 3000);
      clearInterval(startInterval);
    } else{
      txt_countDown.innerHTML = counter;
      counter--;
    }
  }, 1000);
}

const cardBack1 = document.querySelector('#card_back_1');
const cardBack2 = document.querySelector('#card_back_2');
function loadQuestions (){
  if(cardHandler.gameStarted == true)
    return;
  cardHandler.gameStarted = true;
  
  let indQuestion1 = random(questions);
  cardHandler.displayCard1 = questions[indQuestion1];  
  cardBack1.innerHTML = cardHandler.displayCard1;
  questions.pop(indQuestion1);

  if (questions.length == 1){
    return
  }
  let indQuestion2 = random(questions);
  cardHandler.displayCard2 = questions[indQuestion2];  
  cardBack2.innerHTML = cardHandler.displayCard2;
  questions.pop(indQuestion2);
}

function cardChosen (){
  if ( cardHandler.hasChoosen == true)
    return;
  cardHandler.hasChoosen == true;

  if (questions.length >= 1){
    loadQuestions;
    cardHandler.hasChoosen == false;
  } else {
    return;
  }
}

function random(cardArr){
  let number = Math.floor(Math.random() * cardArr.length)
  return number;
}

btn_startGame.addEventListener('click', startGame);