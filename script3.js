


  // Wait for the page to load
  document.addEventListener('DOMContentLoaded', function() {
    // Function to start playing the audio after 5 seconds
    function playAudio() {
      var audio = document.getElementById('myAudio');
      audio.play(); // Start playing the audio
    }

    // Call the playAudio function after 5 seconds
    setTimeout(playAudio, 3000); // 5000 milliseconds = 5 seconds
  });






(function() {
    function $(id) {
      return document.getElementById(id);
    }
  
    var card = $('card'),
        openB = $('open'),
        closeB = $('close'),
        timer = null;
    console.log('wat', card);

   
  


    openB.addEventListener('click', function () {
      card.setAttribute('class', 'open-half');
      if (timer) clearTimeout(timer);
      timer = setTimeout(function () {
        card.setAttribute('class', 'open-fully');
        timer = null;
      }, 1000);

      
  script = `
  .....
Hey Man!
Another year older? 
Well, I could think of 
worse things to be…
like dead! 
Happy Birthday 
to my friend

but the main thing is 
you were born
nice, Good Job!
..........
            Hooria
`;



let counter = 0;

let intervalID = setInterval(() => {
counter++;
style.textContent = script.substring(0, counter);
style.scrollTop = style.scrollHeight;
if(counter > script.length) {
clearInterval(intervalID);
}
}, 90);



    });
  




    closeB.addEventListener('click', function () {
      card.setAttribute('class', 'close-half');
      if (timer) clearTimerout(timer);
      timer = setTimeout(function () {
        card.setAttribute('class', '');
        timer = null;
      }, 1000);
    });
  
  }());
  
  
  const style = document.querySelector(".text pre style");
  const card = document.querySelector(".front face back face");