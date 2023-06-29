const dbConnect = require('./mongodb');

const insert = async () => {
    const db = await dbConnect();
    const result = await db.insertMany(
        [
            { name: 'max 1', brand: 'micromax', price: '6000', category: 'mobile' },
            { name: 'max 2', brand: 'micromax', price: '7000', category: 'mobile' },
            { name: 'max 3', brand: 'micromax', price: '3000', category: 'mobile' }
        ]
    )
    if (result.acknowledged) {
        console.log("data insertted");
    }

}

insert();