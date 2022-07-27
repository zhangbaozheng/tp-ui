import React, { AnchorHTMLAttributes, ButtonHTMLAttributes, FC, ReactNode } from "react"

type ButtonType = 'primary' | 'default' | 'link'

interface BaseButtonProps {
    type?: String,
    href?: String,
    disabled?: boolean,
    btnType?: ButtonType,
}

type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>

// a链接的button的属性
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>

// 有些属性是button上必须但是在a链接上是可选的
// Partial可以把对应类型的所有属性都变成可选的
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

const Button: FC<ButtonProps> = (props) => {
    const { btnType, href, disabled, children, ...restProps } = props
    if(btnType === 'link' && href) {
        return (
            <a href={href} {...restProps}>
                111
            </a>
        )
    }
    return (
        <div>
            <button 
              disabled={disabled}
              {...restProps}
            >
                {children}
            </button>
        </div>
    )
}

Button.defaultProps = {
    disabled: false,
    btnType: 'default'
}
export default Button