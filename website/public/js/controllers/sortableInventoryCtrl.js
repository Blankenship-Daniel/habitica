habitrpg.controller('SortableInventoryController', ['$scope',
  function ($scope) {
    var attributeSort = {
      constitution: ['-con', '-(con+int+per+str)'],
      intelligence: ['-int', '-(con+int+per+str)'],
      perception: ['-per', '-(con+int+per+str)'],
      strength: ['-str', '-(con+int+per+str)'],
      name: 'text()',
      set: 'set'
    }

    $scope.order = attributeSort.name;
    $scope.orderChoice = 'name';

    $scope.setOrder = function (order) {
      $scope.orderChoice = order;
      if (order in attributeSort) {
        $scope.order = attributeSort[order];
      }
    };
}]);
