function sort(){


var tem;
    for(var i=0; i<array.length-1; i++){
        for(var j=i+1; j<array.length; j++){
           if(array[j].getSum()<array[i].getSum()){
             tem=array[j]
            array[j]=array[i];
            array[i]=tem;

           }
           

        }
    }
   



}