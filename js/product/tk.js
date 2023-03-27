app.controller("tk", function ($scope) {
    hay()
})

app.controller("order", function ($scope) {
    $scope.orders = listOder
    $scope.ordersDetails = listOrderDetail
    $scope.addDetailBill = function (value) {
        let ao = value
        value.product = $scope.ordersDetails.filter(function (product) {
            return product.idBill == ao.idBill
        })
        console.log(value)
        console.log($scope.orders)
    }
})