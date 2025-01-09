import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import ServiceForm from './_component/form-service'
import { Button } from 'react-day-picker';

export default function ServicePage() {
  return (
    <section className='pt-[1vw]'>
        <Card x-chunk="dashboard-06-chunk-0">
                <CardHeader className='px-[2vw] pt-[2vw] grid grid-cols-2 justify-between items-center'>
                    <CardTitle>Edit Service Page Content</CardTitle>
                </CardHeader>
                <CardDescription className='px-[2vw] pb-[3vw]'>
                {/* <ServiceForm/> */}
                </CardDescription>
            </Card>
    </section>
  )
}
