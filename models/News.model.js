const mongoose = require("mongoose")

const newSchema = mongoose.Schema({
    HeadLine:{
        type: String,
        required: true,
    },
    text: String,
    category: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Category",
        required: true,
    },
})
const News = mongoose.model("News", newsSchema)