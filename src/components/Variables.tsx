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
    interface ButtonProps extends Variables.Color {
        backgroundColor?: string;
        color?: string;
        margin?: string;
        noShadow?: boolean;
    }

    /**
     * @description it is props for button component
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
    }

    /**
     * @description it is props for button component
     */
    interface InputّProps {
        backgroundColor?: string;
        color?: string;
        margin?: string;
        small?: boolean;
        large?: boolean;
        noShadow?: boolean;
    }
}
export default Variables;
