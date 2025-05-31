import React from "react";
import Navbar from "@/components/navbar";
import prisma from "@/lib/prisma";
import CaseTile from "@/components/CaseTile";
import Link from "next/link";
import White2Under from "@/lib/White2Under";

async function CollectionPage(){
    const cases=await prisma.cases.findMany({
        where:{
            id:{
                in:["0","1","22","32","4","5"]
            }
        }
    });
    return(
        <div>
            <Navbar></Navbar>
            <div className="relative h-screen">
                <div className="grid grid-cols-3 w-[1500px] h-full bg-[#333446] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    {cases.map((caseItem) => (
                        <div className="m-3 p-4 w-[500px] h-[300px] justify-center items-center" key={caseItem.id}>
                            <Link href={`/${White2Under(caseItem.name)}`}>
                                <CaseTile imageUrl={`/Case/${caseItem.name}.jpeg`} name={caseItem.name} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CollectionPage;