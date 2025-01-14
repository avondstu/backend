import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import prisma from '@/lib/prisma'
import React from 'react'
import { DataTable } from '../_components/data-table'
import { columns } from './column' 
import { getClient } from './lib/data' 
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Eye, Plus, PlusCircle } from 'lucide-react'

export default async function Page() {

    const clientData = await getClient()
  return (
    <>
    <section>
        <div className='space-y-4'>
            <Card x-chunk="dashboard-06-chunk-0">
                <CardHeader className='px-[2vw] pt-[2vw] grid grid-cols-2 justify-between items-center'>
                    <CardTitle>Client Database</CardTitle>
                    <Button size='sm' className='bg-black py-[1vw] w-fit ml-auto' asChild>
                        <Link href='/client/create'>
                            <PlusCircle className='w-6 h-6 mr-2' /> Add Client
                        </Link>
                    </Button>
                </CardHeader>
                <CardDescription className='px-[2vw] py-[2vw]'>
                    <DataTable columns={columns} data={clientData} />
                </CardDescription>
            </Card>
        </div>
    </section>
    </>
  )
}
