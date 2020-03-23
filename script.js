function setIframeBorder(){
	let iframeBorder = document.getElementsByTagName('iframe-border');
	for(let i = 0; i < iframeBorder.length; i++){
		let iframe = iframeBorder[i].getElementsByTagName('iframe')[0];
		let width = iframeBorder[i].getAttribute('width'); let height = iframeBorder[i].getAttribute('height');
		if(width){iframeBorder[i].style['width'] = width;} if(height){iframeBorder[i].style['height'] = height;}
		iframe.style['width'] = '100%'; iframe.style['height'] = '100%';
		iframeBorder[i].style['overflow'] = 'hidden'; iframeBorder[i].style['display'] = 'inline-block';
		iframe.style['position'] = 'relative'; iframe.style['margin'] = '0';
	}
}
setInterval(setIframeBorder, 10);