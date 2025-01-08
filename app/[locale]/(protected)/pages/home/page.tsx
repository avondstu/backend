


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



export default async function page() {

    const pageData = await getHomeData();

  return (
    <>
   <section>
    <FormHome data={pageData} />
   </section>
    </>
  )
}
