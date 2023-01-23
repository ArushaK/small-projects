function getSumPairZero(array){
    let left=0;
    let right=array.length-1;
    while(left<right){
        sum=array[left]+array[right];
        if(sum===0){
            return [ array[left] , array[right] ];
        }
        else if(sum>0){
            right--;
        }
        else{
            left++;
        }
    }
    }
const result=getSumPairZero([-11,-5,-3,0,2,5,7,6]);
console.log(result);