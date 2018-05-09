function sort(){
    for(var i=0; i<array.length-1; i++){
        for(var j=0; j<array.length-i; j++){
            if(array[j].sum<array[j+1].sum){
                swap(j,j+1);
            }
        }
    }
function swap(a,b){
    var temp=array(a);
    array(a)=array(b);
    array(b)=temp;
}

}