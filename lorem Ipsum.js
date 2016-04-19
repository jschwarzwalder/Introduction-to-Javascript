/* Lorem Ipsum Generator

   Lorem Ipsum filler text is often used to mock how a page might look with real-looking text.

   Your task is to create a program that generates filler text like you can see that our program 
   produced by changing the function "generateIpsum()" below.
   
   The source for the filler words must come from the variable "words" to produce about 1000 
   characters of output.
   
   The time limit for this task is 20 minutes. If you run out of time, it is sufficient to 
   explain how your solution is better or worse than the output of our program and how you 
   would improve it if you had more time.
   
   Send the contents of this pane and the contents of the Result pane as text files when done.
   
*/


var commonWords = ["the", "of", "and", "a", "to", "in", "is", "that",  "for", "on", "as", "with", "at", "be", "this", "from", "or", "one", "by", "words", "but", "not", "what", "all", "when", "your", "there", "on", "each", "which", "how",  "if", "up", "other", "about", "out", "many", "then", "them", "these", "so", "some",  "into", "time", "two", "more", "number", "no", "way",   "than", "first", "water", "been", "who", "its", "now", "long", "down", "day", "part"];

var verb = ["was", "are", "have", "had", "were", "said", "would", "can", "use", "do", "will", "would", "make", "like", "look", "has", "write", "go", "see", "could", "called", "am", "find", "may", "made", "come", "get", "did"]

var subject= ["I", "she", "my", "he", "their", "they", "it","we", "you", "girl", "boy", "people", "woman", "child", "man", "Bob", "cat", "his", "dog","her", "him", "duck"]

function generateIpsum() {
  var words ="";
 	
 while ( words.length <= 1000) {
  	words += sentence();
  }
  
   
  return words; // TODO: Replace this with code that generates Ipsum style filler text from "words"
}

function sentence() {
    var sentence ="";
    //add common words
    for (var i = 0; i <= Math.random()*5; i ++  ){
        sentence += commonWords[Math.floor(Math.random() * commonWords.length)] ;
        sentence += " ";
        }
    
    
    //add a subject
    sentence += subject[Math.floor(Math.random() * subject.length)] ;
    sentence += " ";

    //add a verb
    sentence += verb[Math.floor(Math.random() * verb.length)] ;
    sentence += " ";
			
      //add extra common words
      for (var i = 0; i <= Math.random()*5; i ++  ){
        sentence += commonWords[Math.floor(Math.random() * commonWords.length)] ;
        sentence += " ";
        }
    
   return sentence.charAt(0).toUpperCase() + sentence.slice(1,-1) + ". " ;
}

document.getElementById('fill').innerHTML = generateIpsum();