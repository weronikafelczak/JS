let numbersArray=[];
let largest=[];

function createArray() {
    for(i=1; i<=20; i++){
        if (i%3===0){
            number = Math.pow(i, 3);
            numbersArray.push(number);
        } else {
            numbersArray.push(i);
        } 
    }
    return numbersArray;
}

function findLargest3(){
    let sortedArray = numbersArray.sort(function(a,b) {
        if (a < b){
            return 1;
        } else if (a == b){ 
            return 0;
        } else {
            return -1;
        }
    })
    for(i=0; i<3; i++){
        largest.push(sortedArray[i]);
    }
    return largest;
};

function findMin(){
    result = Math.min(...largest);
    return result;
}

createArray();
findLargest3();
findMin();