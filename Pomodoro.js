$('#plusBreak').click(function IncreaseBreak() {
var plusIs=$('#enterB').val();// $('input:textbox').val()
plusIs++;
console.log(plusIs);
$('#enterB').val(plusIs);
});
$('#minusBreak').click(
function DecreaseBreak(){
var minusIs=$('#enterB').val();// $('input:textbox').val()
minusIs--;
if(minusIs<0){
alert('break time cannot be negative');
}
minusIs=0;
console.log(minusIs);
$('#enterB').val(minusIs);


});
$('#plusSession').click(
function IncreaseSession(){
var plusIs=$('#enterSession').val();// $('input:textbox').val()
plusIs++;
console.log(plusIs);
$('#enterSession').val(plusIs);
});
$('#minusSession').click(
function DecreaseSession(){
var minusIs=$('#enterSession').val();// $('input:textbox').val()
minusIs--;
console.log(minusIs);
$('#enterSession').val(minusIs);
});
var cancelled=false;
var again=false;
function initiateSession(){
    if(cancelled===true){
		cancelled=false;
		again=false;
		console.log('Starting');
		return;
		}
     else 
        cancelled=true;  
    {
		var enterSession=$('#enterSession').val();
		if(enterSession<10)
			$('.numberCircle').html("00:0"+enterSession);
		else
			$('.numberCircle').html("00:"+enterSession);
		runClock();
	 }
	 
     
	 }
	 
	 
function runClock(){
     //eep(30000);
	 if(again && cancelled===true){
		
		var re = /[:]/g;
		var current=$('.numberCircle').text();
		console.log("Running now: "+ current);
		var index=current.search(re);
		console.log('Index at: '+index);
		var hour=current.substring(0,index);
		var min=current.substring(index+1);
		hour=parseInt(hour,10);
		min=parseInt(min,10);
		if(hour==0 && min==0)return;
		//console.log("Before: "+ hour+" "+min);
		if(min!==0){
		min--;
		}
		else
		{
		hour=hour-1;
		min=59;
		}
		$('.numberCircle').html(hour+":"+min);
		repeater = setTimeout(runClock,60000);
	 }
	 else
	 {
	 repeater = setTimeout(runClock,60000);
	 again=true;
	 }
}

