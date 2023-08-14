'use client'

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { toast } from '@/components/ui/use-toast'
import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import google_icon from '../../../../public/google_colored_logo.svg'

const FormSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8)
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
                    name='email'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className='text-sm font-medium leading-tight text-slate-700'>E-Mail</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder='you@email.com'
                                    {...field}
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='password'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className='text-sm font-medium leading-tight text-slate-700'>Password </FormLabel>
                            <FormControl>
                                <Input
                                    placeholder='password'
                                    {...field}
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <div className='inline-flex items-center justify-start self-stretch'>
                    <div className='flex h-5 shrink grow basis-0 items-start justify-start gap-2'>
                        <div className='flex items-center justify-center gap-2 pt-0.5'>
                            <input
                                id='remember_me'
                                type='checkbox'
                                className='h-3 w-3'
                            />
                            <label
                                htmlFor='remember_me'
                                className='text-sm font-medium leading-tight text-slate-700'
                            >
                                Remember for 30 days
                            </label>
                        </div>
                    </div>
                    <div className='flex w-[114px] items-center justify-center gap-2 self-stretch'>
                        <Link
                            href='/'
                            className='text-sm font-semibold leading-tight text-violet-700'
                        >
                            Forgot password
                        </Link>
                    </div>
                </div>
                <Button
                    type='submit'
                    className='inline-flex h-14 w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-violet-500 to-violet-400 px-7 py-4 shadow'
                >
                    <span className='text-base font-semibold leading-normal text-white'>Sign in</span>
                </Button>
                <Button className='inline-flex h-11 items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white px-4 py-2.5 shadow'>
                    <Image
                        src={google_icon}
                        alt=''
                        height={24}
                        width={24}
                    />
                    <div className='text-base font-semibold leading-normal text-slate-700'>Sign in with Google</div>
                </Button>
                <div className='inline-flex h-5 w-full items-baseline justify-center gap-1'>
                    <div className='text-sm font-normal leading-tight text-slate-600'>Don’t have an account?</div>
                    <div className='flex items-center justify-center gap-2'>
                        <Link
                            href='/'
                            className='text-sm font-semibold leading-tight text-violet-700'
                        >
                            Sign up
                        </Link>
                    </div>
                </div>
            </form>
        </Form>
    )
}
