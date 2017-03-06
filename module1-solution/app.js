(function(){
    'use strict';

    angular.module("LunchCheck",[])
        .controller("LunchController",LunchController);

    LunchController.$inject=["$scope"];

    function LunchController($scope){
        $scope.list="";
        $scope.message="";

        $scope.testText=function() {
            var aux = calculateMessage($scope.list);
            $scope.message = aux;
        }


        function calculateMessage(lista){
            var text="";
            if(lista.length>0) {
                var array = lista.split(",");
                //count array items
                var count=0;
                for(var i=0;i<array.length;i++){
                    if(array[i].trim().length>0) count++;
                }
                if(count<=3) {
                    document.querySelector(".form-group.message")
                        .style.color="green";
                    text="Enjoy!";
                }
                else {
                    document.querySelector(".form-group.message")
                        .style.color="red";
                    text="Two Much!";
                }
                document.getElementById("lunch-menu").style.borderColor="green";
            }
            else{
                document.querySelector(".form-group.message")
                    .style.color="black";
                text="Please enter data first";
                document.getElementById("lunch-menu").style.borderColor="red";
            }
            return text;
        }

    }
})();