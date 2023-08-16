import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'
import * as React from 'react'

const badgeVariants = cva(
    'inline-flex items-center rounded-full border border-slate-200 px-2.5 py-0.5 text-xs font-semibold transition-colors',
    {
        variants: {
            variant: {
                default: 'border-transparent bg-slate-800 bg-opacity-5 text-slate-800',
                secondary: 'border-transparent bg-purple-100 text-violet-400',
                tertiary: 'border-transparent bg-transparent text-violet-700'
            }
        },
        defaultVariants: {
            variant: 'default'
        }
    }
)

function Badge({ className, variant, ...props }) {
    return (
        <div
            className={cn(badgeVariants({ variant }), className)}
            {...props}
        />
    )
}

export { Badge, badgeVariants }
