

const audio = document.getElementById('myAudio');
const playPauseButton = document.getElementById('playPauseButton');

setTimeout(() => {
  document.querySelector('.name').style.display = 'none';
}, 41000); // 38 seconds delay

// Get the counter element
const counterElement = document.getElementById('counter');
// Get the button element
const nextPageBtn = document.getElementById('nextPageBtn');

// Set the initial time in seconds (2 minutes = 120 seconds)
let time = 120;

// Update the counter every second
const countdown = setInterval(() => {
  // Convert time to minutes and seconds
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  // Display the time in MM:SS format
  counterElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  // Decrease time by 1 second
  time--;

  // If time reaches 0, stop the countdown and enable the button
  if (time < 0) {
    clearInterval(countdown);
    counterElement.textContent = 'Time Up!';
    nextPageBtn.removeAttribute('disabled'); // Enable the button
  }
}, 1000);

// Disable the button initially
nextPageBtn.setAttribute('disabled', true);

// Add an event listener to the button to navigate to the next page (replace 'nextPage.html' with the actual URL of the next page)
nextPageBtn.addEventListener('click', () => {
  window.location.href = 'cred.html';
});



function togglePlayPause() {
  if (audio.paused) {
    audio.play();
    playPauseButton.textContent = 'Pause';
  } else {
    audio.pause();
    playPauseButton.textContent = 'Play';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const element = document.querySelector('.name');
  setTimeout(() => {
      element.style.visibility = 'hidden';
  }, 13000); // Hide element after 5 seconds (8s delay + 30s animation)
});


window.onload = function() {
  // Check if the loading page has signaled completion
  if (localStorage.getItem('loadingComplete')) {
    document.getElementById('main-content').style.display = 'block';
  }
};


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