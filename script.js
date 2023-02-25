/*$('#mainButton').click(function(){
	$("#main-page").fadeOut(1500);
  setTimeout(function() {
    var words = ["asd", "sad", "weqwefrwe", "asdf", "fasd", "wre", "sdf", "asfdn"];
    var i = 0;
    var interval = setInterval(function() {
      $('#display').text(words[i]);
      i++;
      if (i == words.length) {
        clearInterval(interval);
        setTimeout(function() {
			$('#display').text("");
          $('#second-sentence').fadeIn(1000).delay(2000).fadeOut(1000, function() {
            $('#centered-div').fadeIn(1000);
            $('audio').get(0).play();
			$("body").css("background-image", "url('wishB.jpg')");
            setTimeout(function() {
			$("#main-page").fadeIn(1500);
              $('#centered-div').fadeOut(1000);
			  
            }, 10000);
          });
        }, 1000);
      }
    }, 1000);
  }, 2000);
});
*/

$('#mainButton').click(function(){
	console.log("in");
  $("#main-page").fadeOut(1500);
  console.log("out");
  setTimeout(function() {
    var words = ["to", "my", "favourite", "friend", "who's", "always", "busy"];
    var i = 0;
    var interval = setInterval(function() {
      $('#display').text(words[i]);
      i++;
      if (i == words.length) {
        clearInterval(interval);
        setTimeout(function() {
          $('#display').text("");
          $('#second-sentence').fadeIn(1000).delay(2000).fadeOut(1000, function() {
            $('#centered-div').fadeIn(1000);
            $('audio').get(0).play();
			if (window.matchMedia('(max-width: 576px)').matches) {
				$("body").css("background-image", "url('pic.jpeg')");
			} else {
				$("body").css("background-image", "url('wishB.jpg')");
			}
            
            setTimeout(function() {
              $('#centered-div').fadeOut(1000, function() {
                $("#main-page").fadeIn(1500);
				$("body").css("background-image", "none");
				$("body").css("background-color", "black");
              });
            }, 10000);
          });
        }, 1000);
      }
    }, 1000);
  }, 2000);
});
