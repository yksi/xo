function check (elem) {
  if(!sets && elem.innerHTML === '') {
    if(queue) {
      elem.innerHTML = 'x';
      queue = false;
    } else {
      elem.innerHTML = 'o';
      queue = true;
    }
  }

  if(return_winner() !== -1 && !sets) {
    sets = true;
    document.getElementById('game_finished').innerHTML = 'Game finished';
    show_modal('Congratulations', 'Wins Player with ' + return_winner() + '. Congratulations');
  }
}

function gO(id) {
  return document.getElementById(id).innerHTML;
}

function erase() {
  for (var i = 0; i < 9; i++) {
    document.getElementById(i).innerHTML = '';
    document.getElementById(i).style.background = 'white';
    sets = false;
    document.getElementById('game_finished').innerHTML = '';
  }
}

function return_winner() {
  if(getWinner(gO(0), gO(1), gO(2)) !== -1) {
      document.getElementById(0).style.background = 'green';
      document.getElementById(1).style.background = 'green';
      document.getElementById(2).style.background = 'green';
      return getWinner(gO(0), gO(1), gO(2));
    }
  if(getWinner(gO(3), gO(4), gO(5)) !== -1) {
    document.getElementById(3).style.background = 'green';
    document.getElementById(4).style.background = 'green';
    document.getElementById(5).style.background = 'green';
    return getWinner(gO(3), gO(4), gO(5));
  }
  if(getWinner(gO(6), gO(7), gO(8)) !== -1) {
    document.getElementById(6).style.background = 'green';
    document.getElementById(7).style.background = 'green';
    document.getElementById(8).style.background = 'green';
    return getWinner(gO(6), gO(7), gO(8));
  }
  if(getWinner(gO(1), gO(4), gO(7)) !== -1) {
    document.getElementById(1).style.background = 'green';
    document.getElementById(4).style.background = 'green';
    document.getElementById(7).style.background = 'green';
    return getWinner(gO(1), gO(4), gO(7));
  }
  if(getWinner(gO(2), gO(5), gO(8)) !== -1) {
    document.getElementById(2).style.background = 'green';
    document.getElementById(5).style.background = 'green';
    document.getElementById(8).style.background = 'green';
    return getWinner(gO(2), gO(5), gO(8));
  }
  if(getWinner(gO(0), gO(4), gO(8)) !== -1) {
    document.getElementById(0).style.background = 'green';
    document.getElementById(4).style.background = 'green';
    document.getElementById(8).style.background = 'green';
    return getWinner(gO(0), gO(4), gO(8));
  }
  if(getWinner(gO(2), gO(4), gO(6)) !== -1) {
    document.getElementById(2).style.background = 'green';
    document.getElementById(4).style.background = 'green';
    document.getElementById(6).style.background = 'green';
    return getWinner(gO(2), gO(4), gO(6));
  }
  if(getWinner(gO(0), gO(3), gO(6)) !== -1) {
    document.getElementById(0).style.background = 'green';
    document.getElementById(3).style.background = 'green';
    document.getElementById(6).style.background = 'green';
    return getWinner(gO(0), gO(3), gO(6));
  }
  else return -1;
}

function getWinner(f, s, t) {
  if(f === s && s === t && f !=='') {
    return f;
  }

  return -1;
}