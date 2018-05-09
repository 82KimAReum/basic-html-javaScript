function mouseOver(t) {
    t.style.backgroundColor='yellow';
}
function mouseOut(t) {
    t.style.backgroundColor='white';
}
function openDetail(t) {
    var feature='width =450, height=650, left='+window.event.screenX+',top='+window.event.screenY;
    window.open('detail.html?idx='+t.id,null,feature);
    //이벤트의 아이디를 이용해 새로운 창의 주소 생성

}

function output(){
    document.getElementById('count').innerHTML=array.length;
    var idx=null;
    var str= '';
    for(var i=0;i<array.length; i++){ 
        //var str= '';
        str +="<tr id='"+i+"' onmouseover=\'mouseOver(this)\'onmouseout=\'mouseOut(this)\'>";
        //row를 넣을때 마다 i번째라는 id를 줌 
        str +="<td  onclick='openDetail(this)'>"+array[i].getHakbun()+'</td>';
        str +='<td>'+array[i].getIrum()+'</td>';
        str +='<td>'+array[i].getKor()+'</td>';
        str +='<td>'+array[i].getEng()+'</td>';
        str +='<td>'+array[i].getMat()+'</td>';
        str +='<td>'+array[i].getEdp()+'</td>'; 
        
        str +='<td><input type=\'button\' value=\'Update\' name=\'btnUpdate\' /></td>';
        str +='<td><input type=\'button\' value=\'Delete\' name=\'btnDelete\' /></td>';
        str +='</tr>';
        
    }
   
    document.getElementById('result').innerHTML=str;
    var deletes= document.getElementsByName('btnDelete');
    //alert(deletes.length);
    for(var j=0; j<deletes.length; j++){
        deletes[j].addEventListener('click',Delete,false);//버튼 마다 이벤트를 달아줌
    }
    var updates=document.getElementsByName('btnUpdate');
    for(var j=0; j<updates.length;j++){
        updates[j].addEventListener('click',Update,false);
    }
}

function Update() {
//parentNode==td,
    //var idx=this.parentNode.parentNode.getAttribute('id');
    var tr= this.parentNode.parentNode;

    var kor=tr.childNodes[2].innerHTML;
    var korInput= document.createElement('input');
    korInput.setAttribute('type','text');
    korInput.setAttribute('style','width:40px;');
    korInput.setAttribute('value',kor);
    tr.childNodes[2].replaceChild(korInput,tr.childNodes[2].childNodes[0]);
    //eng
    var eng=tr.childNodes[3].innerHTML;
    var engInput= document.createElement('input');
    engInput.setAttribute('type','text');
    engInput.setAttribute('style','width:40px;');
    engInput.setAttribute('value',eng);
    tr.childNodes[3].replaceChild(engInput,tr.childNodes[3].childNodes[0]);
    //mat
    var mat=tr.childNodes[4].innerHTML;
    var matInput= document.createElement('input');
    matInput.setAttribute('type','text');
    matInput.setAttribute('style','width:40px;');
    matInput.setAttribute('value',mat);
    tr.childNodes[4].replaceChild(matInput,tr.childNodes[4].childNodes[0]);
    //epd
    var edp=tr.childNodes[5].innerHTML;
    var edpInput= document.createElement('input');
    edpInput.setAttribute('type','text');
    edpInput.setAttribute('style','width:40px;');
    edpInput.setAttribute('value',edp);
    tr.childNodes[5].replaceChild(edpInput,tr.childNodes[5].childNodes[0]);
    //
}
function Delete(){
    array.splice(this.parentNode.parentNode.getAttribute('id'), 1);
    output();
}