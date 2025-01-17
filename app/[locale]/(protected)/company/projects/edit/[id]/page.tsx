import React from 'react'
import { ProjectForm } from '../../_component/project-form'
import { getProjectListWithId } from '../../lib/data'
import { redirect } from 'next/navigation'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { XIcon } from 'lucide-react'


type TParam = {
    id: string
}

interface EditPageProp {
    params: TParam
}

export default async function page({params}:EditPageProp) {

    const project = await getProjectListWithId(params.id)

    if(!project) {
        return redirect('/')
    }

  return (
    <>
    <Card x-chunk="dashboard-06-chunk-0">
                <CardHeader className='px-[2vw] pt-[2vw] grid grid-cols-2 justify-between items-center'>
                    <CardTitle>{`Edit ${project.nama} Project`}</CardTitle>
                    <Button size='sm' className='bg-red-700 mt-0 py-[1vw] w-fit ml-auto' asChild>
                        <Link href='/company/projects' className=' mt-0'>
                            <XIcon className='w-6 h-6 mr-2' /> Cancel
                        </Link>
                    </Button>
                </CardHeader>
                <CardDescription className='px-[2vw] pb-[2vw]'>
                    <ProjectForm type='EDIT' data={project}/>
                </CardDescription>
            </Card>
    
    </>
  )
}
