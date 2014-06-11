'use strict';

angular.module('mean.system').controller('porraController', ['$scope', '$rootScope', '$stateParams', 'Global', 'Menus', 'championship','getchampionship','teams','sharedService',
    function($scope, $rootScope, $stateParams, Global, Menus,championship,getchampionship,teams,sharedService) {
        
        $scope.championship=championship;
        console.log("porraController"+$scope.championship.matchs.length);


    }
]);
