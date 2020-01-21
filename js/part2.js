function ConversionPart2() {

    var SignedDecimalInt = document.getElementById("2_SignedInt").value;
    var counter = 0;
    var outputValue = '';
    var newWorkingValue = SignedDecimalInt;

    while (newWorkingValue != 0){
      var nextDigit = Math.round(newWorkingValue % 2);
      newWorkingValue = newWorkingValue / 2;
      newWorkingValue = newWorkingValue - nextDigit/2;
      if (newWorkingValue < 1){
        newWorkingValue = 0;
      }
      outputValue = outputValue + nextDigit;
    }
    outputValue = reverseString(outputValue);

    //two's complementing!
    var outputValueTwosComplement = '';
    while(counter < outputValue.length){
      if (outputValue.charAt(counter) == 0){
        outputValueTwosComplement = outputValueTwosComplement + '1';
      }
      else {
        outputValueTwosComplement = outputValueTwosComplement + '0';
      }
      counter++;
    }


    //adding one
    var newCounter = outputValueTwosComplement.length - 1;
    var workingValue = outputValueTwosComplement;
    while (workingValue.charAt(newCounter)!= 0 && newCounter > 0){
      workingValue = Number(workingValue) - 1;
      workingValue = workingValue.toString();
      workingValue = workingValue.substring (0, newCounter);
      newCounter = newCounter -1;
    }
    if (outputValueTwosComplement.charAt(newCounter) == 0){
      outputValueTwosComplement = outputValueTwosComplement.replaceAt(newCounter, "1");
    }



    // Show the output on the screen
    FormatAndShowOutput([outputValue, outputValueTwosComplement, SignedDecimalInt], 2);
}

String.prototype.replaceAt=function(index, char) {
    var a = this.split("");
    a[index] = char;
    return a.join("");
}
