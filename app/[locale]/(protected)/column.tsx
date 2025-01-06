"use client"

import { Button } from '@/components/ui/button'
import { BrandCategory, OurServices } from '@prisma/client'
import {ColumnDef} from '@tanstack/react-table'
import { Edit, Eye, Trash } from 'lucide-react'
import Link from 'next/link'

export type TColumn = {
    id: number
    nama: string
    email: string
    brand: string
    telepon: string
    category : BrandCategory
    address : string
    services : OurServices
}

export const columns: ColumnDef<TColumn>[] = [
    {
        accessorKey: 'nama',
        header: 'Nama'
    },
    {
        accessorKey: 'email',
        header:'Email'
    },
    {
        accessorKey: 'brand',
        header:'Brand Name'
    },
    {
        accessorKey: 'category',
        header:'Category',
        cell: ({row}) =>{
            const value: string = row.getValue("category")
            return <div className={`font-bold w-fit px-[1vw] py-[0.5vw] rounded-full text-center text-white ${value === 'Avond'? 'bg-[#0030FF]' : 'bg-[#C94129] '}`}>{value}</div>
        }
    },
    {
        id:"actions",
        cell: ({row}) => {
            const client = row.original

            return (
                <div className='space-x-4 inline-flex'>
                    <Button size='sm' className='bg-gray-600' asChild>
                        <Link href={`/detail/${client.id}`}>
                            <Eye className='w-4 h-4 mr-2' /> Detail
                        </Link>
                    </Button>
                    <Button size='sm' className='bg-blue-600' asChild>
                        <Link href={`/edit/${client.id}`}>
                            <Edit className='w-4 h-4 mr-2' />
                        </Link>
                    </Button>
                    <Button size='sm' className='bg-red-600' asChild>
                        <Link href={`/edit/${client.id}`}>
                            <Trash className='w-4 h-4' />
                        </Link>
                    </Button>
                </div>
            )
        }
    }

]