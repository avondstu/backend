"use client"

import { Button } from '@/components/ui/button'
import { ActionResult } from '@/types'
import { BrandServices } from '@prisma/client'
import React from 'react'
import { editServices } from '../lib/action'
import { useFormState } from 'react-dom'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { AlertCircle } from 'lucide-react'

interface FormServiceParam {
    data?: BrandServices| null
}

const initialState: ActionResult = {
    error:""
}

export default function FormService({data}:FormServiceParam) {

    const updateServiceWithID = (_:unknown, formData:FormData) => editServices(_,formData,data?.id!)

    const [state, formAction] = useFormState(updateServiceWithID, initialState);

  return (
    <form action={formAction} className="w-2/3 space-y-6">
      {state.error !== "" && (
        <Alert variant="soft" className="flex items-center">
          <AlertCircle className="h-6 w-6" />
          <AlertTitle className="mb-0">Error</AlertTitle>
          <AlertDescription>{state.error}</AlertDescription>
        </Alert>
      )}
      <div className="lg:grid flex lg:grid-cols-3 justify-between flex-wrap items-top gap-7">
        <div className="w-full">
          <label htmlFor="nama-services" className="block">
            Nama Services
          </label>
          <div className="mt-3">
            <input
              id="nama-services"
              name="nama-services"
              placeholder="Service"
              className="input border w-full text-black border-black px-[1vw] rounded-md py-[0.5vw]"
              type="text"
              defaultValue= {data?.layanan}
            />
          </div>
        </div>

        <div className="w-full col-span-2">
          <label htmlFor="desc-services" className="block">
            Deskripsi Layanan
          </label>
          <div className="mt-3">
            <input
              id="desc-services"
              name="desc-services"
              placeholder="Service"
              className="input border w-full text-black border-black px-[1vw] rounded-md py-[0.5vw]"
              type="text"
              defaultValue= {data?.description}
            />
          </div>
        </div>
      </div>

      <Button type="submit">Save Update</Button>
    </form>
  )
}
