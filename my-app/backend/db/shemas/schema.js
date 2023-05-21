import mongoose from "mongoose"

const { Schema } = mongoose

const schema = new Schema({
    requete: String,
    ipAddress: String,
    scanOption: String,
    optionalOption: String,
    resultScan: String,
    dateNow: {
        type: Date,
        default: Date.now,
    },
})

export default schema
