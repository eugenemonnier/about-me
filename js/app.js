'use strict';

// global variable
var drunk = false;

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