"use client"

import { Button } from "@/components/ui/button"
import { ColumnDef } from "@tanstack/react-table"
import { Edit, Eye } from "lucide-react"
import Link from "next/link"

export type TColumn = {
    id: number
    service: string
}

export const columns: ColumnDef<TColumn>[] = [
    {
        accessorKey: 'service',
        header:'Service'
    },
    {
        accessorKey: 'description',
        header:'Description'
    },
    {
        id:"actions",
        cell: ({row}) => {
            const client = row.original

            return (
                <div className='space-x-4 inline-flex'>
                    {/* <Button size='sm' className='bg-gray-600' asChild>
                        <Link href={`/client/detail/${client.id}`}>
                            <Eye className='w-4 h-4 mr-2' /> Detail
                        </Link>
                    </Button> */}
                    <Button size='sm' className='bg-blue-600' asChild>
                        <Link href={`/company/services/edit/${client.id}`}>
                            <Edit className='w-4 h-4 mr-2' /> Edit
                        </Link>
                    </Button>
                    {/* <FormDelete id={client.id}/> */}
                </div>
            )
        }
    }
]