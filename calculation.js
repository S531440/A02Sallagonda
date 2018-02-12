function average(){
	var a=parseInt(document.getElementById("one").value);
	var b=parseInt(document.getElementById("two").value);	
		$('#in').css('background','white');		
		$('#in').html('average of two numbers is: ');
			document.getElementById('avg').value=(a+b)/2;
	}
	function average1(one,two)
{
	if(one<0 || two <0)
	{		
		return 0;
	}
	else
		return (one+two)/2;
}
