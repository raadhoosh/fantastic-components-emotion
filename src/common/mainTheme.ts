import { Theme } from './styled';
export function ColorLuminance(hex: string, lum: number) {
    // tslint:disable-next-line:indent
    hex = String(hex).replace(/[^0-9a-f]/gi, '');
    if (hex.length < 6) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    lum = lum || 0;
    // convert to decimal and change luminosity
    // tslint:disable-next-line:one-variable-per-declaration
    let rgb = '#', c, i;
    for (i = 0; i < 3; i++) {
        c = parseInt(hex.substr(i * 2, 2), 16);
        c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
        rgb += ('00' + c).substr(c.length);
    }
    return rgb;
}

/* Resta el porcentaje indicado a un color (RR, GG o BB) hexadecimal para oscurecerlo */
const subtractLight = (color: string, amount: number) => {
    const cc = parseInt(color, 16) - amount;
    const p = (cc < 0) ? 0 : (cc);
    const c = (p.toString(16).length > 1) ? p.toString(16) : `0${p.toString(16)}`;
    return c;
};
/* Oscurece un color hexadecimal de 6 caracteres #RRGGBB segun el porcentaje indicado */
const darken = (color: string, amount: any) => {
    color = (color.indexOf('#') >= 0) ? color.substring(1, color.length) : color;
    const t = parseInt(`${(255 * parseFloat(amount)) / 100}`);
    return color = `#${subtractLight(color.substring(0, 2), t)}${subtractLight(color.substring(2, 4), t)}${subtractLight(color.substring(4, 6), t)}`;
};
const mainTheme: Theme = {
    color: {
        primary: '#0050ef',
        primary_dark: darken('#0050ef', 45),
        secondary: '#00aba9',
        secondary_dark: darken('#00aba9', 45),
        warning: '#f0ad4e',
        warning_dark: darken('#f0ad4e', 45),
        light: '#f8f9fa',
        light_dark: darken('#f8f9fa', 45),
        dark: '#000',
        success: '#d4edda',
        success_dark: '#155724',
        info: '#5bc0de',
        info_dark: darken('#5bc0de', 45),
        danger: '#d9534f',
        danger_dark: darken('#d9534f', 45),
    }
};

export default mainTheme;
