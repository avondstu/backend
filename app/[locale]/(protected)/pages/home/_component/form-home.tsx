"use client"

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { AlertCircle } from 'lucide-react'
import React from 'react'
import { getHomeData } from '../lib/data'
import { ActionResult } from '@/types'
import { useFormState, useFormStatus } from 'react-dom'
import { HomePage } from '@prisma/client'
import { editHome } from '../lib/action'

interface FormHomePages {
    data?: HomePage | null
}

const initialState: ActionResult = {
    error: ""
};

function SaveButton() {
    const {pending} = useFormStatus();
    return (
        <Button type="submit" disabled={pending}>{pending ? 'Loading': 'Save Update'}</Button>
    )
}


export default function FormHome({data}: FormHomePages) {

    const EditHomePage = (_:unknown, formData: FormData) => editHome(_,formData,1);

      // eslint-disable-next-line react-hooks/rules-of-hooks
    const [state, formAction] = useFormState(EditHomePage,initialState);
    
  return (
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
        <div className="w-full col-span-2 mb-[2vw]">
          <label htmlFor="why" className="block">
            Why Effektiv is effective?
          </label>
          <div className="mt-3">
            <Textarea id='why' name='why' defaultValue={data?.why} placeholder='Why Effektiv is effective?' className="input border border-black px-[1vw] rounded-md py-[0.5vw]"></Textarea>
          </div>
        </div>
      </div>

      <Button type="submit">Save Update</Button>
        </form>
    </section>
  )
}


