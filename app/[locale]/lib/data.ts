import prisma from "@/lib/prisma"


export async function getData() {
    try {
        const response = await prisma.homePage.findFirst({
            where:{
                id: 1
            }
        })        

        return response
    } catch (error) {
        console.log(error)
        return null
    }
}

export async function getBrandServices() {
    try {
        const response = await prisma.brandServices.findMany({})

        return response
    } catch (error) {
        console.log(error)
        return null
    }
}