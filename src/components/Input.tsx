import styled from '../common/styled';
import Variables from './Variables';

function hexToRgb(hex: string) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    const re = result ? `${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)}` : `0,0,0`;
    return re;
}

const Input = styled('input')(
    (props: (Variables.InputProps | any)) => {
        const css = {
            'cursor': 'auto',
            'display': 'block',
            'width': '100%',
            'padding': '.375rem .75rem',
            'font-size': '1rem',
            'line-height': '1.5',
            'color': '#495057',
            'background-color': '#fff',
            'background-clip': 'padding-box',
            'border': `1px solid ${props.theme.color.primary}`,
            'border-radius': '.25rem',
            'transition': 'border-color .15s ease-in-out,box-shadow .15s ease-in-out',
            '&:focus': {
                'color': '#495057',
                'background-color': '#fff',
                'border-color': props.theme.color.primary,
                'outline': 0,
                'box-shadow': !props.noShadow ? `0 0 0 0.2rem rgba(${hexToRgb(props.theme.color.primary)},.25)` : 'none',
            }
        };
        if (props.small) {
            css.padding = '.25rem .5rem';
            css['font-size'] = '.875rem';
            css['line-height'] = '1.5';
            css['border-radius'] = '.2rem';
        }
        if (props.large) {
            css.padding = '.5rem 1rem';
            css['font-size'] = '1.25rem';
            css['line-height'] = '1.5';
            css['border-radius'] = '.3rem';
        }
        return css;
    }
);

export default Input;
