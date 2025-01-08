import prisma from "@/lib/prisma";
import { TColumn } from "../column";

export async function getServices() {
    try {
        const client = await prisma.brandServices.findMany()

        const response: TColumn[] = client.map((client) => {
            return {
                id: client.id,
                service: client.nama
            }
        })

        return response
    } catch (error) {
        console.log(error);
        return[];
    }
}

export async function getServicesWithID(id:string) {
    try {
        const response = await prisma.brandServices.findFirst({
            where:{
                id:Number.parseInt(id)
            }
        })

        return response
    } catch (error) {
        console.log(error);
        return null;
    }
}