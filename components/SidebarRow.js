import Image from "next/image";

function SidebarRow({src,Icon,title}) {
    return (
        <div className="flex items-center space-x-2 p-4  cursor-pointer">
            {src && (
                <Image
                className="rounded-full"
                src={src}
                width={30}
                height={30}
                layout="fixed"
                />
            )}
            {Icon && (
                <Icon className="h-5 w-15 text-blue-500 hover:bg-gray-200"/>
            )
            }
            <p className="hidden sm:inline-flex font-medium ">{title}</p>
        </div>
    )
}

export default SidebarRow
