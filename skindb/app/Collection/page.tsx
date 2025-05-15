import React from "react";
import Navbar from "@/components/navbar";
import SkinTile from "@/components/SkinTile";
import prisma from "@/lib/prisma";

async function CollectionPage(){
    const data= await prisma.skin.findMany(
        {
            where:{
                caseId:'1',
            },
        }
    );
    return(
        <div>
            <Navbar></Navbar>
            <div className="flex items-center justify-center h-screen m-3 p-4">
                {data.map((skin) => (
                    <SkinTile key={skin.id} imageUrl="/Bravo/AWP_Graphite.jpeg" name={skin.name} rarity={skin.rarity} />
                ))}
                <SkinTile imageUrl="/Bravo/AK-47_Fire_Serpent.jpeg" name="Fire Serpent" rarity={"Covert"} />
            </div>
        </div>
    )
}

export default CollectionPage;