import { IToolkitItem } from '@/types'
import Image from 'next/image'

const ToolkitItemCard = ({id, logo_url, name, level, years}:IToolkitItem)  => {
    return (<div className="bg-cta m-2 rounded-md bg-opacity-20 flex flex-row relative">
        <Image
            key={id}
            className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] overflow-hidden p-2"
            src={logo_url} 
            alt={name + " Logo"}
            width={100}
            height={100}
        />
        <div className="w-full flex flex-col justify-center pr-2 rounded-md">
            <div className="bg-gray-700 h-2 rounded-md overflow-hidden">
                <div className="bg-cta h-2" style={{width:String(level / 5 * 100) + "%"}}></div>
            </div>
            <div className="text-sm text-gray-700 italic pt-2">Total Years: <strong>{years}</strong></div>
        </div>
    </div>)
}

export default ToolkitItemCard;