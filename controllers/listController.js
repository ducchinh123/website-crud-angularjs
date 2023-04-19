window.listController = function ($scope, $http, $location, $routeParams) {

    $scope.title = "Danh sách tác giả";
    let apiUrl = "http://localhost:3000/author";

    $scope.getData = function () {

        $http.get(apiUrl)
            .then(function (response) {

                if (response.status == 200) {

                    $scope.listAuthor = response.data;

                    $scope.total = $scope.listAuthor.length;

                    for (let index = 0; index < $scope.listAuthor.length; index++) {

                        $scope.listAuthor[index].index = index + 1;

                        if ($scope.listAuthor[index].gender == "male") {

                            $scope.listAuthor[index].genderDetail = "Nam";
                        } else {

                            $scope.listAuthor[index].genderDetail = "Nữ";
                        }

                    }
                }
            })
    }

    $scope.getData();


    // Hàm xóa


    $scope.onDel = function (id) {

        if (confirm("❓ Bạn có chắc muốn xóa không")) {

            $http.delete(`${apiUrl}/${id}`)

                .then(function (response) {

                    if (response.status == 200) {

                        $location.path("tac-gia");
                    }
                })
        }

    }
}