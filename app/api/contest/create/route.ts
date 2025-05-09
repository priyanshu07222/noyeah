

export async function POST(req: Request){
    const title = await req.body;
    
    if(!title){
        return null;
    }

    Response.json({
        message: "created successfully"
    })
}