'use strict';

angular.module('mean.system').controller('round4Controller', ['$scope', '$rootScope', '$stateParams', 'Global', 'Menus', 'championship','teams','sharedService',
    function($scope, $rootScope, $stateParams, Global, Menus,championship,teams,sharedService) {
        
        $scope.group = $stateParams.group;
        $scope.teams=teams;

        $scope.matchesPrevios=_.filter(championship.matches,function(match){
                return _.contains(["49","50","51","52","53","54","55","56"],match.id); 
        }); 

        console.log("PARTIDOS CUARTOS FINAL" + $scope.matches);
        $scope.showGroup = function(team){
            return team.group === $scope.group;
        };


        $scope.matches = _.filter(championship.matches,function(match){
            return _.contains(["57","58","59","60"],match.id); 
        })       
        .map(function(match){
                _.map($scope.matchesPrevios,function(matchPrevio){
                    if (matchPrevio.id===match.teamA.match){
                        match.teamA=matchPrevio.winner;
                    }
                    if (matchPrevio.id===match.teamB.match){
                        match.teamB=matchPrevio.winner;
                    }
                });
                return match;
        });

        $scope.$on('handleResult', function() {
            console.log("round3Controller");
            console.log($scope.matches);
            _.map($scope.matches,function(match){
                _.map($scope.matchesPrevios,function(matchPrevio){
                    if (matchPrevio.id===match.teamA.match){
                        match.teamA=matchPrevio.winner;
                    }
                    if (matchPrevio.id===match.teamB.match){
                        match.teamB=matchPrevio.winner;
                    }
                });
            });
        });

        $scope.handleWinA = function(match) {
            console.log('handleWinA');
            match.winner.flag=match.teamA.flag;
            sharedService.prepForBroadcast(match);
        };
        $scope.handleWinB = function(match) {
            console.log('handleWinB');
            match.winner.flag=match.teamB.flag;
            sharedService.prepForBroadcast(match);
        };
    }
]);
