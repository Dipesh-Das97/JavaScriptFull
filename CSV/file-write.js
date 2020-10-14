const ObjectsToCsv = require('objects-to-csv')
const obj = [{
    name : "Sahil",
    id : "sahildas97",
    password : "123456"
}]
const csv = new ObjectsToCsv(obj)

const write = async () => {
    await csv.toDisk('./list.csv')
}

write()