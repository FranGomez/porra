'use strict';

angular.module('mean.system').controller('groupController', ['$scope', '$rootScope', '$stateParams', 'Global', 'Menus', 'championship','teams','sharedService',
    function($scope, $rootScope, $stateParams, Global, Menus,championship,teams,sharedService) {
            // we will store all of our form data in this object
        $scope.formData = {};
        $scope.matches = [
            {id:1,result:'argentina',teamA:'argentina',teamB:'brasil'},
            {id:2,result:'chile',teamA:'chile',teamB:'mejico'},
            {id:3,result:'argentina',teamA:'argentina',teamB:'mejico'},
            {id:4,result:'chile',teamA:'chile',teamB:'brasil'},
            {id:5,result:'argentina',teamA:'argentina',teamB:'chile'},
            {id:6,result:'mejico',teamA:'mejico',teamB:'brasil'}
        ];
        
        //$scope.$stateParams = $stateParams;

        $scope.group = $stateParams.group;
        // function to process the form
        $scope.processForm = function() {
            alert('awesome!');  
        };
        console.log('GRUPO ' + $scope.group);
        //$scope.group=$stateParams.group.id;
/*        championship.fetch().then(function(data) {
            $scope.championship=data;
            console.log('CHAMPIONSHIP' + $scope.championship.year);
        });

        teams.fetch().then(function(data) {
            $scope.teams=data;
            console.log('TEAMS' + $scope.teams);
        });*/
        $scope.championship=championship;
        $scope.teams=teams;
        $scope.showGroup = function(match){
            return match.group === $scope.group;
        };

        $scope.newValue = function() {
            console.log($scope.championship.matches[0].result);
            console.log($scope.teams[0].points);
            $scope.teams[0].points="3";
        };
        
        $scope.handleClick = function(match) {
            console.log("Pasada por handleClick");
            sharedService.prepForBroadcast(match);
        };

    }
]);
