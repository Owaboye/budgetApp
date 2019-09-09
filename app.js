//Define the budget controller
const budgetController = (function(){
    //Expenses constructor
    var Expenses = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    };

    //Income constructor
    var Income = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    };

    //Data
    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        total: {
            exp: 0,
            inc: 0
        }
    };

    return {
        addItem: function(type, desc, val){
            var newItem, ID;

            //Create id
            if(data.allItems[type].length > 0){
                ID =  data.allItems[type][data.allItems[type].length - 1].id + 1;
            }else{
                ID = 0;
            }

            //Add item to expenses and Income
            if(type === 'exp'){
                newItem = new Expenses(ID, desc, val)
            }else if(type === 'inc'){
                newItem = new Income(ID, desc, val)
            }
            data.allItems[type].push(newItem);
            return newItem;
        },

        testingData: function(){
            return data;
        }
    }
   
})()

//define the ui controller
const UIController = (function(){
    var domString = {
        inputType: '.add__type',
        inputDesc: '.add__description',
        inputValue: '.add__value',
        inputBtn:    '.add__btn'
    }
    
    return {
       getInput: function(){
           return {
             type: document.querySelector(domString.inputType).value,
             description: document.querySelector(domString.inputDesc).value,
             value: document.querySelector(domString.inputValue).value
           }
           
       },

       getDomStrings: function(){
           return domString;
       }
    }
})()

//Global App Controller
const Controller = (function(budgetCrtl, UICtrl){

   var setUpEventListeners = function(){
       var DOM = UICtrl.getDomStrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', contlAddItem);

        document.addEventListener('keypress', function(e){
            if(e.keyCode == '13' || e.which == '13'){
                contlAddItem()
            }
        });
    }

    var contlAddItem = function(){
        var inputFields, newItem;
        //get the input field from the form
        var inputFields = UICtrl.getInput()
        // console.log(inputFields)

        
        //add item to the budget contoller
       newItem =  budgetCrtl.addItem(inputFields.type, inputFields.description, inputFields.value)
        console.log(newItem)
        //add item to the ui

        //calculate the budget

        //update the budget controller ui
        
    }

    return {
        init: function(){
            console.log('Application has started....')
            return setUpEventListeners();
        }
        
    }
  
})(budgetController, UIController)

Controller.init()

