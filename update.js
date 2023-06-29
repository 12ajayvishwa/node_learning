const dbConnect = require('./mongodb');

const updateData = async () => {
    let data = await dbConnect();
    let result = await data.updateMany(
        {name:"note 5"},
        {$set: {name:'max pro 1',price:5000}}
    )
    if(result.acknowledged){
        console.warn("Record updated")
    }
    
}

updateData();