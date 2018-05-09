function input(){
    var idx=document.getElementById('selGubun').selectedIndex;
    var gubun=document.getElementById('selGubun').options[idx].value;
    var tel=document.getElementById('usertel').value;
    var username=document.getElementById('username').value;
    var amount=document.getElementById('amount').value;

    if(!gubun || !tel || !username|| !amount ){
        alert('값을 모두 넣어주세요.');
        document.getElementById('selGubun').focus();
        return false;
    }
    var telephone =new Telephone(gubun,tel,username,amount);
    array.push(telephone);
    //alert(array[array.length-1].irum);
    document.getElementById('selGubun').options[0].selected=true;
    document.getElementById('usertel').value='';
    document.getElementById('username').value='';
    document.getElementById('amount').value='';

}