import prisma from "@/lib/prisma";
import { TColumn } from "../column";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";

export async function getClient() {
    try {
        const client = await prisma.client.findMany()

        const response: TColumn[]= client.map((client) => {
            return {
                id:client.id,
                nama: client.nama,
                email: client.email,
                brand: client.brand,
                category: client.category,
                address:client.address,
                services:client.services,
                telepon: client.telepon
            }
        })

        return response
    } catch (error) {
        console.log(error)
        return[]
    }
}

export async function getClientWithID(id:string) {
    try {
        const response = await prisma.client.findFirst({
            where:{
                id:Number.parseInt(id)
            }
        })

        return response
    } catch (error) {
        console.log(error)
        return null
    }
}
