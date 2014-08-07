<!DOCTYPE html>
<html>
<head>
  <title>XO game</title>
  <link rel="stylesheet" type="text/css" href="stylesheets.css">
  <script type="text/javascript">
    var sets = false;
    var queue = true;

    function execute () {
      document.getElementsByClassName('overlay')[0].style.display = 'none';
      document.getElementsByClassName('modal')[0].style.display = 'none';
      for (var i = 0; i < 9; i++) {
        var x = document.getElementById(i);
        // x.setAttribute('style', 'display:none');
      };
    }

  </script>
  <script type="text/javascript" src="game.js"></script>
  <script type="text/javascript" src="message.js"></script>
</head>
<body onload="execute()">
  <div class="header">
    <button onclick="erase()">New Game</button>
  </div>
  <div class="warplace">
    <table>
      <tr>
        <?php
        for ($i=0; $i < 3; $i++) {
          $_GET['id'] = $i;
          include 'field.php';
        }
      ?>
      </tr>
      <tr>
        <?php
        for ($i=3; $i < 6; $i++) {
          $_GET['id'] = $i;
          include 'field.php';
        }
      ?>
      </tr>
      <tr>
        <?php
        for ($i=6; $i < 9; $i++) {
          $_GET['id'] = $i;
          include 'field.php';
        }
      ?>
      </tr>
    </table>
    <h1 id="game_finished">Game finished</h1>
  </div>
  <?php include 'message.php'; ?>
</body>
</html>