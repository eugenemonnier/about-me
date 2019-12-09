# about-me
### An about me page created in week 1 of Code 201.

**The JavaScript inclues the following:**
* Starts with asking the user their name. This prompt requires a response to continue.
* Follows up with some fun questions each with a response based on the user's answer. 
* Some questions look at responses to previous questions to come up with even more specific replies.

* The quiz & mindGame functions are started by clicking the Quiz & Mind Game links.

* The quiz function loops 5 times through quizObj array to go through the 5 questions/answers/responses.
* Each correct answer increases the soSmart counter by 1. Each invalid answer decreases the soSmart counter by 1.
* The 6th question is contained in studentFun function.
* The 7th question gives the user has 6 attempts to get the answer correct.
* This question has multiple possible answers and uses the includes() method to check the array for the correct answer.
* After the user either enter's in a correct answer or exhaust all 6 attempts the allMyBeers function is called.
* This function concatenates the iLikeBeer array into a single string adds an 's, ' to each value except the second to 
  last which gets an 's, and ' added onto it into the variable allMyBeers.
* allMyBeers then has the last two characters of the string removed to eliminate the trailing ', '.
* Then it alerts the user to all the possible answers using the allMyBeers variable.
* Finally based on the value of the soSmart counter, a specific response is given.

**The HTML/CSS includes the following:**

* A logo image is included in the header that will put a custom logo in the user's browser tab.
* The nav bar contains 5 links horizontally utilizing an unorderd list displayed inline.
* Two of the links are to external sites. 
* Two of the links contain ID's to be utilized by JavaScript to call functions.
* The last link is an internal link utilized as a page jump to the Favorite Shows ordered list.
* The Favorite Shows list is also done inline and each Show is an external link to that show's web page.