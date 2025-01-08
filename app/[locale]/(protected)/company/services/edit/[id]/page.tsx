import React from 'react'
import FormService from '../../_component/form-service'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { getServices, getServicesWithID } from '../../lib/data'

type TParam = {
    id: string
}

interface EditPageProp {
    params:TParam
}


export default async function EditServices({params}:EditPageProp) {
    const data = await getServicesWithID(params.id);
  return (
    <section className='pt-[1vw]'>
        <Card x-chunk="dashboard-06-chunk-0">
                <CardHeader className='px-[2vw] pt-[2vw] grid grid-cols-2 justify-between items-center'>
                    <CardTitle>Edit Services</CardTitle>
                </CardHeader>
                <CardDescription className='px-[2vw] pt-[1vw] pb-[3vw]'>
                    <FormService data={data}/>
                </CardDescription>
            </Card>
        
    </section>
  )
}
