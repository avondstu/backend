"use client"

import { Button } from "@/components/ui/button"
import { OurServices } from "@prisma/client"
import { ColumnDef } from "@tanstack/react-table"
import { Edit, Eye } from "lucide-react"
import Link from "next/link"

export type TColumn = {
    id: number
    nama: string
    category: OurServices
    description : string
}

export const columns: ColumnDef<TColumn>[] = [
    {
        accessorKey:'nama',
        header:'Nama'
    },
    {
        accessorKey:'category',
        header: 'Category',
        cell: ({row}) =>{
            const value: string = row.getValue("category")
            return <div className={`font-bold w-fit px-[1vw] py-[0.5vw] rounded-full text-center text-white
                ${value === 'Branding'? 'bg-[#0030FF]'
                : value === 'Logo'? 'bg-[#C94129]'
                : value === 'Socmed'? 'bg-[#29c944]'
                : value === 'Website'? 'bg-[#c9b929]' : 'bg-[#000000]'}`}>
                    {value}</div>
        }
    },
    {
        id:"actions",
        header:'Action',
        cell: ({row}) => {
            const client = row.original

            return (
                <div className='space-x-4 inline-flex'>
                    <Button size='sm' className='bg-gray-600' asChild>
                        <Link href={`/company/projects/detail/${client.id}`}>
                            <Eye className='w-4 h-4 mr-2' /> Detail
                        </Link>
                    </Button>
                    <Button size='sm' className='bg-blue-600' asChild>
                        <Link href={`/company/projects/edit/${client.id}`}>
                            <Edit className='w-4 h-4 mr-2' />
                        </Link>
                    </Button>
                    {/* <FormDelete id={client.id}/> */}
                </div>
            )
        }
    }
]