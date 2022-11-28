import StarRateIcon from '@mui/icons-material/StarRate';

import styles from './ribbon.module.scss';

export const TYPE = {
  basic: 'basic',
  protruding: 'protruding',
  round: 'round',
};

export default function Ribbon({type, active, onClick}) {
  const iconStyle = {color: active ? 'white' : 'inherit', fontSize: '20px'};

  const ribbonStyles = `
  ${type === TYPE.basic && styles.basic}
  ${type === TYPE.protruding && styles.protruding}
  ${type === TYPE.round && styles.round}
`;

  return (
    <div
      className={ribbonStyles}
      onClick={onClick}
      onKeyPress={onClick}
      role="button"
      tabIndex="0"
    >
      <StarRateIcon sx={{iconStyle}} />
    </div>
  );
}
