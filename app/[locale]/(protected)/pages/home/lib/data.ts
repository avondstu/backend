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