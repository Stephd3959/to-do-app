(function (){
    angular.module('app')
    .component('tasklist',{
        templateUrl: `taskList/taskList.html`,
        bindings: {
            toDoList: '<',
            filterBy: '<',
        },
        controller: 'tasklistController',

       
        
    });
})();