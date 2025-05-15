import React from "react";
import Image from "next/image";

const CaseTile: React.FC<{ imageUrl: string; name: string;  }> = ({ imageUrl, name }) => {
    return (
        <div className="grid grid-cols-3 bg-[#2A4759] items-center justify-between p-3 border rounded-lg shadow-md w-[300px] m-1 h-[100px]">
            <Image src={imageUrl} alt={name} height={300} width={300} />
            <div className="m-2 p-2 w-[200px] text-white">{name}</div>
        </div>
    );
}
export default CaseTile;