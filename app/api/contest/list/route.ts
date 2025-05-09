export async function GET(req: Request) {
    const body = await req.json(); // parse JSON body
    const title = body.title;

    if (!title) {
        return Response.json({
            message: "All fields are reuired"
        })
    }

    return Response.json({
        message: "Fetched data"
    })
}
