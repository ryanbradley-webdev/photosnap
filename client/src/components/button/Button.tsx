import { ReactNode } from "react"
import styles from './button.module.css'

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    variant: 'white' | 'black' | undefined
    children: ReactNode
}

export default function Button({
    variant,
    children,
    ...props
}: ButtonProps) {
    const generateClassName = () => {
        switch(variant) {
            default:
                return styles.black_btn
        }
    }

    return (
        <button
            className={generateClassName()}
            {...props}
        >

            {children}

        </button>
    )
}