"use client"

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { ActionResult } from '@/types'
import { ServicePage } from '@prisma/client'
import { AlertCircle } from 'lucide-react'
import React from 'react'
import { useFormState, useFormStatus } from 'react-dom'
import { editServPage } from '../../service/lib/action'

interface formServicePages{
  data?: ServicePage | null
}

const initialState: ActionResult ={
  error:"",
}

function SaveButton() {
    const { pending } = useFormStatus();
    return (
      <Button type="submit" disabled={pending}>
        {pending ? "Loading" : "Save Update"}
      </Button>
    );
  }


export default function ServiceForm({data}: formServicePages) {
  const EditServ = (_:unknown, formData:FormData) => editServPage(_,formData,1);

  const [state, formAction] = useFormState(EditServ,initialState)
 
  return (
    <>
    <section>
    <form action={formAction}>
        {state.error !== "" && (
          <Alert variant="soft" className="flex items-center">
            <AlertCircle className="h-6 w-6" />
            <AlertTitle className="mb-0">Error</AlertTitle>
            <AlertDescription>{state.error}</AlertDescription>
          </Alert>
        )}

<div className="lg:grid flex lg:grid-cols-2 pt-[2vw] justify-between flex-wrap items-top gap-7">
          <div className="w-full ">
            <label htmlFor="taglone" className="block">
              Tagline
            </label>
            <div className="mt-3">
              <input
                id="tagline"
                name="tagline"
                placeholder="Company Tagline"
                className="input border text-black border-black px-[1vw] w-full rounded-md py-[0.5vw]"
                type="text"
                defaultValue={data?.tagline}
              />
            </div>
          </div>

          <div className="w-full ">
            <label htmlFor="headline" className="block">
              Headline
            </label>
            <div className="mt-3">
              <input
                id="headline"
                name="headline"
                placeholder="Company Headline"
                className="input border text-black border-black px-[1vw] w-full rounded-md py-[0.5vw]"
                type="text"
                defaultValue={data?.headline}
              />
            </div>
          </div>

          <div className="w-full col-span-2 mb-[1vw]">
            <label htmlFor="description" className="block">
              Description
            </label>
            <div className="mt-3">
              <Textarea
                id="description"
                name="description"
                defaultValue={data?.desc}
                placeholder="Service Section Description"
                className="input border border-black px-[1vw] rounded-md py-[0.5vw]"
              ></Textarea>
            </div>
          </div>
        </div>

       <SaveButton/>
    </form>
    </section>
    </>
  )
}
