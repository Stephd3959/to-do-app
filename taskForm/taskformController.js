(function(){
    angular.module('app')
        .controller('taskformController', function(DataFactory){
            var $ctrl = this;
            $ctrl.toDoList =DataFactory.getData();

            $ctrl.add= function(){
                if ($ctrl.newItem){
                    $ctrl.toDoList.push($ctrl.newItem);
                    DataFactory.setData($ctrl.toDoList);
                    console.log($ctrl.toDoList);
                }
                $ctrl.newItem ='';
                
            }
            
            $ctrl.onKeyDown = function (event){
                // console.log(event.key);
                if (event.key==='Enter'){
                    $ctrl.add();
                }
            };
        
        });
})();