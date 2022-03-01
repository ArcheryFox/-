let
e1 = document.getElementById('e1'),
e2 = document.getElementById('e2'),
e3 = document.getElementById('e3'),
epB = document.getElementById('ep'),
apB = document.getElementById('enemy.ap'),
mpB = document.getElementById('mp'),
player = {
mp : 50, // Mind Points - Рассудок
ep : 100, // Emotion Points - Эмоции
weak : false,
items : 3, // Предметы
},
enemy = {
	ap : Math.floor(Math.random() * 50) + 20, //Аура
},
yourTurn = true,
itB = document.getElementById('itemN');
itB.innerHTML = player.items;
epB.innerHTML = player.ep;
apB.innerHTML = enemy.ap;
mpB.innerHTML = player.mp;
console.log(enemy.ap);




function ea1() {
  if (player.mp >= 1) {
    if (!player.weak) {

      var apD = Math.floor(Math.random() * 10);
      // aura points damage/differense
      enemy.ap -= apD;
      player.ep -= 5;
      apB.innerHTML = enemy.ap;
      epB.innerHTML = player.ep;
      console.log(enemy.ap);
      console.log("Поразительная улыбка!");
      console.log('Вы сносите ' + apD + ' ауры');
      if (player.ep <= 25) {
        epB.innerHTML = player.ep + ' немного устал'; // пробел для комфортного вывода
        if (player.ep <= 0) {
          player.ep = 0;
          epB.innerHTML = player.ep + ' Очень устал';
          player.weak = true;
        }
      }
      if (enemy.ap <= 0) {
        apB.innerHTML = 0;
        console.log('Ты одолел кошмар!');
        document.body.innerHTML += ('<p>Ты одолел кошмар!</p>');
      }
    }
    if (player.weak) {
      epB.innerHTML += ' Съешь шоколадку!!!';
      if (player.ep >= 1) {
        player.weak = false;
        
      }
    }
  }
  if (player.mp <= 0) {
    player.mp = 0;
    mpB.innerHTML = player.mp + '<br> Dead...';
     
  }
}


function ea2() {
  if (player.mp >= 1) {
    if (!player.weak) {
      var apD = Math.floor(Math.random() * 15); // aura points damage/differense
      enemy.ap -= apD;
      player.ep -= 10;
      apB.innerHTML = enemy.ap;
      epB.innerHTML = player.ep;
      console.log(enemy.ap);
      console.log("*Пиу Пам Пиу-Па па ра РА!* Это кононада из нот🎶");
      console.log('Вы сносите ' + apD + ' ауры');
      yourTurn = false;
      if (ep <= 25) {
        epB.innerHTML = player.ep + ' немного устал'; // пробел для комфортного вывода
        if (ep <= 0) {
          ep = 0;
          epB.innerHTML = player.ep + ' Очень устал';
          player.weak = true;
        }
      }
      if (enemy.ap <= 0) {
        apB.innerHTML = 0;
        console.log('Ты одолел кошмар!');
        document.body.innerHTML += ('<p>Ты одолел кошмар!</p>');
      }
    }
    if (weak) {
      epB.innerHTML += ' Съешь конфету!';
      if (player.ep >= 1) {
        player.weak = false;
        return;
      }
    }
  }
  if (player.mp <= 0) {
    player.mp = 0;
    mpB.innerHTML = player.mp + '<br> Dead...';
     
  }
}

function ea3() {
  if (player.mp >= 1) {
    if (!player.weak) {
      var apD = Math.floor(Math.random() * 20) + 5; // aura points damage/differense
      enemy.ap -= apD;
      player.ep -= 15;
      apB.innerHTML = enemy.ap;
      epB.innerHTML = player.ep;
      console.log(enemy.ap);
      console.log("*Пиу Пам Пиу-Па па ра РА!* Это кононада из нот🎶");
      console.log('Вы сносите ' + apD + ' ауры');
      if (player.ep <= 25) {
        epB.innerHTML = player.ep + ' немного устал'; // пробел для комфортного вывода
        if (player.ep <= 0) {
          player.ep = 0;
          epB.innerHTML = player.ep + ' Очень устал';
          player.weak = true;
        }
      }
      if (enemy.ap <= 0) {
        apB.innerHTML = 0;
        console.log('Ты одолел кошмар!');
        document.body.innerHTML += ('<p>Ты одолел кошмар!</p>');
      }
    }
    if (player.weak) {
      epB.innerHTML += ' Съешь коробку конфет';
      if (ep >= 1) {
        player.weak = false;
        return;
      }
    }
  }
  if (player.mp <= 0) {
    player.mp = 0;
    mpB.innerHTML = player.mp + '<br> Dead...';
     
  }
}


setInterval(function mpUp() { //	 Healing
  if (player.mp < 50 && player.mp > 0) {
    player.mp++;
    mpB.innerHTML = player.mp;
  }
}, 100000000);

function item() {
  if (player.mp >= 1) {
    if (player.items > 0) {
      player.ep += 10;
      epB.innerHTML = player.ep;
      player.items -= 1;
      itB.innerHTML = player.items;
      console.log('+10 ep')
      player.weak = false;
    }
    if (player.mp <= 0) {
      player.mp = 0;
      mpB.innerHTML = player.mp + '<br> Dead...';
       
    }
    if (player.items <= 0) {
      player.items = 0;
      epB.innerHTML = player.ep + '<br> сладости закончились...';
    }
  }
}

///////////

e1.addEventListener('click', function atk() {
  if (player.mp >= 1 && player.ep > 0) {
    let mpD = Math.floor(Math.random() * 10);
    player.mp -= mpD;
    mpB.innerHTML = player.mp;
    console.log('Ты изрисован фломастером. Вам нанесли ' + mpD);
    yourTurn = true;
  }
  if (player.mp <= 0) {
    player.mp = 0;
    mpB.innerHTML = player.mp + '<br> Dead...';
     
  }
});

e2.addEventListener('click', function atk() {
  if (player.mp >= 1 && player.ep > 0) {
    let mpD = Math.floor(Math.random() * 10);
    player.mp -= mpD;
    mpB.innerHTML = player.mp;
    console.log('Ты изрисован фломастером. Вам нанесли ' + mpD);
    yourTurn = true;
  }
  if (player.mp <= 0) {
    player.mp = 0;
    mpB.innerHTML = player.mp + '<br> Dead...';
     
  }
});

e3.addEventListener('click', function atk() {
  if (player.mp >= 1 && player.ep > 0) {
    let mpD = Math.floor(Math.random() * 10);
    player.mp -= mpD;
    mpB.innerHTML = player.mp;
    console.log('Ты изрисован фломастером. Вам нанесли ' + mpD);
    yourTurn = true;
  }
});

itB.addEventListener('click', function atk() {
  if (player.mp >= 1 && player.ep >= 0 && player.items > 0) {
    let mpD = Math.floor(Math.random() * 20);
    player.mp -= mpD;
    mpB.innerHTML = player.mp;
    console.log('Ты изрисован фломастером. Вам нанесли ' + mpD);
    yourTurn = true;
  }

  if (player.mp <= 0) {
    player.mp = 0;
    mpB.innerHTML = player.mp + '<br> Dead...';
     
  }
});
