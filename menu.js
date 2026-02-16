function cm() {
 	 const mn =document.querySelector('.menu');
	  const gl = document.querySelector('.glass');
	  const nm =document.querySelector('.m');
	  mn.classList.toggle('show');
	  nm.classList.toggle('change');
	  gl.classList.toggle('show')
	  
	  
  }
  function et(url,btn) {
  const bt = document.querySelector('.i');
  const bc = document.querySelector('button[onclick]');
  bt.classList.add('e'); 
  btn.classList.add('s');
  setTimeout(() => location.href = url, 300);
  }
  
  const h1=document.querySelector('h1');
h1.addEventListener('mouseenter',()=>document.body.style.backgroundColor='rgb(0,0,0)');
h1.addEventListener('mouseleave',()=>document.body.style.backgroundColor='rgb(30,30,30)');