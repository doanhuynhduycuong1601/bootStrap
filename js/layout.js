
var app = angular.module("myapp", ["ngRoute"])

app.controller("myctrl", function ($scope, $http) {
    $scope.categorys = []
    $scope.cart = []
    // $scope.reviewProduct = {}

    $http.get("js/list/category.js").then(function (response) {
        $scope.categorys = response.data
    })

    $scope.bannersHome = []
    $http.get("js/list/banner.js").then(function (response) {
        $scope.bannersHome = response.data
    })

    $scope.products = []
    $http.get("js/list/product.js").then(function (response) {
        // console.log(response.data)
        $scope.products = response.data
    })

    $scope.listDetailProducts = []
    $http.get("js/list/detailProduct.js").then(function (response) {
        $scope.listDetailProducts = response.data
    })

    $scope.quantityBuy = 1

    $scope.cartDecrease = function () {
        $scope.quantityBuy--
    }

    $scope.cartIncrease = function () {
        $scope.quantityBuy++
    }

    $scope.viewCart = function (product) {
        $scope.reviewProduct = angular.copy(product)
        $scope.$parent.quantityBuy = 1
    }

    $scope.addProductEnterCart = function (product, quantity) {
        document.getElementById("cartAddProduct").click()
        for (p of $scope.cart) {
            if (p.product.id === product.id) {
                p.quantity += quantity
                alert("Them số lượng sản phẩm thành công")
                return
            }
        }
        alert("Add Product successfully")
        $scope.cart.push({ product, quantity })
    }
})

app.config(function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "html/home/home.html",
            controller: "home"
        })

        .when("/introduce", {
            templateUrl: "html/introduce.html?" + Math.random(),
        })

        .when("/detailProduct/:id", {
            templateUrl: "html/detailProduct.html?" + Math.random(),
            controller: "detailProduct"
        })


        .when("/searchProduct/:value", {
            templateUrl: "html/search/typeProduct.html?" + Math.random(),
            controller: "search"
        })

        .when("/tk", {
            templateUrl: "html/tk.html?" + Math.random(),
            controller: "tk"
        })

        .when("/cart", {
            templateUrl: "html/cart.html?" + Math.random(),
            controller: "cart"
        })
});

app.run(function ($rootScope) {
    $rootScope.$on('$routeChangeStart', function () {
        $rootScope.loading = true;
    })

    $rootScope.$on('$routeChangeSuccess', function () {
        $rootScope.loading = false;
    })

    $rootScope.$on('$routeChangeError', function () {
        $rootScope.loading = false;
        alert("Loi tai template")
    })
})

app.controller("search", function ($scope, $routeParams, $route) {

})

app.controller("cart", function ($scope, $routeParams, $route) {
    $scope.totalBill = 0
    $scope.decrease = function (productOnCart) {
        if (productOnCart.quantity <= 0) {
            return
        }
        productOnCart.quantity--
        priceSelectSelected()
    }
    $scope.increase = function (productOnCart) {
        productOnCart.quantity++
        priceSelectSelected()
    }

    $scope.delete = function (index) {
        $scope.$parent.cart.splice(index, 1)
        priceSelectSelected()
    }

    $scope.select = function (productOnCart) {
        if (productOnCart.selected == undefined || productOnCart.selected == false) {
            productOnCart.selected = true
        } else {
            productOnCart.selected = false
        }
        priceSelectSelected()
    }

    function priceSelectSelected() {
        let money = 0;
        for (cart of $scope.$parent.cart) {
            if (cart.selected == true) {
                money += (cart.product.price * cart.quantity)
            }
        }
        $scope.totalBill = money
    }

    hay()
})
