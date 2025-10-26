export async function GET() {
  try {
    const res = await fetch('https://dummyjson.com/posts');
    if (!res.ok) throw new Error('Failed to fetch external tweets');
    const data = await res.json();
    return Response.json({ posts: data.posts }); 
  } catch (error) {
    console.error(error);
    return Response.json({ error: 'Failed to fetch tweets' }, { status: 500 });
  }
}

