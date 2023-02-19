import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: process.env.FIRE_BASE_WEB_CLIENT_ID,
            clientSecret: process.env.FIRE_BASE_CLIENT_ID,
        }),
        // ...add more providers here
    ],
}

export default NextAuth(authOptions)