$(document).ready(function(){
    $("#calculate").click(function(){
        //button is clicked

        //get form data

        let weight=$("input[name=weight]").val();
        let height = $("input[name=height]").val();

        let bmi = weight/(height^2);
        bmi=Math.round(10*bmi)/10;
        let result="";
        

        if(bmi<18.5){
            result="underweight";
        }

        else if(18.5<=bmi<24){
            result="average weight";

        }

        else if(25<=bmi<30){
            result="overweight";

        }

        else if(bmi>31){
            result="obese";

        }

        let summary = "Your results are in. "+"You have a BMI of: "+bmi+". At this BMI, you are considered to be "+result+".";
        $('#summary').html(summary);
    });
    
    $("#reset").click(function(){

        summary="";
        $('#summary').html(summary);

    });

});