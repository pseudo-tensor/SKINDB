import React from "react";
import Navbar from "@/components/navbar";
import SkinTile from "@/components/SkinTile";
import prisma from "@/lib/prisma";

async function CollectionPage(){
    const data= await prisma.skin.findMany(
        {
            where:{
                caseId:'Bravo',
            },
        }
    );
    return(
        <div className="flex flex-col p-4 m-3">
            <Navbar></Navbar>
            <div className="flex items-center justify-center h-screen m-3 p-4">
                {data.map((skin) => (

                    <SkinTile imageUrl={`/Bravo/${skin.name}.jpeg`} name={skin.name} rarity={skin.rarity} />
                ))}
            </div>
        </div>
    )
}

export default CollectionPage;