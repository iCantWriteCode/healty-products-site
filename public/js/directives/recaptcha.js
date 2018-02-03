app.directive('recaptcha', function() {
	return {
		restrict: 'E',
		template: '<script src="https://www.google.com/recaptcha/api.js" async defer></script>'
	};
});
