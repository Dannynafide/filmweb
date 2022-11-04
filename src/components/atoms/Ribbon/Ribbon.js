import StarRateIcon from '@mui/icons-material/StarRate';

import styles from './ribbon.module.scss';

export const ribbonType = {
  basic: 'basic',
  protruding: 'protruding',
  round: 'round',
};

export default function Ribbon({type, active, onClick}) {
  const color = {color: active ? 'white' : 'inherit', fontSize: '20px'};

  const classs = `
  ${type === ribbonType.basic && styles.basic}
  ${type === ribbonType.protruding && styles.protruding}
  ${type === ribbonType.round && styles.round}
`;

  return (
    <div
      className={classs}
      onClick={onClick}
      onKeyPress={onClick}
      role="button"
      tabIndex="0"
    >
      <StarRateIcon sx={{color}} />
    </div>
  );
}
