"use server"

import prisma from "@/lib/prisma"
import { schemaClient } from "@/lib/schema" 
import { ActionResult } from "@/types"
import { Action } from "@dnd-kit/core/dist/store"
import { BrandCategory, OurServices } from "@prisma/client"
import { redirect } from "next/navigation"
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism"

export async function postClient (
    _:unknown,
    formData : FormData
) : Promise<ActionResult> {


    const validate = schemaClient.safeParse({
        nama : formData.get('client-name'),
        brand : formData.get('brand-name'),
        email: formData.get('email'),
        telepon: formData.get('phone'),
        category:formData.get('clientFrom'),
        address:formData.get('address'),
        services:formData.get('services'),

    })

    if(!validate.success){
        return {
            error: validate.error.errors[0].message
        }
    }

    try {
        await prisma.client.create({
            data: {
                nama: validate.data.nama,
                email: validate.data.email,
                brand: validate.data.brand,
                telepon: validate.data.telepon,
                category: validate.data.category as BrandCategory,
                address: validate.data.address,
                services: validate.data.services as OurServices 

            }
        })
    } catch (error) {
        console.log(error)
        return {
            error: 'Gagal'
        }
    }

    return redirect('/')
}

export async function deleteClient(
    _:unknown,
    formData:FormData,
    id:number
):Promise<ActionResult> {
try {
    await prisma.client.delete({
        where:{
            id:id
        }
    })
} catch (error) {
    console.log(error)
    return {
        error: 'Data tidak bisa dihapus'
    }
}

    return redirect('/')
}

export async function editClient(
    _:unknown,
    formData : FormData,
    id: number
):Promise<ActionResult> {

    const validate = schemaClient.safeParse({
        nama : formData.get('client-name'),
        brand : formData.get('brand-name'),
        email: formData.get('email'),
        telepon: formData.get('phone'),
        category:formData.get('clientFrom'),
        address:formData.get('address'),
        services:formData.get('services'),

    })

    if(!validate.success){
        return {
            error: validate.error.errors[0].message
        }
    }

    try {
        await prisma.client.update({
            where: {
                id: id
            },
            data: {
                nama: validate.data.nama,
                email: validate.data.email,
                brand: validate.data.brand,
                telepon: validate.data.telepon,
                category: validate.data.category as BrandCategory,
                address: validate.data.address,
                services: validate.data.services as OurServices 
            }
        })
    } catch (error) {
        console.log(error)
        return {
            error: 'Gagal Update'
        }
    }

 return redirect('/')   
}