import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import user from "@/lib/models/user";
import connectDB from "@/lib/db";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        await connectDB();
        const user = await User.findOne({ email: credentials.email });
        if (!user || user.password !== credentials.password) return null;
        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
          role: user.role,
        };
      }
    })
  ],
  session: { strategy: "jwt" },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.role = token.role;
      return session;
    }
  },
  pages: { signIn: "/signin" }
});

export { handler as GET, handler as POST };
