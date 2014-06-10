'use strict';

angular.module('mean.system').controller('round8Controller', ['$scope', '$rootScope', '$stateParams', 'Global', 'Menus', 'championship','teams','sharedService',
    function($scope, $rootScope, $stateParams, Global, Menus,championship,teams,sharedService) {
        
        //$scope.championship=championship;
        $scope.group = $stateParams.group;
        $scope.teams = teams;
        $scope.matches=
        _.filter(championship.matches,function(match){
                return _.contains(["49","50","51","52","53","54","55","56"],match.id); 
        });

        $scope.showGroup = function(match){
            return match.group === $scope.group;
        };
     
        function updateRound(){
            _.chain($scope.matches)
            .each(function(match){
                _.each($scope.teams,function(team){
                    if (team.pos==match.teamA.pos && team.group == match.teamA.group){
                        match.teamA.name=team.name;
                        match.teamA.flag=team.flag;
                    }
                    if (team.pos==match.teamB.pos && team.group == match.teamB.group){
                        
                        match.teamB.name=team.name;
                        match.teamB.flag=team.flag;
                    }
                });
            });
        };

        $scope.showRound = function(match){
            return _.contains(["49","50","51","52","53","54","55","56"],match.id);
        };

        //Evento proviene de modificacion en la clasificacion de un grupo
        //Calcula round8.
        $scope.$on('handleClassification', function() {
            updateRound();
        });

        $scope.setWinner = function(match,team) {
            match.winner.flag=team.flag;
            sharedService.prepForBroadcastRound4(match);
        };
        
        $scope.isWinner = function(match,team){
            return match.winner.name==team.name;
        };

        updateRound();
    }
]);
