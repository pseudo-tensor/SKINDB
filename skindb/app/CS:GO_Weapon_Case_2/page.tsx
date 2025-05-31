import React from "react";
import Navbar from "@/components/navbar";
import SkinTile from "@/components/SkinTile";
import prisma from "@/lib/prisma";
import raritySort from "@/lib/raritySort";
import colorSort from "@/lib/colorSort";


async function CollectionPage(){
    const data= await prisma.skin.findMany(
        {
            where:{
                caseId:'Weapon2',
            },
        }
    );
    return(
        <div>
            <Navbar></Navbar>
            <div className=" flex text-center text-black justify-center items-center bg-[#FFFBDE] w-full h-[50px]"><h1>CS:GO Weapon Case 2</h1></div>
            <div className={`grid grid-cols-4 items-center justify-center m-3 p-4`}>
                {data.map((skin)=>
                {
                    const order=raritySort(skin.rarity);
                    const color=colorSort(skin.rarity);
                    return(
                    <SkinTile imageUrl={`/CS:GO_Weapon_Case_2/${skin.name}.jpeg`} name={skin.name} rarity={skin.rarity} order={order} color={color} key={skin.id}/>
                )})}
            </div>
        </div>
    )
}

export default CollectionPage;