function show_modal (title, content) {
  document.getElementsByClassName('overlay')[0].style.display = 'block';
  document.getElementsByClassName('modal-header')[0].innerHTML = title + '<button class="__close" onclick="close_modal()">x</button>';
  document.getElementsByClassName('modal-body')[0].innerHTML = content;
  document.getElementsByClassName('modal')[0].style.display = 'block';
}

function close_modal () {
  document.getElementsByClassName('overlay')[0].style.display = 'none';
  document.getElementsByClassName('modal')[0].style.display = 'none';
  document.getElementsByClassName('modal-header')[0].innerHTML = 'Info <button onclick="close_modal()" class="__close">x</button>';
  document.getElementsByClassName('modal-body')[0].innerHTML = 'Content'
}