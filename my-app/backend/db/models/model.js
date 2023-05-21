import { Schema, model } from "mongoose"
import schema from "../shemas/schema.js"


const modelResultSchema = new Schema(schema)

const ModelResult = model("ModelResult", modelResultSchema)

export default ModelResult