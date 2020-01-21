function ConversionPart1() {

    var UnsignedInt = document.getElementById("1_UnsignedInt").value;
    var UnsignedIntBaseFrom = parseInt(document.getElementById("1_UnsignedIntBaseToConvertFrom").value);
    var UnsignedIntBaseTo = parseInt(document.getElementById("1_UnsignedIntBaseToConvertTo").value);

      var outputValue = UnsignedInt;
      //convert to 10
      var value = 0;
      var workingInt = UnsignedInt;
      var counter = 0;
      while (counter <= UnsignedInt.length - 1){
          var digit = UnsignedInt.substring(counter, counter + 1);
          value = (value * UnsignedIntBaseFrom) + Number(digit);
          counter++;
      }
      outputValue = value;

      //converting from 10 into whatever desired base
      //Value := value to be converted;
      // REPEAT
      //      Next digit of result := Value MOD N;
      //      Value := Value DIV N;
      // UNTIL (Value = 0);

      var newFinalValue = '';
      var newWorkingValue = outputValue;
      while (newWorkingValue != 0){
        var nextDigit = Math.round(newWorkingValue % UnsignedIntBaseTo);
        newWorkingValue = newWorkingValue / UnsignedIntBaseTo;
        newWorkingValue = newWorkingValue - nextDigit/UnsignedIntBaseTo;
        if (newWorkingValue < 1){
          newWorkingValue = 0;
        }
        if (nextDigit == 10){
          nextDigit = 'A';
        }
        else if (nextDigit == 11){
          nextDigit = 'B';
        }
        else if (nextDigit == 12){
          nextDigit = 'C';
        }
        else if (nextDigit == 13){
          nextDigit = 'D';
        }
        else if (nextDigit == 14){
          nextDigit = 'E';
        }
        else if (nextDigit == 15){
          nextDigit = 'F';
        }
        newFinalValue = newFinalValue + nextDigit;
      }



  // Show the output on the screen
  FormatAndShowOutput([UnsignedInt, UnsignedIntBaseFrom, UnsignedIntBaseTo, reverseString(newFinalValue)], 1);

}

function reverseString (str){
  return str.split("").reverse().join("");
}
