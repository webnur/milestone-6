
const sutdent = {
    name: 'Amena Sultana Nur',
    money: 5000,
    study: 'Math',
    subjects: ['caclulas', 'algebra', 'geometry'],
    exam: function(){
        return this.name + 'is participating in an exam';
    },
    improveExam: function(subject){
        this.exam();
        return `${this.name} is takeing improve exam on ${subject}`
    },
    tridDay: function(amount){
        this.money = this.money - amount;
        return this.money;
    }
}

const output = sutdent.exam();
// console.log(output)

const reExam = sutdent.improveExam('algebra')
// console.log(reExam)

const remaining = sutdent.tridDay(1000);
console.log(remaining)