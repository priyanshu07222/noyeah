export async function POST(req: Request) {
    const {title, endTime, entry_fee} = await req.json(); // parse JSON body
    

    if (!title || !endTime || !entry_fee) {
        return Response.json({
            message: "all fields are required"
        })
    }

    return Response.json({
        message: "Created successfully"
    })
}
