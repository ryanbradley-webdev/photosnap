import { ReactNode } from "react"
import styles from './button.module.css'
import Arrow from "../../assets/Arrow"

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    variant: 'white' | 'black' | 'arrow-black' | 'arrow-white' | undefined
    children: ReactNode
}

export default function Button({
    variant,
    children,
    ...props
}: ButtonProps) {
    const generateClassName = () => {
        switch(variant) {
            case 'arrow-black':
                return styles.black_arrow_btn

            case 'arrow-white':
                return styles.white_arrow_btn

            case 'white':
                return styles.white_btn

            case 'black':
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

            {variant?.includes('arrow') && <Arrow />}

        </button>
    )
}