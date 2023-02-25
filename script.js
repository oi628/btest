
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
			if (window.innerWidth<=576) {
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
