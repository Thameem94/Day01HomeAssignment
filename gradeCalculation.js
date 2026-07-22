let studentscore = 70
function getgradeCalculation(){
    switch (true) {
        case (studentscore>90):
            console.log("grade d");
            break;
        case (studentscore>=75):   
            console.log("grade a");
            ("grade C");
            break;
        case (studentscore<=70):
            console.log("grade b");
            break;
        default:
            console.log("grade z");
            break;
    }
}
getgradeCalculation()