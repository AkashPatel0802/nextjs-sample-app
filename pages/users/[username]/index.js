import { useRouter } from 'next/router';
import { useEffect } from 'react';

const useUser = () => ({ user: null, loading: false});

const Page = () => {
    const router = useRouter();
    const user = useUser();

    console.log(router);

    // loginPage replce router remove history
    useEffect(() => {
        if(user.user == null) {
            router.replace('/');
        }
    },[router, user.user])

    return (
        <div>
            <h1>This is Index page for {router.query.username}</h1>
            {/* firstWay */}
            {/* <button onClick={(e) => router.push(`/users/${router.query.username}/settings`)}>Open Setting page</button>

            {/* secondWay */}
            <button onClick={(e) => router.push({
                pathname: '/users/[username]/settings',
                query: { username: router.query.username},
                })
             }
            >
                Open Setting page
            </button>

            {/* push method */}
            <button onClick={(e) => router.push("/")}>Go to Home Push</button>

            {/* replace method */}
            <button onClick={(e) => router.replace("/")}>Go to Home Replace</button>

              {/* reload method */}
            <button onClick={(e) => router.reload("/")}>Go to Home refreshPage</button>
        </div>
    )
}

export default Page;


