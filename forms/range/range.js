
numbersArray = []

go.onclick=function(){
    let num1 = Number(first.value)
    let num2 = Number(two.value)
    let i = num1
    while(i<=num2){
        numbersArray.push(i)
        i++}
    let x=0
    while(x<numbersArray.length){
      lbl1.value = numbersArray[x]
      x++}
    }

    