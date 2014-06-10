'use strict';

angular.module('mean.system').controller('round4Controller', ['$scope', '$rootScope', '$stateParams', 'Global', 'Menus', 'championship','teams','sharedService',
    function($scope, $rootScope, $stateParams, Global, Menus,championship,teams,sharedService) {
        
        $scope.group = $stateParams.group;

        $scope.matchesPrevios=_.filter(championship.matches,function(match){
            return _.contains(["49","50","51","52","53","54","55","56"],match.id); 
        }); 
        $scope.matches = _.filter(championship.matches,function(match){
            return _.contains(["57","58","59","60"],match.id); 
        })

        function updateRound(){
            _.map($scope.matches,function(match){
                console.log("match" + match.teamA);
                _.map($scope.matchesPrevios,function(matchPrevio){
                    console.log("matchPrevio" + matchPrevio.id + "match" + match.teamA);
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
            return _.contains(["57","58","59","60"],match.id);
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
