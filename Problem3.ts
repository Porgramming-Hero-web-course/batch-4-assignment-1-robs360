{
   interface Func3 {
      (param1:string,param2:string):number
   } 

   const countWordOccurrences:Func3=(sentence,word)=>{
    let num=0;
    
    let arr:string[]=sentence.split(' ')
    
    for(let i=0;i<arr.length;i++){
        let subString=arr[i].toLowerCase()
        if(word.toLowerCase()===subString){
            num++;
        }
    }
    return num
   }

   const res=countWordOccurrences('I love TYPescRipt','typeSCripT') 

}

