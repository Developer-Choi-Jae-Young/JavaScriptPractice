function calculator() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);

    switch(document.getElementById("op").value) {
        case "+" :
            document.getElementById("result").value = num1 + num2;
            break;

        case "-" :
            document.getElementById("result").value = num1 - num2;
            break;

        case "*" :
            document.getElementById("result").value = num1 * num2;
            break;

        case "/" :
            if (num2 == 0) {
                alert('0으로 나눌 수 없습니다. 다시 시도해주세요!');
                document.getElementById("num2").focus();
                return;
            } else {
                document.getElementById("result").value = num1 / num2;
            }

            break;

        case "%" :
            if (num2 == 0) {
                alert('0으로 나눌 수 없습니다. 다시 시도해주세요!');
                document.getElementById("num2").focus();
                return;
            } else {
                document.getElementById("result").value = num1 % num2;
            }
            break;
    }
}