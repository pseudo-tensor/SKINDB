import React from "react";
import Image from "next/image";

const CaseTile: React.FC<{ imageUrl: string; name: string;  }> = ({ imageUrl, name }) => {
    return (
        <div className="flex bg-[#2A4759] items-center justify-centre p-3 border rounded-lg border-gray-200 shadow-md w-[400px] m-1 h-[200px]">
            <Image src={imageUrl} alt={name} height={200} width={200} />
            <div className="m-2 p-2 w-[200px] border rounded-lg border-black text-center text-white bg-[#954C2E]">{name}</div>
        </div>
    );
}
export default CaseTile;