// tslint:disable-next-line:no-namespace
declare namespace Variables {

    /**
     * @description it is props for button component
     */
    interface Color {
        primary?: boolean;
        secondary?: boolean;
        success?: boolean;
        info?: boolean;
        warning?: boolean;
        danger?: boolean;
        light?: boolean;
        dark?: boolean;
    }

    /**
     * @description it is props for button component
     */
    interface Base {
        bgColor: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark',
        borderColor: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark',
    }

    /**
     * @description it is props for button component
     */
    interface ButtonProps extends Variables.Color {
        backgroundColor?: string;
        color?: string;
        margin?: string;
        noShadow?: boolean;
    }

    /**
     * @description it is props for Card component
     */
    interface CardProps extends Variables.Base {
        backgroundColor?: string;
        color?: string;
        radius?: any;
        margin?: string;
        noShadow?: boolean;
    }

    /**
     * @description it is props for CardHeader component
     */
    interface CardHeaderProps extends Variables.Base {
        backgroundColor?: string;
        color?: string;
        radius?: any;
        margin?: string;
        noShadow?: boolean;
    }

    /**
     * @description it is props for CardBody component
     */
    interface CardBodyProps extends Variables.Color {
        backgroundColor?: string;
        color?: string;
        radius?: any;
        margin?: string;
        noShadow?: boolean;
    }

    /**
     * @description it is props for CardFooter component
     */
    interface CardFooterProps extends Variables.Color {
        backgroundColor?: string;
        color?: string;
        radius?: any;
        margin?: string;
        noShadow?: boolean;
    }

    /**
     * @description it is props for Label component
     */
    interface LabelProps extends Variables.Color {
        backgroundColor?: string;
        color?: string;
        margin?: string;
        badge?: boolean | number
    }

    /**
     * @description it is props for button component
     */
    interface AlertProps extends Variables.Color {
        backgroundColor?: string;
        color?: string;
        margin?: string;
        hide?: boolean;
    }

    /**
     * @description it is props for button component
     */
    interface InputProps {
        backgroundColor?: string;
        color?: string;
        margin?: string;
        small?: boolean;
        large?: boolean;
        noShadow?: boolean;
    }

    /**
     * @description it is props for code component
     */
    interface CodeProps {
        backgroundColor?: string;
        children?: any
    }
}
export default Variables;
