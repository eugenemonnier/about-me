'use strict';

// global variable
var drunk = false;
var randomNum = 50; //set randomNum to 50 for testing purposes
var i = 0;
var soSmart = 0;
var iLikeBeer = ['sour', 'stout', 'barleywine', 'brown ale', 'porter', 'gose', 'scotch ale'];

//make Read My Mind & Quiz links variables
var mindGameLink = document.getElementById('mind');
var quizLink = document.getElementById('quiz'); 


// Greet the user
var greeting = 'Hello, friend.'
alert(greeting);

// Ask user their name and store it to the variable username
var username = prompt('What is your name?');
console.log('The user\'s name is ' + username);

// check user username for particular answers and return custom responses
if (username.toLowerCase() === 'mr. robot' || username.toLowerCase() === 'mr robot') {
    alert('What are you doing here?');
    } else if (username.toLowerCase() === 'elliot') {
        alert('Bonsoir, ' + username + '.');
    } else if (username.toLowerCase() === 'sam sepiol') {
        alert('I should look you up.');
    } else if (username.toLowerCase() === 'lillian') {
        alert('Hi ' + username + '! Please be kind in your grading!');
    } else if (username.toLowerCase() === 'michelle') {
        alert('Everyone look busy!');
    } else if (username.toLowerCase() === 'eugene') {
        alert('Careful with that ax, ' + username);
    } else {
    alert('Welcome to my site, ' + username + '.');
}

alert('Please answer either yes or no to the following questions.')

// Ask user how they feel and store it to the variable drFeelGood
var drFeelGood = prompt('Are you feeling good today?');
console.log('The user\'s response to whether they are feeling good today was: ' + drFeelGood);

// Check drFeelGood variable for specific reponse
if (drFeelGood.toLowerCase() === 'y' || drFeelGood.toLowerCase() === 'yes') {
    alert('Glad to hear it, ' + username);
} else if (drFeelGood.toLowerCase() === 'n' || drFeelGood.toLowerCase() === 'no') {
    alert('I\'m sorry ' + username + '. I hope you feel better soon!');
} else {
  alert('You might want to go see a doctor, ' + username + '. You seem to be delirious')
}

// Ask user if they have any money on them and store it to variable gotPaid
var gotPaid = prompt('While I\'ve got you here. Do you have any cash on you?');
console.log('The user\'s response to whether they have cash on them was: ' + gotPaid);

// Check gotPaid variable for specific reponse
if (gotPaid.toLowerCase() === 'y' || gotPaid.toLowerCase() === 'yes') {
  var socialism = prompt('I\m running a bit light on cash at the moment. Could I borrow $20?');
  if (socialism.toLowerCase() === 'y' || socialism.toLowerCase() === 'yes') {
    alert('Thanks ' + username + '! You\'re the best!');
  } else {
    alert('Well aren\'t you stingy.');
  }
} else if (gotPaid.toLowerCase() === 'n' || gotPaid.toLowerCase() === 'no') {
  alert('Pockets feelin kind of empty.');
} else {
  alert('Seriously let\'s get you to see a doctor, right away.');
}
// Ask user if it is time to get a drink and store response to variable beerO_Clock.
var beerO_Clock = prompt('Well, it has certainly been a long day. Time to get a drink, ' + username + '?');
console.log('The user\'s response to getting a drink was: ' + beerO_Clock);

// Check value of beerO_Clock and provide response based on that value
if ((beerO_Clock.toLowerCase() === 'y' || beerO_Clock.toLowerCase() === 'yes') && (gotPaid.toLowerCase() === 'y' || gotPaid.toLowerCase() === 'yes')) {
  alert('Sounds good to me! Let\'s hit up Brouwer\'s Cafe. You\'re buying!');
} else if ((beerO_Clock.toLowerCase() === 'y' || beerO_Clock.toLowerCase() === 'yes') && (gotPaid.toLowerCase() !== 'y' || gotPaid.toLowerCase() !== 'yes')) {
  alert('Great! I know a great place called Brouwer\'s Cafe that is nearby.');
} else if ((beerO_Clock.toLowerCase() === 'n') || beerO_Clock.toLowerCase() === 'no') {
  alert('Every party needs a pooper, that\'s why I\'m inviting you.  Party pooper, party pooper.');
} else {
  alert('Actually, I think you already have had enough to drink.');
  drunk = true;
}

// Ask user if they drink beer and store response to variable areYouCool.
var areYouCool = prompt('Oh, hold up. You drink beer, right?');
console.log('The user\'s response to whether they have cash on them was: ' + areYouCool);

// Check value of areYouCool and provide response based on that value
if ((beerO_Clock.toLowerCase() === 'y' || beerO_Clock.toLowerCase() === 'yes') && (gotPaid.toLowerCase() === 'y' || gotPaid.toLowerCase() === 'yes') 
    && (areYouCool.toLowerCase() === 'y' || areYouCool.toLowerCase() === 'yes')) {
      alert(username + ', I think this is the beginning of a beautiful friendship.');
    } else if ((beerO_Clock.toLowerCase() === 'y' || beerO_Clock.toLowerCase() === 'yes') && (gotPaid.toLowerCase() !== 'y' || gotPaid.toLowerCase() !== 'yes') 
    && (areYouCool.toLowerCase() === 'y' || areYouCool.toLowerCase() === 'yes')) {
      alert('You know, ' + username + '. You are alright in my book.');
    } else if ((beerO_Clock.toLowerCase() === 'n' || beerO_Clock.toLowerCase() === 'no') && (areYouCool.toLowerCase() === 'n' || areYouCool.toLowerCase() === 'no')) {
      alert('Well that explains it... Bye ' + username + '!');
    } else if ((beerO_Clock.toLowerCase() === 'y' || beerO_Clock.toLowerCase() === 'yes') && (areYouCool.toLowerCase() === 'n' || areYouCool.toLowerCase() === 'no')) {
      alert('Oh... You know, I just remember I\'ve got this thing I\'ve got to do right now... Bye ' + username + '!');
    } else if (drunk === true && (areYouCool.toLowerCase() === 'n' || areYouCool.toLowerCase() === 'no')) {
      alert('Uh huh. Sure you don\'t, ' + username + '.');
    } else if ((beerO_Clock.toLowerCase() === 'n' || beerO_Clock.toLowerCase() === 'no') && (areYouCool.toLowerCase() === 'y' || areYouCool.toLowerCase() === 'yes')) {
      alert('I just can\'t figure you out, ' + username + '.');
    } else {
      alert('Ok, ' + username +'. You\'re going to be alright. Just sit right down here and I will call 911');
    }

// add event listener to mindGameLink so when it is clicked the function mindGame runs
mindGameLink.addEventListener('click', mindGame); 

// mindGame function with random number generator
function mindGame() {
  randomNum = Math.floor(Math.random() * 10);
  var guess = prompt('Guess a number between 1 & 10. You have 4 guesses.');
  if (guess == randomNum) {
    alert('Good guess ' + username + '! Have you been tested for psychic abilities?');
    console.log(guess + ' ' + randomNum + ' ' + i + 'psychic');
  } else if (guess != randomNum) {
    for(i = 1; i <= 4; i++) {
      console.log(guess + ' ' + randomNum + ' ' + i + 'base');
      if ((guess == randomNum) && (i < 4)) {
        console.log(guess + ' ' + randomNum + ' ' + i + 'winner');
        alert('Ding! Ding! Ding! We have a winner!')
        break;
      } else if ((guess > randomNum)  && (i < 4)) {
        console.log(guess + ' ' + randomNum + ' ' + i + 'lower');
        guess = prompt('That\'s not it. The number I am looking for is lower. You are on attempt ' + (i + 1) + '.');
      } else if ((guess < randomNum)  && (i < 4)) {
        console.log(guess + ' ' + randomNum + ' ' + i + ' higher');
        guess = prompt('That\'s not it. The number I am looking for is higher. You are on attempt ' + (i + 1) + '.');
      } else if ((guess == randomNum) && (i >= 4)) {
        console.log(guess + ' ' + randomNum + ' ' + i + ' nick');
        alert('You got it in just the nick of time!');
      } else if ((guess != randomNum) && (i >= 4)) {
        console.log(guess + ' ' + randomNum + ' ' + i + ' fortress');
        alert('Valiant effort but you were unable to penetrate my mind fortress! I was thinking of the number ' + randomNum + '.');
      } else if (isNaN(guess)) {
        console.log(guess + ' ' + randomNum + ' ' + i + 'bad player');
          alert('That\'s not a number! No game for you!');
          break;
      } else {
        console.log(guess + ' ' + randomNum + ' ' + i + ' battleship');
        alert('You broke my battleship! Please tell me how you did that!');
      }
    }
  }
}

// add event listener to quizLink so when it is clicked the function quiz runs
quizLink.addEventListener('click', quiz); 

// quiz function with score counter
function quiz() { 
  // Check value of military and provide response based on that value
  alert('So you think you know me? Let us put that to the test! Aswer yes or no.');
  var military = prompt('I served in the Marine Corps.');
  if (military.toLowerCase() === 'no' || military.toLowerCase() === 'n') {
    alert('Aim high, my friend!');
    soSmart++;
  } else if (military.toLowerCase() === 'yes' || military.toLowerCase() === 'yes') {
    alert('Do I look like a ground pounder to you?');
  } else {
    alert('Follow directions or lose points! You just lost 1');
    soSmart--;
  }
  // Check value of stationed and provide response based on that value
  var stationed = prompt('I was stationed in Florida while in the Air Force.');
  if (stationed.toLowerCase() === 'no' || stationed.toLowerCase() === 'n') {
    alert('Yeehaw! You got that one right, partner!');
    soSmart++;
  } else if (stationed.toLowerCase() === 'yes' || stationed.toLowerCase() === 'y') {
    alert('Nope, but I did grow up there. #FloridaMan');
  } else {
      alert('Follow directions or lose points! You just lost 1');
      soSmart--;
  }
  // Check value of university and provide response based on that value
  var university = prompt('I studied Electronic Media at UTEP.');
  if (university.toLowerCase() === 'yes' || university.toLowerCase() === 'y') {
    alert('Correct! Go Miners!');
    soSmart++;
  } else if (university.toLowerCase() === 'no' || university.toLowerCase() === 'n') {
    alert('How dare you doubt my education!');
  } else {
    alert('Follow directions or lose points! You just lost 1');
    soSmart--;
  }
  // Check value of television and provide response based on that value
  var television = prompt('Did you know, I\'ve worked in television?');
  if (television.toLowerCase() === 'yes' || television.toLowerCase() === 'y') {
    alert('It is really not as glamorous as it sounds.');
    soSmart++;
  } else if (television.toLowerCase() === 'no' || television.toLowerCase() === 'n') {
    alert('Actually, I did. It was a lot of working graveyard shifts in really cold rooms.');
  } else {
    alert('Follow directions or lose points! You just lost 1');
    soSmart--;
  }
  // Check value of spacey and provide response based on that value
  var spacey = prompt('My first program was in C# automating the calibration process for propulsion systems used in inter-galactic space travel.')
  if (spacey.toLowerCase() === 'no' || spacey.toLowerCase() === 'n') {
    alert('Right, it was just for DRABs for old pick-up trucks. But a guy can dream, can\'t he?');
    soSmart++;
  } else if (spacey.toLowerCase() === 'yes' || spacey.toLowerCase() === 'y') {
    alert('No, I didn\'t. But that would have been really cool though.');
  } else {
    alert('Follow directions or lose points! You just lost 1');
    soSmart--;
  }
  // Check value of student and provide response based on that value
  var student = prompt('Now, almost 20 years into my career, I\'m back to being a student at General Assembly, studying software development.');
  if (student.toLowerCase() === 'no' || student.toLowerCase() === 'n') {
    alert('Correct! I almost went to GA, but then I learned how much better Code Fellows is.');
    soSmart++;
  } else if (student.toLowerCase() === 'yes' || student.toLowerCase() === 'y') {
    alert('Wrong, I\'m not at General Assembly! You see me sitting here in the room with you, right?');
  } else {
    alert('Follow directions or lose points! You just lost 1');
    soSmart--;
  }
  // Check value of craftBeer looping through iLikeBeer array and provide response based on that value
  var craftBeer = prompt('"I drink beer. I like beer. Guess a style of beer that I like.')
  for(i = 0; i < iLikeBeer.length; i++) {
    if(craftBeer.toLowerCase() === iLikeBeer[i]){
      alert('Oh I do like those... You\'re making me thirsty.');
      soSmart++;
      break;
    } else if (craftBeer.toLowerCase() !== iLikeBeer[i] && i === 6) {
      alert('That\'s not really one of my favorites. But as long as it is a craft beer, I\'ll give it a shot!');
    }
  }
    // Check value of soSmart and provide response based on that value
  if (soSmart === 7) {
    alert('You got all 7 answers right! What are you, some kind of stalker, ' + username + '?');
  } else if (soSmart < 7 && soSmart > 3) {
    alert(soSmart + ' points. I see you\'ve noticed me, ' + username + '. I must say, I am flattered!');
  } else if (soSmart > 0 && soSmart <= 3) {
    alert('You only scored a measely ' + soSmart + 'points! You don\'t know me, ' + username + '!');
  } else if (soSmart <= 0) {
    alert('Your score is... ' + soSmart + '! You don\'t even care! Do you, ' + username + '!');
  } else {
    alert('Why do you got to go and break my quiz ' + username + '? See me after class.')
  }
}