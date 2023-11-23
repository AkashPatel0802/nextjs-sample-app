import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import useSWR from 'swr';


// first Comment wado code useEffect href thi data show karavelo che...
// second wado code swr thi karvelo che..


const fetcher = (...args) => fetch(...args).then(res => res.json())

const UserClient = () => {
    const { data, error } = useSWR('https://dummyjson.com/users', fetcher);

    console.log(data);
    if (error) {
        return <h1>error happened</h1>;
    }

    if (!data) return <h1>Loding...</h1>;

    // const [userClient, setUserClient] = useState([]);

    // console.log(userClient);

    // useEffect(() => {
    //     async function fetchUserClient() {
    //         const data = await fetch("https://dummyjson.com/users");
    //         setUserClient(await data.json());
    //     }
    //     fetchUserClient();
    // }, []);

    return (
        <>
            <h1>UserClient</h1>
            {/* {userClient &&
                userClient.users &&
                userClient.users.map((user) => (
                    <Link href={`/userclient/${user.id}`} key={user.id}>
                        <div>{user.firstName}</div>
                    </Link>
            ))} */}

            {data.users &&
                data.users.map((user) => (
                    <Link href={`/userclient/${user.id}`} key={user.id}>
                        <div>{user.firstName}</div>
                    </Link>
            ))}
        </>
    );
}

export default UserClient;
