import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import connectToDatabase from '@/utils/mongodb';
import User from '@/lib/models/user';

export async function POST(req) {
  try {
    await connectToDatabase();
    const { name, email, password, role } = await req.json();

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ message: 'User already exists' }, { status: 400 });
    }

    // Hash password before saving
    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });

    // Determine dashboard
    const dashboard = role === 'admin' ? 'admin_dashboard' : 'student_dashboard';
    const redirectMessage = `User registered successfully. Redirecting to /${dashboard}`;

    console.log("✅ New user inserted:", newUser);

    return NextResponse.json(
      {
        message: redirectMessage,
        user: {
          id: newUser._id.toString(),
          email: newUser.email,
          name: newUser.name,
          role: newUser.role,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("❌ Registration error:", error);
    return NextResponse.json({ message: 'Server error. Please try again.' }, { status: 500 });
  }
}
