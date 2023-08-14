'use client'

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { toast } from '@/components/ui/use-toast'
import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import puzzle_piece from '../../../../public/puzzle_piece.svg'

const FormSchema = z.object({
    studio_name: z.string().min(2, {
        message: 'Studio Name must be at least 2 characters.'
    }),
    first_name: z.string(),
    last_name: z.string(),
    company_email: z.string().email(),
    phone_number: z.coerce.number({
        invalid_type_error: 'Please enter a valid phone number',
        required_error: 'Required'
    }),
    address: z.string()
})

export function InputForm() {
    const form = useForm({
        resolver: zodResolver(FormSchema)
    })

    function onSubmit(data) {
        toast({
            title: 'You submitted the following values:',
            description: (
                <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
                    <code className='text-white'>{JSON.stringify(data, null, 2)}</code>
                </pre>
            )
        })
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className='flex w-full flex-col gap-6'
            >
                <FormField
                    control={form.control}
                    name='studio_name'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Studio Name</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder='Studio Name'
                                    {...field}
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <div className='flex flex-row justify-between'>
                    <FormField
                        control={form.control}
                        name='first_name'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>First Name</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder='First Name'
                                        {...field}
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='last_name'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Last Name</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder='Last Name'
                                        {...field}
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                </div>

                <FormField
                    control={form.control}
                    name='company_email'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Corporate E-Mail</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder='you@company.com'
                                    {...field}
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <div>
                    <FormLabel>Phone number</FormLabel>
                    <div className='relative mt-2 flex w-full flex-row items-end justify-start gap-0 rounded-md border bg-white'>
                        <FormField
                            control={form.control}
                            name='country_code'
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Select>
                                            <SelectTrigger className='w-14 border-none bg-white'>
                                                <SelectValue defaultValue='+9' />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value='+9'>DE</SelectItem>
                                                <SelectItem value='+91'>IN</SelectItem>
                                                <SelectItem value='+1'>US</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='phone_number'
                            render={({ field }) => (
                                <FormItem className='flex-1'>
                                    <FormControl>
                                        <Input
                                            className='border-none'
                                            type='tel'
                                            placeholder='+49 555 000000'
                                            {...field}
                                            test={console.log(form.control._formState.errors)}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </div>
                    {/* {form.control._formState.errors.phone_number && (
                        <p className='py-2.5 text-sm font-medium text-red-600'>{form.control._formState.errors.phone_number.message}</p>
                    )} */}
                </div>
                <FormField
                    control={form.control}
                    name='address'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Address </FormLabel>
                            <FormControl>
                                <Input
                                    placeholder='loremstreet 02, 3234, Location'
                                    {...field}
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <Button
                    type='submit'
                    className='mt-2 flex h-[60px] gap-3 rounded-xl bg-gradient-to-r from-violet-500 to-violet-400 p-4 align-middle text-white shadow'
                >
                    <span className='text-lg font-semibold leading-7 text-white'>Start your 30-day free trail</span>
                    <Image
                        height={24}
                        width={24}
                        alt='puzzle_piece'
                        src={puzzle_piece}
                    />
                </Button>
            </form>
        </Form>
    )
}
