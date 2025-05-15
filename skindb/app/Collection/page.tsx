import React from "react";
import Navbar from "@/components/navbar";
import SkinTile from "@/components/SkinTile";
import prisma from "@/lib/prisma";
import Image from "next/image";

async function CollectionPage(){
    return(
        <div className="flex flex-col p-4 m-3">
            <Navbar></Navbar>
            <div>
                <Image src="/Case/CS:GO Weapon Case 2.jpeg" alt="Weapon Case 2" height={300} width={300} className="m-3 p-4"/>
            </div>
        </div>
    )
}

export default CollectionPage;