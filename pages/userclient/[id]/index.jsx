import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const UserInfoPage = () => {
    const router = useRouter();
    const [userInfo, setUserInfo] = useState([]);

    console.log(userInfo);
    useEffect(() => {
        const id = router.query.id;
        async function getUserByid(id) {
            const data = await fetch(`https://dummyjson.com/users/${id}`);
            setUserInfo(await data.json());
        }
        getUserByid(id);
    }, [router.query.id])

  return (
    <div>
        <h1>{userInfo?.firstName}</h1>
        <h1>{userInfo?.email}</h1>
    </div>
  )
}

export default UserInfoPage;