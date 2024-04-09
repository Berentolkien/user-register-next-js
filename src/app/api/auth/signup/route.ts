import { NextResponse } from "next/server";
import User from '@/models/user';
import { connectDB } from "@/libs/mongodb";
import bcrypt from 'bcryptjs';

export async function POST(request: Request) {
    try {
        const { fullname, email, password, confirmPassword } = await request.json();
        console.log("Data received:", { fullname, email, password, confirmPassword });

        // Verificar si el password es válido
        if (!password || password.length < 6) {
            console.log("Password must be at least 6 characters");
            return NextResponse.json({
                message: "Password must be at least 6 characters"
            }, {
                status: 400
            });
        }

        // Verificar si las contraseñas coinciden
        if (password !== confirmPassword) {
            console.log("Passwords do not match");
            return NextResponse.json({
                message: "Passwords do not match"
            }, {
                status: 400
            });
        }

        await connectDB();
        const userFound = await User.findOne({ email });

        if (userFound) {
            console.log("Email already exists:", email);
            return NextResponse.json(
                {
                    message: "Email already exists",
                },
                {
                    status: 409,
                }
            );
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const user = new User({
            email,
            fullname,
            password: hashedPassword
        });

        const savedUser = await user.save();
        console.log("User saved:", savedUser);
        return NextResponse.json(savedUser);

    } catch (error) {
        console.error("An error occurred:", error);
        return NextResponse.error();
    }
}
