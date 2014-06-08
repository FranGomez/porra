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
/*            function(match){
                //console.log(team.name + " " + team.pos + " " + team.group + " " + pos + " " + group );
                
                return (team.pos==posA && team.group==groupA)||(team.pos==posB && team.group==groupB);
            })
*/
        });
        /*.map(function(match){
            console.log(match.teamA.name);
        });*/
        




        $scope.$on('handleResult', function() {
            _.chain($scope.teams)
            .filter(function(team){
                return team.name == sharedService.match.teamA.name || team.name == sharedService.match.teamB.name;
            })
            .map(function(team){
                var points=0;
                _.chain($scope.championship.matches)
                .filter(function(match){
                    return (match.group==team.group) && 
                            (match.teamA.name==team.name || match.teamB.name==team.name) && (match.result==team.name || match.result=='empate');
                })
                .map(function(match){
                    return match.result==team.name?points=points+3:points=points+1;
                })
                .map(function(){
                    team.points=points;
                });
            });
        });
    }
]);
