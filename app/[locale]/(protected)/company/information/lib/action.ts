"use server"

import prisma from "@/lib/prisma";
import { schemaCompany } from "@/lib/schema";
import { ActionResult } from "@/types";
import { redirect } from "next/navigation";

export async function editCompanyInformatiom(
    _:unknown,
    formData: FormData,
    id: number
):Promise<ActionResult> {

    const validate = schemaCompany.safeParse({
        name : formData.get('companyName'),
        whatsapp : formData.get('whatsapp'),
        email : formData.get('email'),
        iglink : formData.get('iglink'),
        tiktoklink : formData.get('tiktoklink'),
        linkedin : formData.get('linkedin'),
        description : formData.get('description')
    })

    if(!validate.success) {
        return {
            error:validate.error.errors[0].message
        }
    }

    try {
        await prisma.companyInformation.update({
            where:{
                id:id
            },
             data:{
                name: validate.data.name,
                whatsapp: validate.data.whatsapp,
                email: validate.data.email,
                iglink: validate.data.iglink,
                tiktoklink: validate.data.tiktoklink,
                linkedin: validate.data.linkedin
             }
        })
    } catch (error) {
        console.log(error)
        return {
            error:'Gagal Update'
        }
    }

    return redirect('/')
}