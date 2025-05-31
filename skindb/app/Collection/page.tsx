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
                in:["0","1","2","3","4","5"]
            }
        }
    });
    return(
        <div>
            <Navbar></Navbar>
            <div className="flex text-center text-black justify-center items-center">
                {cases.map((caseItem) => (
                    <div className="flex flex-cols m-3 p-4 w-[600px] h-[600px] justify-center items-center" key={caseItem.id}>
                    <Link href={`/${White2Under(caseItem.name)}`}>
                        <CaseTile imageUrl={`/Case/${caseItem.name}.jpeg`} name={caseItem.name} />
                    </Link>
                    </div>
                    ))}
            </div>
        </div>
    )
}

export default CollectionPage;