import NextAuth from "next-auth";
import LineProvider from "next-auth/providers/line";

export const authOptions = {
  providers: [
    LineProvider({
      clientId: process.env.LINE_CLIENT_ID,
      clientSecret: process.env.LINE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.SECRET,
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token
      }
      return token
    },
    async session({ session, token, user }) {
      session.accessToken = token.accessToken
      return session
    }
  }
};
export default NextAuth(authOptions);
