import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { PlusCircle } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { ProjecTable } from './_component/project-table'
import { columns } from './column'
import { getProjectList } from './lib/data'

export default async function ProjectList() {

    const projectData = await getProjectList()

  return (
    <div className='space-y-4'>
            <Card x-chunk="dashboard-06-chunk-0">
                <CardHeader className='px-[2vw] pt-[2vw] grid grid-cols-2 justify-between items-center'>
                    <CardTitle>Project List</CardTitle>
                    <Button size='sm' className='bg-black py-[1vw] w-fit ml-auto' asChild>
                        <Link href='/company/projects/create'>
                            <PlusCircle className='w-6 h-6 mr-2' /> Add Project
                        </Link>
                    </Button>
                </CardHeader>
                <CardDescription className='px-[2vw] py-[2vw]'>
                    <ProjecTable columns={columns} data={projectData} />
                </CardDescription>
            </Card>
        </div>
  )
}
