var App = angular.module('drag-and-drop', ['ngDragDrop']);

App.controller('applicationManager', function($scope, $timeout) {
  $scope.catagories = [];
  $scope.applied = [
    { 'name': 'Patrick Stewart', 'drag': true },
    { 'name': 'Nathan Fillion', 'drag': true },
    { 'name': 'William Shatner', 'drag': true }
  ];
  $scope.pending = [
    { 'name': 'Kate Mulgrew', 'drag': true }
  ];
  $scope.scheduled = [
    { 'name': 'Scott Bakula',
    'drag': true,
    onDrop: 'dropCallback'
  },
  ];
  $scope.approved = [
    { 'name': 'Avery Brooks', 'drag': true },
    { 'name': '	Harrison Ford', 'drag': true }
  ];
  $scope.catagories.push($scope.applied);
  $scope.catagories.push($scope.pending);
  $scope.catagories.push($scope.scheduled);
  $scope.catagories.push($scope.approved);

  $scope.active = function(){
    console.log("moved to active");
  };

  $scope.active = function(){
  console.log("moved to active");
};

$scope.dropValidate = function(target, source) {
  return target !== source;
};

function active() {
  console.log( 'this is a thing');
}


  //   // Limit items to be dropped in list1
  //   $scope.optionsList1 = {
  //     accept: function(dragEl) {
  //       if ($scope.list1.length >= 2) {
  //         return false;
  //       } else {
  //         return true;
  //       }
  //     }
  //   };
});
