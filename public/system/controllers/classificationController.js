'use strict';

angular.module('mean.system').controller('classificationController', ['$scope', '$rootScope', '$stateParams', 'Global', 'Menus', 'championship','getchampionship','teams','sharedService',
    function($scope, $rootScope, $stateParams, Global, Menus,championship,getchampionship,teams,sharedService) {
        
        $scope.championship=championship.data;
        $scope.group = $stateParams.group;

        //$scope.championship=championship;
        $scope.teams=teams.filter(function(team){
            return team.group === $scope.group;
        });

        $scope.getGroup = function(team){
            return team.group === $scope.group;
        };



        updatePoints($scope.teams,updatePositions);

        //Evento proviene de la modificacion de un partido de fase1
        //Calcula la clasificacion de un grupo
        $scope.$on('handleResult', function() {

            updatePoints($scope.teams,updatePositions);
            
            sharedService.prepForBroadcastClassification(sharedService.match);
        });

        function updatePoints(teams,callback){
            _.chain(teams)
            .each(function(team){
                var points=0;
                _.chain($scope.championship.matches)
                .filter(function(match){
                    /*if (match.group==team.group){
                    console.log("match.group:" + match.group + " team.group:" + team.group + "\n"
                        + "team.name:" + team.name + " match.teamA.name:" + match.teamA.name + " match.teamA.name:" + match.teamB.name + "\n"
                        + "match.winner.name:" + match.winner.name);
                    }*/
                    return  match.group==team.group &&
                             (match.teamA.name==team.name || match.teamB.name==team.name) &&
                              (match.winner.name==team.name || match.winner.name=='empate');
                })
                .each(function(match){
                    console.log("RESULTADO"+ match.winner.name);
                    match.winner.name==team.name?points=points+3:points=points+1;
                    team.points=points;
                });
                
                console.log("TEAMS UPDATEAR POINTS " + points);
            });
            callback(teams);
        };

        function updatePositions(teams){
            console.log("TEAMS UPDATEAR POSITION " + teams.length);
            var position=0;
            _.chain(teams)
            .sortBy(function(team){
                return team.points;
            })
            .reverse()
            .each(function(team){
                position=position+1;
                team.pos=position;
            });
        };
    }
]);
