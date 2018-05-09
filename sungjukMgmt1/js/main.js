window.addEventListener('load',setup,false);//윈도우가 load되면 setup호출
var array = new Array();
var db = null;
function setup(){
    
    //Web SQL Database 지원여부 확인하기
    if(!window.openDatabase){
        alert("현재 귀하의 브라우저는 데이터베이스를 지원하지 않습니다.");
        return;
    }else{
        //alert("현재 귀하의 브라우저는 데이터베이스를 지원합니다.");
        var dbName = "MyDatabase";
        var dbVersion = "1.0";
        var displayName = "Sungjuk Management with SQLite";
        var maxSize = 1024 * 1024 * 5;   //5MB
        db = openDatabase(dbName, dbVersion, displayName, maxSize);
        createDbTable();
        selectCount();
        selectAll();
        //dropTable();
    }
    document.getElementById('filesource').addEventListener('change', readFile, false);
}

function selectAll(){
    var sql = "SELECT * FROM Student ORDER BY tot DESC";
    db.transaction(function(tx){
        tx.executeSql(sql, [], function(tx, results){
            var resultset = results.rows;
            var str = '';
            for(var i = 0 ; i < resultset.length ; i++){
                //console.log(resultset[i]['irum']);
                str +="<tr>";
                str +="<td>" + resultset[i]['hakbun'] +'</td>';
                str +='<td>' + resultset[i]['irum'] +'</td>';
                str +='<td>' + resultset[i]['kor'] +'</td>';
                str +='<td>' + resultset[i]['eng'] +'</td>';
                str +='<td>' + resultset[i]['mat'] +'</td>';
                str +='<td>' + resultset[i]['edp'] +'</td>';
                str +='<td><input type=\'button\' value=\'Update\' name=\'btnUpdate\' /></td>';
                str +='<td><input type=\'button\' value=\'Delete\' name=\'btnDelete\' /></td>';
                str +='</tr>';
            }
            document.getElementById('result').innerHTML = str;
        }, null);
    });
}
function dropTable(){
    var sql = "DROP TABLE Student";
    db.transaction(function(tx){
        tx.executeSql(sql);
    });
}
function selectCount(){
    var sql = "SELECT COUNT(hakbun) FROM Student";
    db.transaction(function(tx){
        tx.executeSql(sql, [], function(tx, results){
            var resultset = results.rows;
            var count = resultset[0]['COUNT(hakbun)'];
            console.log(resultset[1]);
            document.getElementById('count').innerHTML = count;
        }, null);
    });
}
function createDbTable(){
    var sql = "CREATE TABLE IF NOT EXISTS Student(" +
                  "hakbun    TEXT   NOT NULL  PRIMARY KEY, " + 
                  "irum   TEXT  NOT NULL, " + 
                  "kor    INTEGER  NOT NULL, " + 
                  "eng   INTEGER  NOT NULL, " +
                  "mat   INTEGER NOT NULL, " +
                  "edp   INTEGER NOT NULL, " +
                  "tot   INTEGER, " +
                  "avg   REAL, " +
                  "grade  TEXT" +
                  ");";
    db.transaction(function(tx){
        tx.executeSql(sql);
    });
}
function newPage(evt){
    var feature='width=500, height=700, left='+evt.screenX +
                    ', top='+evt.screenY;
    window.open('input.html','myWindow',feature);//새창띄우기
}

var fileReader = null;
function readFile(){
    var file = this.files[0];
    fileReader = new FileReader();
    fileReader.addEventListener('load', createTable, false);
    fileReader.readAsText(file);
}

function createTable(){
    var stu_array = fileReader.result.split("\n");
    for(var i = 0 ; i < stu_array.length ; i++){
        var student = new Student(stu_array[i].split("     ")[0].trim(),   //학번
                                                stu_array[i].split("     ")[1].trim(),   //이름
                                                parseInt(stu_array[i].split("     ")[2].trim()), //국어
                                                parseInt(stu_array[i].split("     ")[3].trim()), //영어
                                                parseInt(stu_array[i].split("     ")[4].trim()), //수학
                                                parseInt(stu_array[i].split("     ")[5].trim())); //전산
        calc(student);                                                
        //array.push(student);
        insertData(student);
    }
   // insertData();
}
function insertData(s){
    var sql = "INSERT INTO Student VALUES(?,?,?,?,?,?,?,?,?)";
    db.transaction(function(tx){
        tx.executeSql(sql, [s.getHakbun(), s.getIrum(),
                                    s.getKor(), s.getEng(), s.getMat(),
                                    s.getEdp(), s.getSum(), 
                                    s.getAvg(), s.getGrade()], 
                                    selectData
                                    , sqlexception);
    });
}
function sqlexception(error){
    console.log('Error 발생 : ' + error.message + '(' + error.code + ')');
}
function selectData(){
    console.log("Success");
}