var words = new Array('Never too old to learn, never too late to turn.'); 
wordId = Math.floor(Math.random() * words.length);
var showWord = words[wordId];
var x = 0;
var y = showWord.length;
var subInt =Math.floor(y / 2);
var point = 0;
function printWord()
{
    if(point<=subInt){
        var w = showWord.substring(0,point);
        if(point!=subInt){
            w=w+"|";
        }
        document.getElementById("leftword").innerText=w;
    }else{
        var w = showWord.substring(subInt,point);
        document.getElementById("rightword").innerText=w;
    }
    point++;
    if(point>y)
    {
        point = 0;
        ++x;
    }else{
        setTimeout("printWord()",30);
    }
}
//document.getElementById("leftword").innerText="";
//document.getElementById("rightword").innerText="";
window.onload=printWord;
