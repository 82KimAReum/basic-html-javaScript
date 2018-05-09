function add(){
    var f=document.getElementById('myform');
    
    if(!f.hakbun.value|| !f.irum.value || !f.kor.value || !f.eng.value || !f.mat.value || !f.edp.value){
        alert('모든값은 필수');
        f.hakbun.focus();
        return false;
    }
    var student=new Student(f.hakbun.value,
                                            f.irum.value,
                                        parseInt(f.kor.value),
                                    parseInt(f.eng.value),
                                parseInt(f.mat.value),
                                parseInt(f.edp.value),
                            
                            );

   
    f.hakbun.value='';
    f.irum.value='';
    f.kor.value='';
    f.mat.value='';
    f.eng.value='';
    f.mat.value='';
    f.edp.value='';
    // document.getElementById('btnCalc').disabled=false;
    // if(array.length>=2)
    // document.getElementById('btnSort').disabled=false;
    calc(student);//call by reference
    //array.push(student);
    //console.log(student.getSum());
    opener.addStudent(student);//부모의 function중 addStudent호출
    self.close();

}