/**
 * Direction:
 * Find prefix of the word from array of string
 *
 * Expected Result:
 * fl
 */
const words = ['flower', 'flow', 'flight'];

function result(words) {
  function result(words) {
    // Your Code Here
    var count=0;
    var count_char=0;
    var char;
    var samechar="";
    var stats=0;
   while(stats==0){
      char=words[0].substring(0,count+1);
      for(var i=0; i<words.length; i++)
      {
         if(words[i].substring(0,count+1)==char)
         {
           count_char++;
           if(count_char==words.length){
           count_char=0;
           samechar =char;
           }
         }else if(words[i].substring(0,count+1)!=char)
         {
             stats=1;
         }

      }
      count++;
    }
    return samechar;
}

console.log(result(words));
