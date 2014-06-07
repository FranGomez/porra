'use strict';

angular.module('mean.system').controller('formController', ['$scope', '$rootScope', '$stateParams', 'Global', 'Menus', 'championship',
    function($scope, $rootScope, $stateParams, Global, Menus,championship) {
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
        championship.fetch().then(function(data) {
            $scope.championship=data;
            console.log('CHAMPIONSHIP' + $scope.championship.year);
        });

        $scope.showGroup = function(match){

            return match.group === $scope.group;
        };
        

    }
]);
