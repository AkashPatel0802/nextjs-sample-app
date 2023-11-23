import NextAuth from 'next-auth/next';
import GithubProvider from 'next-auth/providers/github';

export const authOptions = {
    providers: [
        GithubProvider({
            clientId: '27fad38918ea970aa49c',
            clientSecret: 'a3ce7263aa45b55e2832a91430f7b9f8c11a7313',
        })
    ]
}

export default NextAuth(authOptions);