function calc()
{
    for(var i=0; i<array.length; i++){
        var student=array[i];
        
        var sum = student.getKor() + student.getEng() + 
                      student.getMat() + student.getEdp();
      var avg = sum / 4;
      var grade = (avg >= 90 && avg <= 100) ? 'A' :
                             (avg < 90 && avg >= 80) ? 'B' :
                               (avg < 80 && avg >= 70) ? 'C' :
                                  (avg < 70 && avg >= 60) ? 'D' : 'F';
      student.setSum(sum);   student.setAvg(avg);
      student.setGrade(grade);


    }
    document.getElementById('btnOutput').disabled=false;
}