import { Button } from '@/components/ui/button'
import { ActionResult } from '@/types'
import { Trash } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { useFormState, useFormStatus } from 'react-dom'
import { deleteClient } from '../client/lib/action'

const initialState: ActionResult = {
    error:''
}

interface FormClientPages {
    id: number
}

function DeleteButton(){
    const {pending} = useFormStatus();
     return(
        <Button size='sm' className='bg-red-600' disabled={pending}>
                            <Trash className='w-4 h-4' /> {pending ? 'Loading' : 'Delete'}
                    </Button>
     )
}

export default function FormDelete({id}: FormClientPages) {

    const deleteClientWithID = (_:unknown, formData:FormData) => deleteClient(_,formData,id)
    const [state,formAction] = useFormState(deleteClientWithID, initialState)
  return (
    <form action={formAction}>
        <DeleteButton/>
    </form>
  )
}
