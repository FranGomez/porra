'use strict';

angular.module('mean.system').controller('round2Controller', ['$scope', '$rootScope', '$stateParams', 'Global', 'Menus', 'championship','teams','sharedService',
    function($scope, $rootScope, $stateParams, Global, Menus,championship,teams,sharedService) {
        
        $scope.group = $stateParams.group;
        $scope.championship = championship.data;
        $scope.matchesPrevios=_.filter($scope.championship.matches,function(match){
            return _.contains(["57","58","59","60"],match.id); 
        }); 
        $scope.matches = _.filter($scope.championship.matches,function(match){
            return _.contains(["61","62"],match.id); 
        })

        function updateRound(){
            _.map($scope.matches,function(match){
                _.map($scope.matchesPrevios,function(matchPrevio){
                    if (matchPrevio.id==match.teamA.match){
                        match.teamA.name=matchPrevio.winner.name;
                        match.teamA.flag=matchPrevio.winner.flag;
                    }
                    if (matchPrevio.id==match.teamB.match){
                        match.teamB.name=matchPrevio.winner.name;
                        match.teamB.flag=matchPrevio.winner.flag;
                    }
                });
            });
        };


        $scope.showRound = function(match){
            return _.contains(["61","62"],match.id);
        };

        //Evento proviene de round8, calcula round4 de final
        $scope.$on('handleRound4', function() {
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
