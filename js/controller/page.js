define(['app'],function(app){
    app.registerController('ctrl.page',function($scope){
        var vm = $scope.vm = {};
        vm.title = '我擦';
    });
});