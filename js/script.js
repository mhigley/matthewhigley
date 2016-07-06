/* put your javascript here */
var scrollX = document.getElementById('scrollX'),
	scrollY = document.getElementById('scrollY');

var size = {
  width: window.innerWidth || document.body.clientWidth,
  height: window.innerHeight || document.body.clientHeight
}
window.onresize = function(){
	size = {
		width: window.innerWidth || document.body.clientWidth,
  		height: window.innerHeight || document.body.clientHeight
	}
	if(size.width >= 768){
		Ps.initialize(scrollX, {
		  wheelSpeed: 2,
		  wheelPropagation: true,
		  minScrollbarLength: 20,
		  suppressScrollY: true
		});
		Ps.initialize(scrollY, {
			wheelSpeed: 2,
			wheelPropagation: true,
			minScrollbarLength: 20,
			suppressScrollX: true
		});
	}
}
if(size.width >= 768){
	Ps.initialize(scrollX, {
	  wheelSpeed: 2,
	  wheelPropagation: true,
	  minScrollbarLength: 20,
	  suppressScrollY: true
	});
	Ps.initialize(scrollY, {
		wheelSpeed: 2,
		wheelPropagation: true,
		minScrollbarLength: 20,
		suppressScrollX: true
	});
}
