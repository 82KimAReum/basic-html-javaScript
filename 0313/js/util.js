var array;

window.addEventListener('load',setup);//윈도우가 load되면 setup호출
//window.onload=setup;//비표준
function setup(){
    array=new Array();
    document.getElementById('btnCalc').disabled=true;
    document.getElementById('btnSort').disabled=true;
    document.getElementById('btnOutput').disabled=true;
    document.getElementById('btnAdd').addEventListener('click',add);

    document.getElementById('btnCalc').addEventListener('click',calc);
    document.getElementById('btnOutput').addEventListener('click',output);
    document.getElementById('btnSort').addEventListener('click',sort);
}
