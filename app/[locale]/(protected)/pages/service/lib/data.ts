import prisma from "@/lib/prisma"

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