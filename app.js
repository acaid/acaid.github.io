// var count = document.querySelectorAll(".row > .cascade").length;
// var width = Math.sqrt(count);
// var elems = document.getElementsByClassName('cascade');

// Setting variables to be global... figure out how to do this better
var squareMe = 4;
console.log("hey, square " +squareMe);
var kinder = [];
var fullWidth = 0; //get body width
var subWidth = 0; //get element width
var subMargin = 0;

// var elems = document.querySelectorAll(".row > .cascade");
// var count = elems.length;
// var width = Math.sqrt(count);


// SET COLORS!
function setColor(alpha){
  var rrr = Math.floor(Math.random() * 256);
  var ggg = Math.floor(Math.random() * 256);
  var bbb = Math.floor(Math.random() * 256);
  if (alpha){
      var alf = Math.floor(Math.random() * 100);
      console.log(alf);
      if (alf < 100){
        alf = (alf * .01).toFixed(2);
      } else {
        afl = 1;
      }
    return "rgba(" + rrr + "," + ggg + "," + bbb + "," + alf + ")";
  }
  return "rgb(" + rrr + "," + ggg + "," + bbb + ")";
};

$(document).ready(function() {



    $("#build").click(function(){
      squareMe = $("select").val();
      console.log("hey, square " +squareMe);
      if (squareMe == null){
        return;
      }
      else {
        console.log("hey, square " +squareMe);
        kinder = Array.prototype.slice.call(document.getElementsByClassName('cascade'));
        kinder = $('.cascade').length;
        fullWidth = $('body').width() / parseFloat($('body').css("font-size")); //get body width
        subWidth = (fullWidth/squareMe * .8); //get element width
        subMargin = (fullWidth/squareMe * .1);
        console.log("this is subWidth "+subWidth);
        console.log("this is subMargin "+subMargin);
        console.log((Math.sqrt(kinder)));

        if ((Math.sqrt(kinder.length)) == squareMe){
          console.log("Oh good, it's the same size...Boring!");
        }
        else {
            $('div').remove('.cascade');
            console.log("Yay! Break stuff!");
            for (var c = 0; c < (squareMe * squareMe); c++){ //haha c++ ...wubwub
              $(".row").append('<div class="cascade"></div>');
              $(".cascade").css('width', subWidth + "em");
              $(".cascade").css('height', subWidth + "em" );
              $(".cascade").css('margin', subMargin + "em");
              $('.cascade').css('background-color', setColor() ); // SET COLOR

              console.log("Make stuff!");

              elems = document.querySelectorAll(".row > .cascade");
              count = elems.length;
              width = Math.sqrt(count);
            }
        }
      }
  });

  //Build menu

  (function(){
    for (var m = 4; m <= 50; m++){
      $('select').append('<option value="'+ m +'">'+ m +'</option>');
    }
  })();

});


//FLIP BUTTON
function runner(){
  if (document.getElementById('btn').className === "ran"){
      document.getElementById('btn').className = " ";
      var children = Array.prototype.slice.call(document.getElementsByClassName('flip')); // create new array, instead of a reference
      for (var a = 0; a < children.length; a++ ){
        children[a].className = "cascade";
        $('.cascade').css('background-color', setColor() );
        $('.cascade').css('border-radius', 0 );
      }
  } else {
    document.getElementById('btn').className ="ran";
    doer();
  }
};

// FLIPPING!
function doer(){

  // //SET BORDER RADIUS TO CORRECT SIZE
  // $('flip').css('border-radius', (subWidth / 2) +"em"); //sets border-radius to half of width for to make circles


  var cascade = function(width){
    var list = [];

    for (var s = 0; s < width; s++) {
      // add new sublist
      list.push([]);

      // loop through all vertials, including s and corner
      for (var v = 0; v <= s; v++){
        list[s].push((v*width)+(s+1)); // add verticals to sublist
      }

      // loop through horizontals, excluding corner
      for (var w = 1; w <= s; w++){
        list[s].push((w*1)+(s*width)); // add horizontals to sublist
      }

    list[s].sort(function(a,b){return a-b});

  } // end for s loop
    return list;
  }; // end cascade

  var order = cascade(width);

  var flip = function(order){
    var i = 0;
    function looper() {
       setTimeout(function() {
          for (var j = 0; j < order[i].length; j++){
            var littleArray = order[i];
            var numero = (littleArray[j] - 1);
            elems[numero].className += " flip";
            var radWidth = $(elems[numero]).width()/parseFloat($('body').css("font-size"))/2;
            console.log ("this is radWidth "+ radWidth);
            //SET background-color
            $(elems[numero]).css('background-color', setColor() );
            $(elems[numero]).css('border-radius', radWidth +"em");
          }
          i++;
          if (i < order.length){
              looper();
          }
       }, (1000/squareMe)) //200 delay
    };

    looper();
    return;
  }; // end flip()

  flip(order);
  return;
}; // end doer()
