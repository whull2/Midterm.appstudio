
let storeProducts = ['milk', 'cheese', 'cream', 'eggs']

let response = prompt('Do you want to add a new product or delete the last one in the array?(\'add\' or \'delete\')')

if (response == 'add'){
    storeProducts.push(prompt('Please name the new product').toLowerCase())
  }else if(response == 'delete'){
    storeProducts.pop()
  }else{
    alert('Please enter a valid response')
    }
  
i = 0
while(i <= storeProducts.length){
  console.log(storeProducts[i])
  i++}
