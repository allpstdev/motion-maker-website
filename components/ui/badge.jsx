import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'
import * as React from 'react'

const badgeVariants = cva(
    'inline-flex items-center rounded-full border border-slate-200 px-2.5 py-0.5 text-xs font-semibold transition-colors',
    {
        variants: {
            variant: {
                default: 'border-transparent bg-slate-900 text-slate-50',
                secondary: 'border-transparent bg-slate-100 text-slate-900',
                destructive: 'border-transparent bg-red-500 text-slate-50',
                outline: 'text-slate-950'
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
