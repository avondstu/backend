import {z} from 'zod'

export const schemaClient = z.object({
    nama: z.string({required_error:'Nama Wajib Di Isi'}).min(4,{message:'Minimal 4 Karakter'}),
    email : z.string({required_error:'Email Wajib Di Isi'}).min(10, {message:'Email Terlalu Pendek'}),
    brand : z.string({required_error:'Brand Wajib Di Isi'}).min(3, {message:'Minimal 3 Karakter'}),
    category: z.string({required_error:'Category Wajib Di Isi'}),
    address: z.string({required_error:'Alamat Wajib Di Isi'}),
    services : z.string({required_error:'Service Wajib Di Pilih'}),
    telepon : z.string({required_error:'Telepon Wajib Di Isi'})
})