import React from "react";
import Image from "next/image";

const SkinTile: React.FC<{order:number; imageUrl: string; name: string; rarity: string; color: string }> = ({color,order, imageUrl, name, rarity }) => {
    return (
        <div style={{order}} className={`flex order-${order} border rounded-lg shadow-md p-4 m-5 bg-[#222831]`}>            
            <Image src={imageUrl} alt={name} height={300} width={300} />
            <div className="background-red p-4 w-full">
                <h3 className="text-lg font-semibold text-center">{name}</h3>
                <p className="text-center p-1 rounded" style={{ background:color }}>
                    {rarity}
                </p>
            </div>
        </div>
    );
}

export default SkinTile;