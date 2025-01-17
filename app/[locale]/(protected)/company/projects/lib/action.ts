"use server"

import prisma from "@/lib/prisma";
import { schemaProjectPortfolio } from "@/lib/schema";
import { ActionResult } from "@/types";
import { OurServices } from "@prisma/client";
import { redirect } from "next/navigation";

export async function postProject(
    _:unknown,
    formData:FormData,
):Promise<ActionResult> {

    const validate = schemaProjectPortfolio.safeParse({
        name: formData.get('namaProject'),
        category: formData.get('category'),
        description: formData.get('deskripsiProject')
    })

    if(!validate.success){
        return{
            error: validate.error.errors[0].message
        }
    }

    try {
        await prisma.projectPortfolio.create({
            data:{
                nama: validate.data.name,
                description: validate.data.description,
                category: validate.data.category as OurServices
            }
        })
    } catch (error) {
        console.log(error)
        return{
            error:'Gagal Upload'
        }
    }

    return redirect('/company/projects')
}

export async function editProject(
    _:unknown,
    formData:FormData,
    id: number
):Promise<ActionResult> {

    const validate = schemaProjectPortfolio.safeParse({
        name: formData.get('namaProject'),
        category: formData.get('category'),
        description: formData.get('deskripsiProject')
    })

    if(!validate.success){
        return{
            error: validate.error.errors[0].message
        }
    }

    try {
        await prisma.projectPortfolio.update({
            where:{
                id:id
            },
            data:{
                nama: validate.data.name,
                description: validate.data.description,
                category: validate.data.category as OurServices
            }
        })
    } catch (error) {
        console.log(error)
        return{
            error:'Gagal Update'
        }
    }

    return redirect('/company/projects')
}

export async function deleteProject(
    _:unknown,
    formData:FormData,
    id:number
):Promise<ActionResult> {
    try {
        await prisma.projectPortfolio.delete({
            where:{
                id:id
            }
        })
    } catch (error) {
        console.log(error)
        return{
            error:'Data Tidak Bisa Dihapus'
        }
    }

    return redirect('/company/projects')
}