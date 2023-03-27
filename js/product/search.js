app.controller("search", function ($scope, $routeParams, $route) {
    hay()
    let array = ($routeParams.value == Number($routeParams.value)) ? searchType() :searchName()

    function searchType(){
        return $scope.$parent.products.filter(function (product) {
            return product.idType == $routeParams.value
        })
    }

    function searchName(){
        let ao = $routeParams.value.replace('search_','').toLowerCase()
        return $scope.$parent.products.filter(function (product) {
            return product.name.toLowerCase().includes(ao)
        })
    }

    // Number(value)
    $scope.searchPrices = [
        { id: 0, name: "All", range: 10000000000 },
        { id: 1, name: "<500", range: 500 },
        { id: 2, name: "<3000", range: 3000 },
        { id: 3, name: "<10000", range: 10000 },
        { id: 4, name: "<20000", range: 20000 },
    ]

    $scope.searchArranges = [
        { id: 0, name: "Default" },
        { id: 1, name: "increase" },
        { id: 2, name: "decrease" },
    ]

    $scope.searchPrice = $scope.searchPrices[0]
    $scope.searchArrange = $scope.searchArranges[0]

    $scope.search = function () {
        $scope.searchProducts = $scope.ao.filter(function (product) {
            return product.price <= $scope.searchPrice.range
        })

        if ($scope.searchArrange.id >= 1) {
            if ($scope.searchArrange.id == 1) {
                $scope.searchProducts.sort(function (a, b) {
                    return a.price - b.price
                })
            } else {
                $scope.searchProducts.sort(function (a, b) {
                    return b.price - a.price
                })
            }
        }

        $scope.pageCount = Math.ceil($scope.searchProducts.length / 12)
        $scope.pageCurrent = 1
        $scope.begin = 0
    }

    $scope.begin = 0
    $scope.ao = array
    $scope.searchProducts = $scope.ao

    $scope.pageCount = Math.ceil($scope.searchProducts.length / 12)
    $scope.pageCurrent = 1

    $scope.first = function () {
        $scope.begin = 0
        $scope.pageCurrent = 1
    }

    $scope.prev = function (value) {
        $scope.begin = (value - 1) * 12
        $scope.pageCurrent = value
    }

    $scope.next = function (value) {
        $scope.begin = (value - 1) * 12
        $scope.pageCurrent = value
    }

    $scope.last = function () {
        $scope.begin = 12 * ($scope.pageCount - 1)
        $scope.pageCurrent = $scope.pageCount
    }
})


