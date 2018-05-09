

window.addEventListener('load',setup,false);//윈도우가 load되면 setup호출


//window.onload=setup;//비표준
function setup(){
  
    // document.getElementById('btnCalc').disabled=true;
    // document.getElementById('btnSort').disabled=true;
    // document.getElementById('btnOutput').disabled=true;
    
    //document.getElementById('btnAdd').addEventListener('click',add,false);
    document.getElementById('mylink').addEventListener('click',newPage,false);
    // document.getElementById('btnCalc').addEventListener('click',calc); 
    // document.getElementById('btnSort').addEventListener('click',sort);
    // document.getElementById('btnOutput').addEventListener('click',output);
  array=new Array();
    
}

function newPage(evt){
    var feature='width=500, height=700, left='+evt.screenX +
                    ', top='+evt.screenY;
    window.open('input.html','myWindow',feature);//새창띄우기



}
function addStudent(student){
    array.push(student);
    //console.log(array[array.length-1].getSum());
    sort();
    output();
}
function getStudent(idx){
    return array[idx];
}