import DotActivity from "@/src/components/form/dot";

const Sidebar: React.FC = () => {
    return (
        <div className='h-full w-[10%] bg-red-800'>
            <SidebarItem/>
        </div>
    )
}

interface SidebarItemProps {
    label: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({label}) => {
    return(
        <div className='flex items-center'>
            <DotActivity />
            <p>Activity</p>
        </div>
    )
}

export default Sidebar