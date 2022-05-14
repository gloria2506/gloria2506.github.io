let unit = document.getElementById("unit-el").textContent
//remove the text content and see wqhat happens 

function length(){
    let metFt = (unit * 3.28084).toFixed(3); //meters to feet
    let ftMet = (unit / 3.28084).toFixed(3); //feets to meters

    resultMetFt = unit + " meters" + " = " + metFt + " feet"
    resultFtMet = unit + " feet" + " = " + ftMet + " meters"
    lengthResult.textContent = resultMetFt + " | " + resultFtMet

}
length()

function volume(){
    let ltGal = (unit * 0.264172).toFixed(3); //liters to gallons
    let galLt = (unit / 0.264172).toFixed(3); //gallons to liters

    resultLtGal = unit + " liters" + " = " + ltGal + " gallons"
    resultGalLt = unit + " gallons" + " = " + galLt + " liters"
    volumeResult.textContent = resultLtGal + " | " + resultGalLt

}
volume()

function mass(){
    let kgPnd = (unit * 2.20462262).toFixed(3); //liters to gallons
    let pndKg = (unit / 2.20462262).toFixed(3); //gallons to liters

    resultKgPnd = unit + " kilos" + " = " + kgPnd + " pounds" //kg to pounds
    resultPndKg = unit + " pounds" + " = " + pndKg + " kilos" //pounds to kg
    massResult.textContent = resultKgPnd + " | " + resultPndKg

}
mass()