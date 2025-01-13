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
    tagline: z.string({required_error:'Wajib DI Isi'}).min(10, {message:'Text Terlalu Pendek (min. 10 Karakter'}),
    headline: z.string({required_error:'Wajib DI Isi'}).min(10, {message:'Text Terlalu Pendek (min. 10 Karakter'}),
    description: z.string({required_error:'Wajib DI Isi'}).min(10, {message:'Text Terlalu Pendek (min. 10 Karakter'}),
    mainButton: z.string({required_error:'Wajib DI Isi'}).min(5, {message:'Text Terlalu Pendek (min. 5 Karakter)'}),
    mainLink: z.string({required_error:'Wajib DI Isi'}),
    secondButton: z.string({required_error:'Wajib DI Isi'}).min(5, {message:'Text Terlalu Pendek (min. 5 Karakter)'}),
    secondLink: z.string({required_error:'Wajib DI Isi'}),
    // layanan: z.string({required_error:'Wajib DI Isi'}).min(10, {message:'Text Terlalu Pendek'})
})

export const schemaService = z.object({
    layanan: z.string({required_error:'Wajib Di Isi'}).min(5,{message:'Min.5 Karakter'}),
    description: z.string({required_error:'Wajib Di Isi'}).min(10,{message:'Min.10 Karakter'})
})

export const schemaServicePage = z.object({
    tagline : z.string({required_error:'Wajib Di Isi'}),
    headline : z.string({required_error:'Wajib Di Isi'}).min(5,{message:'Min.5 Karakter'}),
    description: z.string({required_error:'Wajib Di Isi'}).min(10,{message:'Min. 10 Karakter'})
})

export const schemaCompany = z.object({
    name : z.string({required_error:'Wajib Di Isi'}),
    whatsapp : z.string({required_error:'Wajib Di Isi'}),
    email : z.string({required_error:'Wajib Di Isi'}),
    iglink : z.string({required_error: 'Wajib Di Isi'}),
    tiktoklink : z.string({required_error:'Wajib Di Isi'}),
    linkedin : z.string({required_error:'Wajib Di Isi'}),
    description : z.string({required_error:'Wajib Di Isi'}).min(20,{message:'Min. 20 Karakter'}),
})