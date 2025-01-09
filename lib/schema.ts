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

export const schemaClientEdit = schemaClient.extend({
    id: z.number({required_error:'Client ID is Required'})
})

export const schemaHome = z.object({
    // id: z.number({required_error:'ID Is Required'}),
    tagline: z.string({required_error:'Wajib DI Isi'}).min(10, {message:'Text Terlalu Pendek'}),
    headline: z.string({required_error:'Wajib DI Isi'}).min(10, {message:'Text Terlalu Pendek'}),
    description: z.string({required_error:'Wajib DI Isi'}).min(10, {message:'Text Terlalu Pendek'}),
    mainButton: z.string({required_error:'Wajib DI Isi'}).min(5, {message:'Text Terlalu Pendek'}),
    mainLink: z.string({required_error:'Wajib DI Isi'}),
    secondButton: z.string({required_error:'Wajib DI Isi'}).min(5, {message:'Text Terlalu Pendek'}),
    secondLink: z.string({required_error:'Wajib DI Isi'}),
    // layanan: z.string({required_error:'Wajib DI Isi'}).min(10, {message:'Text Terlalu Pendek'})
})

export const schemaService = z.object({
    layanan: z.string({required_error:'Wajib Di Isi'}).min(5,{message:'Min.5 Karakter'}),
    description: z.string({required_error:'Wajib Di Isi'}).min(10,{message:'Min.5 Karakter'})

})