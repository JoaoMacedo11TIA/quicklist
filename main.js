const items = []

function addItem() {
    alert("adicionar mais itens")
    const itemName = document.querySelector("#item").value

    const item = {
        name: itemName,
        checked: false
    }

    items.push(item)

    console.log(items)
    
}