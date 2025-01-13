import prisma from "@/lib/prisma"

export async function getCompanyInformation() {
    try {
        const response = await prisma.companyInformation.findFirst({
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