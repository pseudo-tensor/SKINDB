'use client';
import React from "react";
import Navbar from "@/components/navbar";
import SkinTile from "@/components/SkinTile";
import { useState } from "react";
import { Prisma } from "@prisma/client";

async function CollectionPage(){
    const [skins, setSkins] = useState();
    return(
        <div>
            <Navbar></Navbar>
            <h1>{}</h1>
            const new= await fetch("https://api.example.com/skins");
            <div className="flex items-center justify-center h-screen">
                <SkinTile imageUrl="/Bravo/AK-47_Fire_Serpent.jpeg" name="AK-47 Fire Serpent" rarity={"Covert"} />
            </div>
        </div>
    )
}

export default CollectionPage;