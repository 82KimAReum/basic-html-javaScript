function calc(){
    for(var i =0; i<array.length;i++){
    var gibon=getGibon(array[i].gubun);
    var fee =array[i].amount*12;
    var tax=(gibon+fee)*0.1;
    var sum=gibon+fee+tax;
    array[i].gibon=gibon;
    array[i].fee=fee;
    array[i].tax=parseFloat(tax.toFixed(1));
    array[i].sum=parseFloat(sum.toFixed(1));
    }

}
function getGibon(gubun)
{
var gibon=null;
return gibon=(gubun==1)? 6000:(gubun==2)? 4800:3000;

}