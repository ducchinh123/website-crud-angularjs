window.addController = function ($scope, $http, $location, $routeParams) {

    $scope.title = "Thêm tác giả";
    let apiUrl = "http://localhost:3000/author";

    $scope.checkData = {

        name: false,
        gender: false,
        address: false,
        age: false,
        age2: false,
        age3: false
    }

    $scope.onSubmitForm = function () {


        // check name 

        if (!$scope.inputValue || !$scope.inputValue.name) {

            $scope.checkData.name = true;

        } else {

            $scope.checkData.name = false;
        }
        // check gender 

        if (!$scope.inputValue || !$scope.inputValue.gender) {

            $scope.checkData.gender = true;

        } else {

            $scope.checkData.gender = false;
        }
        // check address 

        if (!$scope.inputValue || !$scope.inputValue.address) {

            $scope.checkData.address = true;

        } else {

            $scope.checkData.address = false;
        }
        // check name 

        if (!$scope.inputValue || !$scope.inputValue.age) {

            $scope.checkData.age = true;
            $scope.checkData.age2 = false;
            $scope.checkData.age3 = false;

        } else if (parseInt($scope.inputValue.age) <= 0) {

            $scope.checkData.age2 = true;
            $scope.checkData.age = false;
            $scope.checkData.age3 = false;

        }
        else if (!$scope.inputValue.age.match(/^[0-9]+$/)) {

            $scope.checkData.age3 = true;
            $scope.checkData.age = false;
            $scope.checkData.age2 = false;
        }

        else {

            $scope.checkData.age = false;
            $scope.checkData.age2 = false;
            $scope.checkData.age3 = false;
        }



        // tổng kết 

        if ($scope.checkData.name == false && $scope.checkData.gender == false && $scope.checkData.address == false
            && $scope.checkData.age == false && $scope.checkData.age2 == false && $scope.checkData.age3 == false) {

            $http.post(apiUrl, {

                name: $scope.inputValue.name,
                gender: $scope.inputValue.gender,
                address: $scope.inputValue.address,
                age: $scope.inputValue.age
            })

                .then(function (response) {

                    if (response.status == 201) {

                        if (alert("✔ Thêm dữ liệu thành công") == undefined) {

                            $location.path("tac-gia");
                        }
                    }
                })
        }
    }
}