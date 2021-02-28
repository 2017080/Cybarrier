var count = 0;
var waiting_time = 0; 
var count1 = 0;
var myvar;
var date = new Date();
var start;
var end;
var wpm;
var bs = 8;
document.getElementById("textbox").addEventListener('keypress',function (e){
    if(document.getElementById("textbox").value.toString().length == 0){
        var date1 = new Date();
        start = date1.getTime();
    }
    if(e.key == " "){
        count++;
    }
        console.log(e.keyCode);
    clearInterval(myvar);
    myvar = setInterval(function(){
        console.log('wait');
        waiting_time++;
    }, 3000)
})
function p(){
    clearInterval(myvar);
    var date2 = new Date();
    end = date2.getTime();
    console.log("number of words "+ (count + 1));
    console.log("waiting time = "+waiting_time*3+" seconds");
    console.log((end-start)/1000);
    wpm = [(count+1)/[((end - start)/1000)-(waiting_time*3)]]*60;
    console.log(wpm);
    document.getElementById('hidden_input').value = wpm;
}



