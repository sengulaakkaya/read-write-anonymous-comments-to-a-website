import path from "node:path"
import fs from "node:fs/promises"

export async function getData(){
    try{
        //const data = await fs.readFile(path.join(base,"data",`${file}.json`),"utf-8")//absolute path
        const data = await fs.readFile(path.join("data","data.json"),"utf-8") // relative path
        return await JSON.parse(data)
    }catch(err){
        console.log(err)
        return []
    } 
}