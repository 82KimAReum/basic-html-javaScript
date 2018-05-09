function output(){
    var str= '';
    for(var i=0;i<array.length; i++){ 
        //var str= '';
        str +='<tr>';
        str +='<td>'+array[i].getHakbun()+'</td>';
        str +='<td>'+array[i].getIrum()+'</td>';
        str +='<td>'+array[i].getKor()+'</td>';
        str +='<td>'+array[i].getEng()+'</td>';
        str +='<td>'+array[i].getMat()+'</td>';
        str +='<td>'+array[i].getEdp()+'</td>';
        str +='<td>'+array[i].getSum()+'</td>';
        str +='<td>'+array[i].getAvg()+'</td>';
        str +='<td>'+array[i].getGrade()+'</td>';
        str +='</tr>';
    
    }
  document.getElementById('result').innerHTML=str;

}