import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import { columns } from './column'
import { DataTable } from '../../_components/data-table'
import { getServices } from './lib/data'

export default async function CompanyService() {

    const data = await getServices();

  return (
    <section>
        <div className='space-y-4'>
            <Card x-chunk="dashboard-06-chunk-0">
                <CardHeader className='px-[2vw] pt-[2vw] grid grid-cols-2 justify-between items-center'>
                    <CardTitle>Company Services</CardTitle>
                </CardHeader>
                <CardDescription className='px-[2vw] py-[2vw]'>
                    <DataTable columns={columns} data={data} />
                </CardDescription>
            </Card>
        </div>
    </section>
  )
}
