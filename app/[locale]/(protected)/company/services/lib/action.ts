"use server"

import prisma from "@/lib/prisma";
import { schemaService } from "@/lib/schema";
import { ActionResult } from "@/types";
import { redirect } from "next/navigation";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";

export async function editServices(
    _:unknown,
    formData: FormData,
    id:number
):Promise<ActionResult> {

    const validate = schemaService.safeParse({
        layanan:formData.get('nama-services'),
        description:formData.get('desc-services'),

    })

    if(!validate.success){
        return{
            error:validate.error.errors[0].message
        }
    }

    try {
        await prisma.brandServices.update({
            where:{
                id:id
            },
            data :{
                layanan: validate.data.layanan,
                description: validate.data.description
            }
        })
    } catch (error) {
        console.log(error)
        return{
            error:'Gagal Update'
        }   
    }

    return redirect('/company/services')
}