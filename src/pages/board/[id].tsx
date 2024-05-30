import { HomeScreen } from '@/screens/home';
import { useRouter } from 'next/router';

export default function TablePage() {
    const router = useRouter();
    const { id } = router.query;

    return <HomeScreen tableId={id as string} />;
}
