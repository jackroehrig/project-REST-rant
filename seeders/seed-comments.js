const db = require('../models')

async function seed(){
    let comment = await db.Comment.create({
        author: "Kenny",
        rant: false,
        stars: 5.0,
        content: 'Great service, great food, and a great time!'
    })

    await db.Place.updateOne(
        {name: 'Draft House Bar'},
        {$push: {comments: comment.id}}
    )
    
    process.exit()
}

seed()

