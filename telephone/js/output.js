function output(){
    
    var str='';
    for (var i=0; i<array.length; i++){
        str +='<tr>';
        str +='<td>'+array[i].gubun +'</td>';
        str +='<td>'+array[i].tel +'</td>';
        str +='<td>'+array[i].irum +'</td>';
        str +='<td>'+array[i].gibon +'</td>';
        str +='<td>'+array[i].fee.toLocaleString() +'</td>';
        str +='<td>'+array[i].tax.toLocaleString() +'</td>';
        str +='<td>'+array[i].sum.toLocaleString() +'</td>';

        str +='</tr>';
    }
    document.getElementsByTagName('tbody')[1].innerHTML=str;
}