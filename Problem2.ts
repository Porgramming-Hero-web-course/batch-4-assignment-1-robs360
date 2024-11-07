
{
    type Func2= (arr:number[])=>number[]

const removeDuplicates:Func2=(arr)=>{
    let arr2:number[]=[];
    
    arr.sort((a:number,b:number)=>a-b)
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]!==arr[i+1]){
            arr2.push(arr[i])
        }
    }
    const last:number=(arr[arr.length-1])
    arr2.push(last)
    return arr2
}

const res:number[]=removeDuplicates([1,1,2,2,-1,3,3,1,0])


}
// 1,1,1,2,2,3,4,5
// 1,2,3,4