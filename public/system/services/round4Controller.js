'use strict';

angular.module('mean.system').controller('round4Controller', ['$scope', '$rootScope', '$stateParams', 'Global', 'Menus', 'championship','teams','sharedService',
    function($scope, $rootScope, $stateParams, Global, Menus,championship,teams,sharedService) {
        
        $scope.group = $stateParams.group;
        $scope.teams=teams;

        $scope.showGroup = function(team){
            return team.group === $scope.group;
        };
     
        

        $scope.$on('handleResult', function() {
            console.log("handleResult");
            var matchesPrevios=_.filter(championship.matches,function(match){
                    return _.contains(["49","50","51","52","53","54","55","56"],match.id); 
            }); 
            $scope.matches = _.filter(championship.matches,function(match){
                return _.contains(["57","58","59","60"],match.id); 
            })
            .map(function(match){
                //console.log("MATCH: " + match.teamA.name);
                _.map(matchesPrevios,function(matchPrevio){
                    console.log("MATCHES PREVIOS WINNER" + matchPrevio.winner);
                    /*if (team.pos==posA && team.group==groupA){
                        console.log("EQUIPO CLASIFICADO" + team.name);
                        match.teamA.name=team.name;
                        match.teamA.flag=team.flag;
                    }
                    if (team.pos==posB && team.group==groupB){
                        console.log("EQUIPO CLASIFICADO " + team.name);
                        match.teamB.name=team.name;
                        match.teamB.flag=team.flag; 
                    }*/
                    
                });
                return match;
            });
        });

        $scope.handleClick = function(match) {
            console.log("Pasada por handleClick");
            sharedService.prepForBroadcast(match);
        };
    }
]);
