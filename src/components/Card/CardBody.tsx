import styled from '../../common/styled';
import Variables from '../Variables';
const CardBody = styled('div')(
    (props: (Variables.CardBodyProps | any)) => {
        const base = {
            flex: '1 1 auto',
            padding: '.75rem .75rem',
            '*, ::after, ::before': {
                'box-sizing': 'border-box',
            }
        };
        return base;
    }
);

export default CardBody;
