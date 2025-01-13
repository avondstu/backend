import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import InformationForm from './_component/form-infor'
import { getCompanyInformation } from './lib/data'

export default async function InformationPage() {

    const pageData = await getCompanyInformation();

  return (
    <section>
        <div className='space-y-4'>
            <Card x-chunk="dashboard-06-chunk-0">
                <CardHeader className='px-[2vw] pt-[2vw] grid grid-cols-2 justify-between items-center'>
                    <CardTitle>Company Information</CardTitle>
                </CardHeader>
                <CardDescription className='px-[2vw] pb-[2vw]'>
                    {/* <DataTable columns={columns} data={clientData} /> */}
                    <InformationForm data={pageData}/>
                </CardDescription>
            </Card>
        </div>
    </section>
  )
}
