var mark={
    fullName:'Mark Henry',
    mass:40,
    height:5,
    calculateBmi(){
        return this.mass/(this.height**2);
    }
}
var john={
    fullName:'John Doe',
    mass:50,
    height:6,
    calculateBmi(){
        return this.mass/(this.height**2);
    }
}

var markBmi=mark.calculateBmi()
var johnBmi=john.calculateBmi()

if(markBmi>johnBmi){
    console.log(`${mark.fullName} has highest BMI of ${markBmi}`);
}else if(markBmi<johnBmi){
    console.log(`${john.fullName} has highest BMI of ${johnBmi}`);
}else{
    console.log(`Both have sami BMI`);
}