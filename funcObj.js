//Interview question
// function interviewQues(job){
//     return function(name){
//         if(job == 'teacher'){
//             console.log(name + ', what subject can you teach')
//         }else if(job == 'designer'){
//             console.log('What is UX designer, '+ name)
//         }else{
//             console.log(`${name}, what can you do`);
//         }
//     }
// }
// interviewQues('teacher')('Ezekiel')

(function(){
    function Question(questn, ans, correctAns){
        this.questn = questn;
        this.ans = ans;
        this.correctAns = correctAns;
    }
    
    Question.prototype.displayQuestn = function(){
        console.log(this.questn)
        this.ans.forEach((ele, index) => console.log(index + ': '+ ele))
    }
    
    Question.prototype.checkAns = function(ans, callback){
        var sc;
        if(ans === this.correctAns){
            console.log('Correct Answer!!!');
            sc = callback(true)
        }else{
            console.log('Wrong Answer!!!')
            sc = callback(false)
        }

        this.displayScore(sc)
    }

    Question.prototype.displayScore = function(score){
        console.log('Your currect score is: '+ score)
        console.log('---------------------')
    }
    
    var q1 = new Question('Is Javascript The coolest language?', ['Yes', 'No'], 0)
    var q2 = new Question('What is the name of your instructor', ['Michael', 'John', 'Jonas'], 2)
    var q3 = new Question('What do you think of programming', ['Tedious', 'Fun', 'Hard', 'cool'], 1)
    
    var questions = [q1,q2,q3];

    function score(){
        var sc = 0
        return function(correct){
            if(correct){
                sc++
            }
            return sc;
        }
    }

    var keepScore = score();
    
    function nextQuestion(){

        var n = Math.floor(Math.random() * questions.length);
    
        questions[n].displayQuestn()
        
        var ansResponse =prompt('Select answer between 0 and 3')
        
        if(ansResponse !== 'exit'){
            questions[n].checkAns(parseInt(ansResponse), keepScore)
            // questions[n].displayScore(ansResponse)
            nextQuestion()
        }
    }

    nextQuestion()
})()
