var word_en = new Array('Never say die.','No cross, no crown.','No sweet without sweat.','Observation is the best teacher.','Health is better than wealth.'); 
var word_cn = new Array('永不言败。','不经历风雨，怎么见彩虹。','先苦后甜。','观察是最好的老师。','健康胜过财富。');
wordId = Math.floor(Math.random() * word_en.length);
var enWord = word_en[wordId];
var cnWord = word_cn[wordId];
var x = 0;
var y = enWord.length;
var enLen=enWord.length;
var cnLen=cnWord.length;
var point = 0;
function printLeft()
{
    var w = enWord.substring(0,point);
    if(point!=enLen){
        w=w+"|";
    }
    document.getElementById("leftword").innerText=w;
    point++;
    if(point>y)
    {
        point = 0;
        ++x;
    }else{
        setTimeout("printLeft()",50);
    }
}
function printRight()
{
    var w = cnWord.substring(0,point);
    if(point!=enLen){
        w=w+"|";
    }
    document.getElementById("rightword").innerText=w;
    point++;
    if(point>y)
    {
        point = 0;
        ++x;
    }else{
        setTimeout("printRight()",50);
    }
}
function printWord(){
    printLeft();
    printRight();
}
window.onload=printWord;
