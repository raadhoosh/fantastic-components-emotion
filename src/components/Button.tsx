import styled from '../common/styled';
import Variables from './Variables';

function hexToRgb(hex: string) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    const re = result ? `${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)}` : `0,0,0`;
    return re;
}
const Button = styled('button')(
    (props: (Variables.ButtonProps | any)) => {
        const btn = {
            'display': 'inline-block',
            'text-align': 'center',
            'font-weight': 'normal',
            'white-space': 'nowrap',
            'vertical-align': 'middle',
            '-webkit-user-select': 'none',
            '-moz-user-select': 'none',
            '-ms-user-select': 'none',
            'cursor': 'pointer',
            'user-select': 'none',
            'border': '1px solid transparent',
            'padding': '.375rem .75rem',
            'font-size': '1rem',
            'line-height': '1.5em',
            'border-radius': '.25rem',
            'transition': `color .15s ease-in-out,
                           background-color.15s ease-in-out,
                           border-color .15s ease-in-out,
                           box-shadow .15s ease-in-out
             `,
            'margin': props.margin ? props.margin : 0,
            'color': props.color ? props.color : '#fff',
            'backgroundColor': 'transparent'
        };
        if (props.primary) {
            btn.backgroundColor = props.theme.color.primary;
            if (!props.noShadow) {
                btn['&:hover'] = {
                    boxShadow: `0 0 0 0.2rem rgba(${hexToRgb(props.theme.color.primary)},.5)`
                };
            }
            return btn;
        }
        if (props.success) {
            btn.backgroundColor = props.theme.color.success;
            if (!props.noShadow) {
                btn['&:hover'] = {
                    boxShadow: `0 0 0 0.2rem rgba(${hexToRgb(props.theme.color.success)},.5)`
                };
            }
            return btn;
        }
        if (props.info) {
            btn.backgroundColor = props.theme.color.info;
            if (!props.noShadow) {
                btn['&:hover'] = {
                    boxShadow: `0 0 0 0.2rem rgba(${hexToRgb(props.theme.color.info)},.5)`
                };
            }
            return btn;
        }
        if (props.danger) {
            btn.backgroundColor = props.theme.color.danger;
            if (!props.noShadow) {
                btn['&:hover'] = {
                    boxShadow: `0 0 0 0.2rem rgba(${hexToRgb(props.theme.color.danger)},.5)`
                };
            }
            return btn;
        }
        if (props.warning) {
            btn.backgroundColor = props.theme.color.warning;
            if (!props.noShadow) {
                btn['&:hover'] = {
                    boxShadow: `0 0 0 0.2rem rgba(${hexToRgb(props.theme.color.warning)},.5)`
                };
            }
            return btn;
        }
        if (props.light) {
            btn.color = props.color ? props.color : '#000';
            btn.backgroundColor = props.theme.color.light;
            if (!props.noShadow) {
                btn['&:hover'] = {
                    boxShadow: `0 0 0 0.2rem rgba(${hexToRgb(props.theme.color.light)},.5)`
                };
            }
            return btn;
        }
        if (props.dark) {
            btn.backgroundColor = props.theme.color.dark;
            if (!props.noShadow) {
                btn['&:hover'] = {
                    boxShadow: `0 0 0 0.2rem rgba(${hexToRgb(props.theme.color.dark)},.5)`
                };
            }
            return btn;
        }

        btn.backgroundColor = props.backgroundColor ? props.backgroundColor : props.theme.color.primary;
        if (!props.noShadow) {
            btn['&:hover'] = {
                boxShadow: `0 0 0 0.2rem rgba(${hexToRgb(btn.backgroundColor)},.5)`
            };
        }
        return btn;
    }
);

export default Button;
