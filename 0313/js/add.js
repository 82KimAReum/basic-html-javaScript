function add(){
    var f=document.forms[0];
    var student=new Student(f.hakbun.value,
                                            f.irum.value,
                                        parseInt(f.kor.value),
                                    parseInt(f.eng.value),
                                parseInt(f.mat.value),
                                parseInt(f.edp.value),
                            
                            );

    array.push(student);
    f.hakbun.value='';
    f.irum.value='';
    f.kor.value='';
    f.mat.value='';
    f.eng.value='';
    f.mat.value='';
    f.edp.value='';
    document.getElementById('btnCalc').disabled=false;
    if(array.length>=2)
    document.getElementById('btnSort').disabled=false;

}