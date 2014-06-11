'use strict';

angular.module('mean.system').controller('formController', ['$scope', '$rootScope', '$http', '$stateParams', 'Global', 'Menus', 'championship','teams','sharedService',
    function($scope, $rootScope, $http, $stateParams, Global, Menus,championship,teams,sharedService) {

    console.log('En formController');
    $scope.championship = championship.data;

    $scope.processForm = function() {
        console.log("enviando form");
        $http({
            method : 'POST',
            url : '/porra',
            data : {"campeonato":$scope.championship}
        });
    };

    }
]);
