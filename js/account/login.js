app.controller("account", function ($scope) {
    $scope.logins = function (value) {
        if (value) {
            document.getElementById('btn-close-login').click()
            document.getElementById('liveToast').style.display = "block"
            setTimeout(
                function () {
                    document.getElementById('liveToast').style.display = 'none'
                }, 3000)
        }
    }
})

app.directive('evenLoginuser', function () {
    return {
        require: 'ngModel',
        link: function (scope, element, attr, mCtrl) {
            function fnValidate(value) {
                let msg = getMultiMinMaxLength(value, "User", 10, 20)
                msg == "" ? mCtrl.$setValidity('charE', true) : mCtrl.$setValidity('charE', false)
                scope.errorLoginUser = msg
                return value
            }
            mCtrl.$parsers.push(fnValidate)
        }
    }
})

app.directive('evenLoginpass', function () {
    return {
        require: 'ngModel',
        link: function (scope, element, attr, mCtrl) {
            function fnValidate(value) {
                let msg = getMultiMinMaxLength(value, "Pass", 10, 20)
                msg == "" ? mCtrl.$setValidity('charE', true) : mCtrl.$setValidity('charE', false)
                scope.errorLoginPass = msg
                return value
            }
            mCtrl.$parsers.push(fnValidate)
        }
    }
})