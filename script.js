
    let count =localStorage.length;
    let p = document.getElementById("p");
    let btn2 = document.getElementById("btn2");


    btn2.addEventListener("click",()=>{
        let input = document.getElementById("input").value;
        console.log(input)

        let regex = new RegExp(input,"gi");
        p.innerHTML = (p.textContent).replace(regex,"<mark>$&</mark>")
    })








//highlight button event
function highlight(){

    if(window.getSelection().toString() !== ""){
        const sel = window.getSelection()
        console.log(sel.toString());
        console.log(sel.rangeCount)
        let range = sel.getRangeAt(0);
        let startOffset = range.startOffset;
        let endOffset = range.endOffset;

        console.log(startOffset)
        console.log(endOffset)
        console.log(range);
        document.designMode = 'on';
        let color = document.getElementById("colors").value;
        document.execCommand("BackColor", false, color);
        document.designMode = "off";


        localStorage.setItem(count.toString(),sel.toString())
        count++;
        console.log(document.getSelection().toString())
        console.log(document.body);


    }else{
        alert("you need to select something!");
    }

}
