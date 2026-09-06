import { getData } from "../utils/getData.js"
import { parseJSONBody } from "../utils/parseJSONBody.js"
import { sendResponse } from "../utils/sendResponse.js"
import { addNewComment } from "../utils/addNewComment.js"
export async function handleGet(res){
    const data = await getData()
    sendResponse(res,200,"application/json",JSON.stringify(data))
}
export async function handlePost(req,res) {
    try{
        const parsedNewData = await parseJSONBody(req)
        await addNewComment(parsedNewData)
        sendResponse(res,201,"application/json",JSON.stringify(parsedNewData))
    }
    catch(err){
        sendResponse(res,400,"application/json",JSON.stringify({error: err}))
    }
}