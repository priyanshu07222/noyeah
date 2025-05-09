export async function POST(req: Request) {
    const body = await req.json(); // parse JSON body
    const title = body.title;

    if (!title) {
        return new Response(JSON.stringify({ error: "Title is required" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
        });
    }

    return new Response(JSON.stringify({ message: "created successfully" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });
}
