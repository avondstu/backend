import prisma from "@/lib/prisma";
import { TColumn } from "../column";

export async function getProjectList() {
    try {
        const projects = await prisma.projectPortfolio.findMany()

    const response: TColumn[]= projects.map((project)=>{
        return{
            id: project.id,
            nama: project.nama,
            category: project.category,
            description: project.description
        }
    })

    return response
    } catch (error) {
        console.log(error)
        return []
    }
}


export async function getProjectListWithId(id:string) {
    try {
        const response = await prisma.projectPortfolio.findFirst({
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