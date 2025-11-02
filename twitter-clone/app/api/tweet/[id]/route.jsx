export async function GET(req, { params }) {
  const { id } = params;

  try {
    const [postRes, commentsRes] = await Promise.all([
      fetch(`https://dummyjson.com/posts/${id}`, { cache: "no-store" }),
      fetch(`https://dummyjson.com/posts/${id}/comments`, { cache: "no-store" }),
    ]);

    if (!postRes.ok) throw new Error("Tweet fetch failed");
    if (!commentsRes.ok) throw new Error("Comments fetch failed");

    const [post, commentsPayload] = await Promise.all([
      postRes.json(),
      commentsRes.json(),
    ]);

    const data = {
      ...post,
      comments: commentsPayload?.comments ?? [],
      totalComments: commentsPayload?.total ?? 0,
    };

    return Response.json(data);
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Failed to fetch tweet details" }, { status: 500 });
  }
}
