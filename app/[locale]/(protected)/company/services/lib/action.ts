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
        nama:formData.get('nama-services'),
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
                nama: validate.data.nama
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