import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { XIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { ProjectForm } from '../_component/project-form'

export default function CreateProject() {
  return (
    <>
    <div className='space-y-4'>
            <Card x-chunk="dashboard-06-chunk-0">
                <CardHeader className='px-[2vw] pt-[2vw] grid grid-cols-2 justify-between items-center'>
                    <CardTitle>Add New Client</CardTitle>
                    <Button size='sm' className='bg-red-700 mt-0 py-[1vw] w-fit ml-auto' asChild>
                        <Link href='/company/projects' className=' mt-0'>
                            <XIcon className='w-6 h-6 mr-2' /> Cancel
                        </Link>
                    </Button>
                </CardHeader>
                <CardDescription className='px-[2vw] pb-[2vw]'>
                    <ProjectForm type='ADD' />
                </CardDescription>
            </Card>
        </div>
    </>
  )
}
