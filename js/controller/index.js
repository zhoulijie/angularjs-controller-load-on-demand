define(['app'],function(app){
    app.registerController('ctrl.index',function($scope){
        var vm = $scope.vm = {};
        vm.title = '我去';
    });
});