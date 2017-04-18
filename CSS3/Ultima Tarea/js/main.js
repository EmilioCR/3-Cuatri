var module = (function () {
	var home = document.getElementById('home');
	var navHide = document.getElementById('sub-nav-hide');

	return {
		displaySubMenu: function () {
			home.addEventListener('mouseenter', function () {
				navHide.className = ('sub-nav-show');
				home.style.backgroundColor = '#62493d';
			});

			navHide.addEventListener('mouseenter', function () {
				navHide.className = ('sub-nav-show');
				home.style.backgroundColor = '#62493d';
			});

			home.addEventListener('mouseleave', function () {
				navHide.className = ('sub-nav-hide');
				home.style.backgroundColor = '#e09402';
			});

			navHide.addEventListener('mouseleave', function () {
				navHide.className = ('sub-nav-hide');
				home.style.backgroundColor = '#e09402';
			});
		},
	};

})();

module.displaySubMenu()