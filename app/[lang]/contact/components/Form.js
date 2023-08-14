'use client'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { toast } from '@/components/ui/use-toast'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

const items = [
    {
        id: 'general',
        label: 'General'
    },
    {
        id: 'bugfix',
        label: 'Bugfix'
    },
    {
        id: 'agency',
        label: 'Agency'
    },
    {
        id: 'press',
        label: 'Press'
    },
    {
        id: 'help',
        label: 'Help'
    },
    {
        id: 'other',
        label: 'Other'
    }
]

const FormSchema = z.object({
    studio_name: z.string().min(2, {
        message: 'Studio Name must be at least 2 characters.'
    }),
    first_name: z.string(),
    last_name: z.string(),
    email: z.string().email(),
    phone_number: z.coerce.number({
        invalid_type_error: 'Please enter a valid phone number',
        required_error: 'Required'
    }),
    address: z.string(),
    items: z.string()
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
                    name='Message'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Message </FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder='Leave us a message...'
                                    {...field}
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name='items'
                    render={() => (
                        <FormItem>
                            <div className='mb-4'>
                                <FormLabel className='text-normal'>Request</FormLabel>
                            </div>
                            <div className='grid grid-cols-2 gap-4'>
                                {items.map(item => (
                                    <FormField
                                        key={item.id}
                                        control={form.control}
                                        name='items'
                                        render={({ field }) => {
                                            return (
                                                <FormItem
                                                    key={item.id}
                                                    className='flex flex-row items-start space-x-3 space-y-0'
                                                >
                                                    <FormControl>
                                                        <Checkbox
                                                            checked={field.value?.includes(item.id)}
                                                            onCheckedChange={checked => field.onChange(checked ? item.id : '')}
                                                        />
                                                    </FormControl>
                                                    <FormLabel className='font-normal'>{item.label}</FormLabel>
                                                </FormItem>
                                            )
                                        }}
                                    />
                                ))}
                            </div>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button
                    type='submit'
                    className='mt-8 inline-flex h-14 items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-violet-500 to-violet-400 px-7 py-4 shadow'
                >
                    <span className='text-base font-semibold leading-normal text-white'>Get started</span>
                </Button>
            </form>
        </Form>
    )
}
