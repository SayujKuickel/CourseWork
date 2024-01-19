function main(){
    
}

function getProductId(){
    const quueryString = window.location.search;
    const id = quueryString.split('=')[1]
    console.log(id);
    return id;

}
getProductId()