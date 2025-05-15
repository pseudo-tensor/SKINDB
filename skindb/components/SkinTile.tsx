import React from "react";
import Image from "next/image";

const SkinTile: React.FC<{ imageUrl: string; name: string; rarity: string;  }> = ({ imageUrl, name, rarity }) => {
    return (
        <div className="flex flex-col items-center justify-center p-4 border rounded-lg shadow-md w-1/4 m-2 h-1/4">
            <Image src={imageUrl} alt={name} height={300} width={300} />
            <div className="background-red p-4 w-full">
                <h3 className="text-lg font-semibold text-center">{name}</h3>
                <p className="bg-red-500 text-center text-white-500 p-1 rounded">{rarity}</p>
            </div>
        </div>
    );
}

export default SkinTile;