
interface DotActivityProps{
    variant?: 'default' | 'current' | 'done';
}

const DotActivity: React.FC<DotActivityProps> = ({ variant='default' }) => {
    const defaultborderStyle = 'border-gray-200';
    const currentborderStyle = 'border-blue-500';
    const doneborderStyle = 'border-blue-500';

    const selectBorderStyle = () => {
        let style : string;
        switch(variant){
            case 'current':
                style = currentborderStyle;
                break;
            case 'done':
                style = doneborderStyle;
                break;
            default:
                style = defaultborderStyle;
                break;
        }
        return style;
    }

    return (
        <div className={
            `w-8 h-8
            rounded-full border-2 border-solid flex items-center justify-center ${selectBorderStyle()}`
        }>
            {variant == 'done' && (
                <svg className='fill-blue-500' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px">
                    <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/>
                </svg>
            )
            } 
        </div>
    )
} 

export default DotActivity;