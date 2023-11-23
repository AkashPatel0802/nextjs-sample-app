import { useRouter } from 'next/router';

const SettingPage = () => {
    const router = useRouter();
    console.log(router);
  return (
    <div>
        <h1>This is setting page for {router.query.username}</h1>
    </div>
  )
}

export default SettingPage;