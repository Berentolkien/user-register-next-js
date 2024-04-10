import { NextResponse } from "next/server";
import User from "@/models/user";
import { connectDB } from "@/libs/mongodb";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
    try {
        const { email, newPassword } = await request.json();
        console.log("Data received:", { email, newPassword });

        await connectDB();
        const user = await User.findOne({ email });

        if (!user) {
            console.log("User not found with email:", email);
            return NextResponse.json(
                {
                    message: "User not found",
                },
                {
                    status: 404,
                }
            );
        }

        const hashedPassword = await bcrypt.hash(newPassword, 12);
        user.password = hashedPassword;
        await user.save();

        console.log("Password updated for user:", email);
        return NextResponse.json({ message: "Password updated successfully" });
    } catch (error) {
        console.error("An error occurred:", error);
        return NextResponse.error();
    }
}
