export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const idsParam = searchParams.get("ids"); 

    if (!idsParam) {
      return Response.json(
        { error: "No user IDs provided" },
        { status: 400 }
      );
    }

    const ids = idsParam.split(",").map((id) => id.trim());

    const userPromises = ids.map(async (id) => {
      const res = await fetch(`https://dummyjson.com/users/${id}`);
      if (!res.ok) throw new Error(`Failed to fetch user ${id}`);
      return res.json();
    });

    const users = await Promise.all(userPromises);

    return Response.json({ users });
  } catch (error) {
    console.error(error);
    return Response.json(
      { error: "Failed to fetch selected users" },
      { status: 500 }
    );
  }
}

  
  