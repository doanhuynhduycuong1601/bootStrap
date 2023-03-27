app.controller("home", function ($scope) {
})

app.controller("offcanvasDetailProduct", function ($scope) {
    $scope.quantity = 18;

    $scope.homeDetailProduct = function (product) {
        $scope.$parent.$parent.reviewProduct = angular.copy(product)
    }

    $scope.cart = function (product) {
        $scope.$parent.$parent.reviewProduct = angular.copy(product)
        $scope.$parent.$parent.quantityBuy = 1 
    }

    $scope.viewAdd = function (element) {
        $scope.quantity += 18;
    }
})
