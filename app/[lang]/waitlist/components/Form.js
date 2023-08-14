'use client'

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { toast } from '@/components/ui/use-toast'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

const FormSchema = z.object({
    first_name: z.string(),
    last_name: z.string(),
    email: z.string().email()
})

export function InputForm() {
    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            items: ''
        }
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
                <div className='flex flex-col justify-between gap-8 sm:flex-row lg:flex-row'>
                    <FormField
                        control={form.control}
                        name='first_name'
                        render={({ field }) => (
                            <FormItem className='w-full'>
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
                            <FormItem className='w-full'>
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
                    name='email'
                    render={({ field }) => (
                        <FormItem className='border-b border-slate-300 pb-6'>
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
                <div className='text-base font-normal leading-normal text-slate-800 text-opacity-60'>
                    Onboarding to the Motion Maker ecosystem. <br />
                    Lorem ipsum dolor sit amet consectetur. Commodo quisque tellus nunc libero mauris. Fusce a at lorem leo faucibus. Eu
                    integer facilisis sed vitae viverra velit.
                </div>
                <Button
                    variant='secondary'
                    type='submit'
                    className='rounded-x inline-flex h-14 items-center justify-center gap-3 px-7 py-4 shadow'
                >
                    <span className='text-base font-semibold leading-normal text-white'>{"I'm In"}</span>
                </Button>
            </form>
        </Form>
    )
}
