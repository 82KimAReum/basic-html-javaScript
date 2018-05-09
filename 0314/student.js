function Student(irum){
    var name =irum;//var지역 this전역
    this.getName=function(){
        return name;
    }
    this.toString =function(){
        document.write('name = '+ name);
    }
}