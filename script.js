const text = document.getElementById("text");

const list = ["what is your name", "how old are you", "your favorite food", "what is your profession"]

function Check() {
    let flag = 0;
    for (let i = 0; i < list.length; i++){
        if (text.value == list[i]) {
            alert("accepted");
            flag = 1;
            break;
        }
    }
    if (flag == 0) {
        alert("declined-{the input is not in list}");
    }
}

function declined() {
    text.value = "";
}
