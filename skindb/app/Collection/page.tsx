import React from "react";
import Navbar from "@/components/navbar";
import prisma from "@/lib/prisma";
import CaseTile from "@/components/CaseTile";
import Link from "next/link";

async function CollectionPage(){
    const cases=await prisma.cases.findMany({
        where:{
            id:{
                in:["1","2","3","4","5"]
            }
        }
    });
    return(
        <div>
            <Navbar></Navbar>
            <div className="grid grid-cols-4 gap-1">
                <Link href="/Bravo">
                    {cases.map((caseItem) => (
                        <div className="flex m-3 p-4">
                            <CaseTile imageUrl={`/Case/${caseItem.name}.jpeg`} name={caseItem.name} />
                        </div>
                    ))}
                </Link>
            </div>
        </div>
    )
}

export default CollectionPage;