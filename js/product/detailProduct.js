app.controller("detailProduct", function ($scope, $routeParams, $route) {
    let a = $scope.$parent.products.find(function (product, index) {
        return product.id == $routeParams.id
    }, [])

    $scope.productss = []

    for (let i = 0; i < 6; i++) {
        let ao = Math.ceil(Math.random() * 50)
        if(!check(ao)){
            i--;
            continue
        }
        $scope.productss.push($scope.$parent.products[ao])
    }
    $scope.detailProduct = angular.copy(a)

    function check(number){
        for(value of $scope.productss){
            if(value.id == number){
                return false
            }
        }
        return true
    }
    hay()

})


