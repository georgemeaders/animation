$( "div" ).hover(
  function() {
    $( this ).after( $( "<span id='textadd'> SPOOKED YA'!!!! </span>" ) );
  }, function() {
    $( "#textadd" ).remove();
  }
);


$('button').on('click', function(e) {
  $('button').remove();
  $('p').addClass('raceresults');
  playGame();
});



var playGame = function() {
  var Animal = function(n, s, f) {
    this.name = n;
    this.speed = s;
    this.focus = f;
    this.position = 0;
    this.report = function() {
      return this.name + " is at " + this.position;
    };
    this.run = function() {
      if(this.focus > (Math.random() * 10)) {
      this.position += this.speed;  
      }
    };
  }

  var human = new Animal("Spaghett", 2, 8),
      being = new Animal("Flying Spaghetti Monster", 8, 3);

  var distance = 25;

  var dayOfWeek = new Date();
  console.log(dayOfWeek.getDay());

  if (dayOfWeek.getDay() == 4) {
    alert ("Flying Spaghetti Monster uses Thursday as his day of rest...you should too!");
  }

  else {

    while(human.position < distance && being.position < distance) {
      human.run(); 
      being.run(); 
      alert ((human.report()) + ', and ' + (being.report()));
    }


    if (human.position > 25) {
      document.getElementById("raceresults").innerHTML = ('Spaghett WINS!!!');
    }
    else {document.getElementById("raceresults").innerHTML = ('Flying Spaghetti Monster WINS!!!');
    }
  }
  
}

