"use server"

import prisma from "@/lib/prisma";
import { schemaServicePage } from "@/lib/schema";
import { ActionResult } from "@/types";
import { redirect } from "next/navigation";

export async function editServPage(
    _:unknown,
    formData: FormData,
    id:number
):Promise<ActionResult> {

    const validate = schemaServicePage.safeParse({
        tagline: formData.get('tagline'),
        headline: formData.get('headline'),
        description: formData.get('description')
    })

    if(!validate.success) {
        return {
            error: validate.error.errors[0].message
        }
    }

    try {
        await prisma.servicePage.update({
            where: {
                id:id
            },
            data: {
                tagline: validate.data.tagline,
                headline: validate.data.headline,
                desc : validate.data.description,
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