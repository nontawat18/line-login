import NextAuth from "next-auth";
import LineProvider from "next-auth/providers/line";

export const authOptions = {
  providers: [
    LineProvider({
      clientId: 2004859298,
      clientSecret: '1fb482411e5a0c4d216e297a9db76baf',
    }),
  ],
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
