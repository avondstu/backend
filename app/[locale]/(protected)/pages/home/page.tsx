


import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { AlertCircle } from 'lucide-react'
import React from 'react'
import { getHomeData } from './lib/data'
import { ActionResult } from '@/types'
import { useFormState } from 'react-dom'
import { editHome } from './lib/action'
import FormHome from './_component/form-home'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'



export default async function page() {

    const pageData = await getHomeData();

  return (
    <>

<section className='pt-[1vw]'>
        <Card x-chunk="dashboard-06-chunk-0">
                <CardHeader className='px-[2vw] pt-[2vw] grid grid-cols-2 justify-between items-center'>
                    <CardTitle>Edit Home Page Content</CardTitle>
                </CardHeader>
                <CardDescription className='px-[2vw] pb-[3vw]'>
                <FormHome data={pageData} />
                </CardDescription>
            </Card>
    </section>
    </>
  )
}
