
var app = angular.module('msDefault');


app.controller('WorldClockCtrl', ['$scope', '$interval', function($scope, $interval) {

    $scope.model = {};

    $scope.model.TimeDelta = 0;
    $scope.model.TimeDeltaToronto = 0;
    $scope.model.TimeDeltaLondon = -4;
    $scope.model.TimeDeltaSydney = -12;

    //var date = new Date();
    //updateTime();


    $interval(updateTime, 1000);

    $scope.setBaseTime = function(){
    	$scope.model.TimeDelta = $scope.model.InputBaseToronto.getHours() - (new Date($scope.model.TimeToronto).getHours());
    }


    $scope.changeDeltaTime = function(city){
    	if(city === 'london'){
    		$scope.model.TimeDeltaLondon = ($scope.model.InputDeltaLondon != null) ? -$scope.model.InputDeltaLondon: $scope.model.TimeDeltaLondon;
    		$scope.model.InputDeltaLondon = null;
    	} else if(city === 'sydney'){
    		$scope.model.TimeDeltaSydney = ($scope.model.InputDeltaSydney != null) ? -$scope.model.InputDeltaSydney: $scope.model.TimeDeltaSydney;
    		$scope.model.InputDeltaSydney = null;
    	} else if(city === 'toronto'){
    		$scope.model.TimeDeltaSydney = ($scope.model.InputDeltaSydney != null) ? -$scope.model.InputDeltaSydney: $scope.model.TimeDeltaSydney;
    		$scope.model.InputDeltaSydney = null;
    	}
    }


	function updateTime() {
        $scope.model.BaseTime = new Date();
        $scope.model.TimeToronto = setTimeDifference($scope.model.BaseTime, $scope.model.TimeDeltaToronto + $scope.model.TimeDelta);
    	$scope.model.TimeLondon  = setTimeDifference($scope.model.BaseTime, $scope.model.TimeDeltaLondon + $scope.model.TimeDelta);
	    $scope.model.TimeSydney  = setTimeDifference($scope.model.BaseTime, $scope.model.TimeDeltaSydney + $scope.model.TimeDelta);

    }

    function setTimeDifference(baseTime, h){
    	return baseTime.getTime() + h*60*60*1000;
    }

}]);