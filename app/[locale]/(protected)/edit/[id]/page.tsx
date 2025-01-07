import React from 'react'
import { AddClient } from '../../_components/form-client'
import { getClientWithID } from '../../lib/data'
import { redirect } from 'next/navigation'

type TParam = {
    id: string
}

interface EditPageProp {
    params: TParam
}



export default async function page({params}:EditPageProp) {

    const client = await getClientWithID(params.id)

    if(!client) {
        return redirect('/')
    }

  return (
    <>
        <AddClient type='EDIT' data={client} />
    </>
  )
}
