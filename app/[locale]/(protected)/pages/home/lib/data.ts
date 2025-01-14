import prisma from "@/lib/prisma"

export async function getHomeData() {
    try {
        const response = await prisma.homePage.findFirst({
            where: {
                id:1
            }
        })

        return response
    } catch (error) {
        console.log(error)
        return null
    }
}

export async function getServPageData() {
    try {
        const response = await prisma.servicePage.findFirst({
            where:{
                id:1
            }
        })

        return response
    } catch (error) {
        console.log(error)
        return null
    }
}