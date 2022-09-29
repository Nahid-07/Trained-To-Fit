const addToDb = id =>{
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }

    // add quantity
    const quantity = shoppingCart[id];
    if(quantity){
        const newQuantity = quantity;
        shoppingCart[id] = newQuantity;
    }
    else{
        shoppingCart[id] = "added";
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}
export default addToDb