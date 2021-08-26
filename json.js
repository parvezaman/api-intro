// javascript object notation = JSON
const user = {id: 11, name: 'My Name', job: 'actor'};
const stringified = JSON.stringify(user);
// console.log('original ', user);
// console.log('stringified ', stringified);


const shop= {
    name : 'protidiner bazar',
    address : '25/53 Hurmoti Road, zangshal',
    profit : 15000,
    products : ['laptop', 'mobile', 'pepsi'],
    owner : {
        name : "manus ekjon",
        profession: 'shopkeeper',
        favourite: 'sports'
    },

    isExpensive : false
}

const shopStringified = JSON.stringify(shop);
console.log(shop);
console.log(shopStringified);

// now lets get that back in form again 
const converted = JSON.parse(shopStringified);
console.log(converted);