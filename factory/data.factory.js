(function (){
    angular.module('app')

    .factory('DataFactory', function(){
        var toDoList =['grocery shop', 'laundry','get gas', 'mop'];

        return {
            setData: function(data){
                toDoList=data;
            },
            getData: function(){
             return toDoList;
            }
        }
    });
}) ();