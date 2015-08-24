function ajax(url,fnSucss,fnFaild)
{
	//创建Ajax对象
	//非IE6
	if(window.XMLHttpRequest)
	var oAjax = new XMLHttpRequest();
	else
	var oAjax = new ActiveXObject('Microsoft.XMLHTTP');
	//链接服务器
	//open(方法,文件名,异步传输);
	oAjax.open('GET',url,true);
	//发送请求
	oAjax.send();
	//接受返回
	oAjax.onreadystatechange=function()
	{
		 //oAjax.readyState  //浏览器和服务器进行到哪一步了

		 if(oAjax.readyState==4)
		 {
		 	if (oAjax.status==200)
		 		{
		 			fnSucss(oAjax.responseText);
		 		}
		 	else{
		 		if(fnFaild)
		 		{
		 			fnFaild(oAjax.status);
		 		}
		 	}
		 }
	}
}