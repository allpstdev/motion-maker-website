import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import { cva } from 'class-variance-authority'
import * as React from 'react'

const buttonVariants = cva(
    'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
    {
        variants: {
            variant: {
                default: 'bg-slate-800 bg-opacity-5',
                secondary: 'bg-gradient-to-r from-violet-500 to-violet-400 text-white',
                tertiary: 'bg-white text-black border border-slate-800 border-opacity-10',
                link: 'bg-white text-black'
            }
        },
        defaultVariants: {
            variant: 'default'
        }
    }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
        <Comp
            className={cn(buttonVariants({ variant, size, className }))}
            ref={ref}
            {...props}
        />
    )
})
Button.displayName = 'Button'

export { Button, buttonVariants }
