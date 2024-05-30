import { Layout } from '@/components/layout/Layout'
import { useAppSelector } from '@/common/hooks/useRedux'
import { HomeTasksTab } from './home-ui/HomeTasksTab';
import { HomeWelcomeTab } from './home-ui/HomeWelcomeTab';


interface PropsTypes {
    tableId: string
}
export function HomeScreen({ tableId }: PropsTypes) {
    // const { tables, selectedTableIndex } = useAppSelector((x) => x.mainSlice);

    // const table = tableId ? tables.find((table) => table.id === tableId) : undefined;

    // console.log('__selectedTble', table);


    // const tabs: Record<string | undefined, JSX.Element> = {
    //     undefined: <HomeWelcomeTab />,
    //     [tableId!]: <HomeTasksTab table={table!} tableIndex={selectedTableIndex!} />, // Assuming HomeTasksTab takes only the table prop
    // };

    // return <Layout>{tabs[+Boolean(table)]}</Layout>;
    const { tables, selectedTableIndex } = useAppSelector((x) => x.mainSlice)

    const table =
        typeof selectedTableIndex === 'number'
            ? tables[selectedTableIndex]
            : undefined

    console.log('__table', table);

    const tabs: Record<number, JSX.Element> = {
        1: <HomeTasksTab table={table!} tableIndex={selectedTableIndex!} />,
        0: <HomeWelcomeTab />,
    }
    console.log('__tabs', tabs);
    console.log('__tabs[+Boolean(table)]', tabs[+Boolean(table)]);



    return <Layout>{tabs[+Boolean(table)]}</Layout>
}
