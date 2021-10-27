/**
 * Direction:
 * Remove duplicated data from array
 *
 * Expected Result:
 * [1, 2, 3, 4, 5]
 */
const data = [1, 4, 2, 3, 5, 3, 2, 4];

function result(data) {
  // Your Code Here
  var newData= new Array();
  data.forEach(function(content)
  {
   if(!newData.includes(content)) //includes return true false
   {
     newData.push(content);
   }
  });

  //sort
  for(var i=0; i<newData.length; i++)
  {
    for (var j =0; j<newData.length-i; j++)
    if(newData[j+1]<newData[j])
    {
        var temp = newData[j];
        newData[j]=newData[j+1];
        newData[j+1]=temp;
    }
  }

  //alternate sort
  /*newData.sort(function(a,b){
    return a-b;
  });*/
  
  return newData;
}

console.log(result(data));
