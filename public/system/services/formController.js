'use strict';

angular.module('mean.system').controller('formController', ['$scope', '$rootScope', '$http', '$stateParams', 'Global', 'Menus', 'championship','teams','sharedService',
    function($scope, $rootScope, $http, $stateParams, Global, Menus,championship,teams,sharedService) {

    	$scope.championship=championship;

         $scope.formData = {};
    


    $scope.processForm = function() {
        $http({
            method : 'POST',
            url : '/articles/createporra',
            data : $scope.championship
        }); 
    };

    }
]);
