import React from 'react'
import { AddClient } from '../_components/form-client'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Cross, MinusIcon, PlusCircle, XIcon } from 'lucide-react'

export default function CreateClient() {
  return (
    <>
    <div className='space-y-4'>
            <Card x-chunk="dashboard-06-chunk-0">
                <CardHeader className='px-[2vw] pt-[2vw] grid grid-cols-2 justify-between items-center'>
                    <CardTitle>Add New Client</CardTitle>
                    <Button size='sm' className='bg-red-700 mt-0 py-[1vw] w-fit ml-auto' asChild>
                        <Link href='/' className='text-3xl mt-0'>
                            <XIcon className='w-6 h-6 mr-2' /> Cancel
                        </Link>
                    </Button>
                </CardHeader>
                <CardDescription className='px-[2vw] pb-[2vw]'>
                    <AddClient type='ADD' />
                </CardDescription>
            </Card>
        </div>
    
    </>
  )
}
