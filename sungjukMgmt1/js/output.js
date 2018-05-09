function mouseOver(t) {
    t.style.backgroundColor='yellow';
}
function mouseOut(t) {
    t.style.backgroundColor='white';
}
function openDetail(t) {
    var feature='width =450, height=650, left='+window.event.screenX+',top='+window.event.screenY;
    window.open('detail.html?idx=' + t.id, null, feature);
    //이벤트의 아이디를 이용해 새로운 창의 주소 생성

}
function output(){
    var idx=null;
    var str= '';
    for(var i=0;i<array.length; i++){ 
        //var str= '';
        str +="<tr id='"+i+"' onmouseover=\'mouseOver(this)\'onmouseout=\'mouseOut(this)\'>";
        //row를 넣을때 마다 i번째라는 id를 줌 
        str +="<td onclick='openDetail(this)'>"+array[i].getHakbun()+'</td>';
        str +='<td>'+array[i].getIrum()+'</td>';
        str +='<td>'+array[i].getKor()+'</td>';
        str +='<td>'+array[i].getEng()+'</td>';
        str +='<td>'+array[i].getMat()+'</td>';
        str +='<td>'+array[i].getEdp()+'</td>';
        str +='<td><input type=\'button\' value=\'Update\' name=\'btnUpdate\' /></td>';
        str +='<td><input type=\'button\' value=\'Delete\' name=\'btnDelete\' /></td>';
        str +='</tr>';
    }
    document.getElementById('result').innerHTML = str;
}