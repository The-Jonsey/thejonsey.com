let num = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
$("#submit").click(() => {
    $("#output").empty();
    let header = document.createElement("h2");
    header.innerText = "Click on a block of text to copy it";
    $("#output")[0].appendChild(header);
    let inp = $("#input").val().replace(/\n/g, " ").split(""); //turn buffer input to an actual string, then split it
    let out = [];
    inp.forEach((chr) => {
        let tempout = "";
        if ( /[A-Za-z]/.test(chr)) //should be obvious
            tempout += ":regional_indicator_" + chr.toLowerCase() + ": ";
        else if (!isNaN(parseInt(chr)))
            tempout += ":" + num[parseInt(chr)] + ": ";
        else if (chr === " ")
            tempout += "    ";
        else if (chr === ".")
            tempout += ":record_button: ";
        else if (chr === "!")
            tempout += ":exclamation: ";
        else if (chr === "?")
            tempout += ":question: ";
        else
            tempout += chr;
        if ((out.join("").length + tempout.length) > 2000 && !$("#ignore").prop("checked")) { //runs when array is over 2000 chars, then splits it on the nearest space
            let temparray = [];
            let nospacefound = true;
            while (nospacefound) {
                if (out[out.length - 1] === "    ") {
                    nospacefound = false;
                }
                else {
                    temparray.push(out.pop());
                }
            }
            temparray = temparray.reverse();
            temparray.push(tempout);
            let p = document.createElement("p");
            p.innerText = out.join("");
            p.onclick = () => {
                document.execCommand("copy")
            };
            p.addEventListener("copy", function(event) {
                event.preventDefault();
                if (event.clipboardData) {
                    event.clipboardData.setData("text/plain", p.textContent);
                    console.log(event.clipboardData.getData("text"))
                }
            });
            $("#output")[0].appendChild(p);
            $("#output")[0].appendChild(document.createElement("br"));
            console.log(out.join(""));
            console.log("\r\n");
            out = temparray;
        } else
            out.push(tempout);
    });
    let p = document.createElement("p");
    p.innerText = out.join("");
p.onclick = () => {
                document.execCommand("copy")
            };
            p.addEventListener("copy", function(event) {
                event.preventDefault();
                if (event.clipboardData) {
                    event.clipboardData.setData("text/plain", p.textContent);
                    console.log(event.clipboardData.getData("text"))
                }
            });
    $("#output")[0].appendChild(p);
    $("#output")[0].appendChild(document.createElement("br"));
    console.log(out.join(""));
});
