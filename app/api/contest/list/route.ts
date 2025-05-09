

async function GET(req: Request){
    const title = await req.body;
    
    if(!title){
        return null;
    }
}