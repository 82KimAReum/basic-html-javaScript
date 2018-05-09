function Student(ha,ir,ko,en,ma,ed){
    var hakbun=ha;
    var irum=ir;
    var kor= ko;
    var eng=en;
    var mat=ma;
    var edp=ed;
    var sum =null;
    var avg=null;
    var grade =null;

    this.getHakbun=function(){return hakbun;}
    this.getIrum=function(){return irum;}
    this.getKor=function(){return kor;}
    this.getEng=function(){return eng;}
    this.getMat=function(){return mat;}
    this.getEdp=function(){return edp;}
    this.getSum=function(){return sum;}
    this.getAvg=function(){return avg;}
    this.getGrade=function(){return grade;}
   
    this.setSum=function(s){sum= s;}
    this.setAvg=function(a){avg= a;}
    this.setGrade=function(g){grade= g;}
    
    this.myString=function(){
        document.write(hakbun+' , '+ irum+' , '+kor+' , '+eng+' , '+mat+' , '+edp+' , '+sum+' , '+avg+' , '+grade);
    }
    
    
}