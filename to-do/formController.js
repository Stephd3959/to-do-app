(function(){
    angular.module('app')
        .controller('formController', function(){
            var $ctrl = this;
            $ctrl.toDoList =['grocery shop', 'get laundry','get gas', 'mop'];

            $ctrl.add= function(){
                if ($ctrl.newItem){
                    $ctrl.toDoList.push($ctrl.newItem);
                }
                $ctrl.newItem ='';
                
            }
            $ctrl.delete= function(index){
                $ctrl.toDoList.splice(index,1);
            }
            $ctrl.onKeyDown = function (event){
                // console.log(event.key);
                if (event.key==='Enter'){
                    $ctrl.add();
                }
            };
        
        });
})();