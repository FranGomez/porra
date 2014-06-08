'use strict';

angular.module('mean.system').controller('round8Controller', ['$scope', '$rootScope', '$stateParams', 'Global', 'Menus', 'championship','teams','sharedService',
    function($scope, $rootScope, $stateParams, Global, Menus,championship,teams,sharedService) {
        
        $scope.group = $stateParams.group;
        $scope.teams=teams;

        $scope.showGroup = function(team){
            return team.group === $scope.group;
        };
     
        $scope.matches = _.filter(championship.matches,function(match){
            return _.contains(["49","50","51","52","53","54","55","56"],match.id); 
        })
        .map(function(match){
            var posA = match.teamA.pos;
            var groupA = match.teamA.group;
            var posB = match.teamB.pos;
            var groupB = match.teamB.group;
            //console.log("MATCH: " + match.teamA.name);
            _.map($scope.teams,function(team){
                if (team.pos==posA && team.group==groupA){
                    console.log("EQUIPO CLASIFICADO" + team.name);
                    match.teamA.name=team.name;
                    match.teamA.flag=team.flag;
                }
                if (team.pos==posB && team.group==groupB){
                    console.log("EQUIPO CLASIFICADO " + team.name);
                    match.teamB.name=team.name;
                    match.teamB.flag=team.flag; 
                }
                
            });
            return match;
        });

        




        $scope.$on('handleResult', function() {
             $scope.matches = _.filter(championship.matches,function(match){
            return _.contains(["49","50","51","52","53","54","55","56"],match.id); 
        })
        .map(function(match){
            var posA = match.teamA.pos;
            var groupA = match.teamA.group;
            var posB = match.teamB.pos;
            var groupB = match.teamB.group;
            //console.log("MATCH: " + match.teamA.name);
            _.map($scope.teams,function(team){
                if (team.pos==posA && team.group==groupA){
                    console.log("EQUIPO CLASIFICADO" + team.name);
                    match.teamA.name=team.name;
                    match.teamA.flag=team.flag;
                }
                if (team.pos==posB && team.group==groupB){
                    console.log("EQUIPO CLASIFICADO " + team.name);
                    match.teamB.name=team.name;
                    match.teamB.flag=team.flag; 
                }
                
            });
            return match;
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
