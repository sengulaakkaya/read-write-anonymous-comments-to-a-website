import { getData } from "./getData.js"
import path from "node:path"
import fs from "node:fs/promises"
export async function addNewComment(newData){
    try{
        const data = await getData()
        data.push(newData)
        const pathJSON = path.join("data","data.json")
        await fs.writeFile(pathJSON , JSON.stringify(data ,null ,2),"utf-8")
    }catch(err){
        throw new Error(err)
    }
}