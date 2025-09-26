import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/lib/models/user";
import bcrypt from "bcryptjs";
import connectToDatabase from "@/utils/mongodb";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials) {
        await connectToDatabase();
        const user = await User.findOne({ email: credentials.email });
        if (!user) throw new Error("No user found");
        const isPasswordValid = await bcrypt.compare(credentials.password, user.password);
        if (!isPasswordValid) throw new Error("Invalid password");

        return {
          id: user._id.toString(),
          email: user.email,
          name: user.name,
          role: user.role,
        };
      },
    }),
  ],
callbacks: {
  async jwt({ token, user }) {
    // Runs on login & every subsequent request
    if (user) {
      token.id = user.id;
      token.role = user.role; 
    }
    return token;
  },
  async session({ session, token }) {
    // Attach role from JWT to session
    session.user.id = token.id;
    session.user.role = token.role;
    return session;
  },
},

  pages: {
    signIn: "/signin",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
