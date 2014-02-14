(function(window){
	//	Refreashing selected menu items for initialization
	var clearSelection = function() {
		var items = $('li').filter('.menu-item'),
			i = 0,
			curPos;

		for ( i = 0; i < items.length; i++ )
		{
			if ( $(items[i]).hasClass('menu-item-selected') === true )
				curPos = i;

			$(items[i]).removeClass('menu-item-selected');
		}
		return curPos;
	};

	var setFocus = function(index, curPos) {
		var items = $('li').filter('.menu-item'),
			i = 0,
			diff = (curPos > index) ? (curPos - index) : (index - curPos);

		$('#sections').animate({top:(140 - (400 * index)) + 'px'}, diff * 900);
	};

	var scrollUp = function() {
		var curPos = clearSelection(),
			items = $('li').filter('.menu-item');

		if ( curPos > 0 )
		{
			$(items[curPos - 1]).addClass('menu-item-selected');
			setFocus(curPos - 1, curPos);
		}else {
			$(items[curPos]).addClass('menu-item-selected');
		}
	};

	var scrollDown = function() {
		var curPos = clearSelection(),
			items = $('li').filter('.menu-item');

		if ( curPos < 3 )
		{
			$(items[curPos + 1]).addClass('menu-item-selected');
			setFocus(curPos + 1, curPos);
		}else {
			$(items[curPos]).addClass('menu-item-selected');
		}
	}

	var initInstance = function() {
		$('#menu-item1').addClass('menu-item-selected');

		var items = $('li').filter('.menu-item');
		$('#menu-item1').click(function(event) {
			alert("");
			var curPos = clearSelection();
			$(items[0]).addClass('menu-item-selected');
			setFocus(0, curPos);
		});

		$('#menu-item2').click(function(event) {
			var curPos = clearSelection();
			$(items[1]).addClass('menu-item-selected');
			setFocus(1, curPos);
		});

		$('#menu-item3').bind('click', function(event) {
			var curPos = clearSelection();
			$(items[2]).addClass('menu-item-selected');
			setFocus(2, curPos);
		});

		$('#menu-item4').bind('click', function(event) {
			var curPos = clearSelection();
			$(items[3]).addClass('menu-item-selected');
			setFocus(3, curPos);
		});
	};

	$(document).ready(function() {
		var prviousScrollTop = 0;
		initInstance();

		$(window).bind('mousewheel', function(e) {
			if ( e.originalEvent.wheelDelta / 120 < 0 )
				scrollDown();
			else
				scrollUp();
		});
	});
})(window);