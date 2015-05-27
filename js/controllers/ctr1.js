app = angular.module('ModalDemo', []);
app.directive('modalDialog', function() {
  return {
    restrict: 'E',
    scope: {
      show: '='
    },
    replace: true, // Replace with the template below
    transclude: true, // we want to insert custom content inside the directive
    link: function(scope, element, attrs) {
      scope.dialogStyle = {};
      if (attrs.width)
        scope.dialogStyle.width = attrs.width;
      if (attrs.height)
        scope.dialogStyle.height = attrs.height;
      scope.hideModal = function() {
        scope.show = false;
      };
    },
    template: "<div class='ng-modal' ng-show='show'><div class='ng-modal-overlay' ng-click='hideModal()'></div><div class='ng-modal-dialog' ng-style='dialogStyle'><div class='ng-modal-close' ng-click='hideModal()'>X</div><div class='ng-modal-dialog-content' ng-transclude>abcdaksda</div></div></div>"
  };
});

app.controller('MyCtrl', ['$scope', function($scope) {
	$scope.buttonClicked = "";
    $scope.modalShown = false;
	$scope.toggleModal = function(btnClicked) {
    $scope.modalShown = !$scope.modalShown;
	$scope.buttonClicked = btnClicked;
	console.log($scope.buttonClicked);
	
  };
}]);
