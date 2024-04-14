//NextAuth main module
import NextAuth, { NextAuthConfig } from "next-auth"

//Auth providers
import Authentik from "next-auth/providers/authentik"
import Github from "next-auth/providers/github"
 


const authConfig: NextAuthConfig = {
  providers: [Authentik,Github]
}

export const {handlers, signIn, signOut, auth } = NextAuth(authConfig);

