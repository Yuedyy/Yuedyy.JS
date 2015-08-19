//原始运动框架再加一个函数作为参数

//首先为一个获得行间样式的函数
function getStyle(obj,name)
{
	if(obj.currentStyle)
	{
		return obj.currentStyle[name];
	}
	else
	{
		return getComputedStyle(obj,false)[name];
	}
}

//原始运动框架函数

function startMove(obj,arr,iTarget,fnEnd)
{
	clearInterval(obj.timer);
	obj.timer=setInterval(function()
		{
			var cur = 0;
			if (arr=='opacity')
			{
				cur = Math.round(parseFloat(getStyle(obj,arr))*100);
			}
			else
			{
				cur = parseInt(getStyle(obj,arr));
			}
	var speed=(iTarget-cur)/6; 
	speed = speed>0?Math.ceil(speed):Math.floor(speed);

	if(cur==iTarget)
	{
		clearInterval(obj.timer);

		if (fnEnd)fnEnd();
	}
	else{
		if(arr=='opacity')
		{
			obj.style.filter='alpha(opacity:'+(cur+speed)+');';
			obj.style.opacity=(cur+speed)/100;
		}
		else{
			obj.style[arr]=cur+speed+'px';
		}
	}
		},30);
}