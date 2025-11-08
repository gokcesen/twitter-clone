export async function GET(req, { params }) {
  const { id } = params;

  try {
    const postRes = await fetch(`https://dummyjson.com/posts/${id}`, { cache: "no-store" });
    if (!postRes.ok) throw new Error("Tweet fetch failed");
    const post = await postRes.json();

    const userId = post.userId;

    const [commentsRes, userRes] = await Promise.all([
      fetch(`https://dummyjson.com/posts/${id}/comments`, { cache: "no-store" }),
      fetch(`https://dummyjson.com/users/${userId}`, { cache: "no-store" }),
    ]);

    if (!commentsRes.ok) throw new Error("Comments fetch failed");
    const commentsPayload = await commentsRes.json();
    const user = userRes.ok ? await userRes.json() : null;

    const data = {
      ...post,
      user,
      comments: commentsPayload?.comments ?? [],
      totalComments: commentsPayload?.total ?? 0,
    };

    return Response.json(data);
  } catch (error) {
    console.error(error);
    return Response.json(
      { error: "Failed to fetch tweet details" },
      { status: 500 }
    );
  }
}

