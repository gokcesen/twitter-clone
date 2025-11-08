export async function GET() {
	try {
	  const res = await fetch("https://dummyjson.com/posts");
	  if (!res.ok) throw new Error("Failed to fetch external tweets");
  
	  const data = await res.json();
	  const posts = data.posts;
  
	  const userIds = [...new Set(posts.map((p) => p.userId))];

  
	  return Response.json({
		posts,
		userIds,
	  });
	} catch (error) {
	  console.error(error);
	  return Response.json({ error: "Failed to fetch tweets" }, { status: 500 });
	}
  }
  

