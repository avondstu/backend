"use server"

import prisma from "@/lib/prisma";
import { schemaHome } from "@/lib/schema";
import { ActionResult } from "@/types"
import { redirect } from "next/navigation"

export async function editHome(
    _:unknown,
    formData:FormData,
    id:number
):Promise<ActionResult> {

    const validate = schemaHome.safeParse({
        why: formData.get('why')
    })

    if(!validate.success) {
        return  {
            error: validate.error.errors[0].message
        }
    }

    try {
        await prisma.homePage.update({
            where: {
                id:id
            },
            data:{
                why:validate.data.why
            }
        })
    } catch (error) {
        console.log(error)
        return {
            error: 'Gagal Update'
        }
    }

    return redirect('/');
}