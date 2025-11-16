import connectDB from "@/lib/config/database";
import UserModel from "@/lib/models/UserModel";

export async function GET(req) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const idsParam = searchParams.get("ids");

    if (!idsParam) {
      return Response.json({ users: [] });
    }

    const ids = idsParam.split(",").map((x) => Number(x.trim()));

    const users = await UserModel.find(
      { externalId: { $in: ids } },
      { _id: 0, __v: 0 } 
    ).lean();

    return Response.json({ users });
  } catch (error) {
    console.error("USER API ERROR:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}



  
  