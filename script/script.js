
var names = ["Robert", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim","john"];

for(var i=0;i<names.length;i++){
    var letter=names[i].charAt(0);
    if(letter==='J'|| letter==='j'){
        byespeaker.saygoodbye(names[i]);
    }
    else{
        hellospeaker.sayhello(names[i]);
    }
}
