import React from 'react';
import { ProgressBar } from 'react-bootstrap';

interface Props {
  label: string;
  value?: number;
  daily: number;
  unit: string;
}

const GDAProgress: React.FC<Props> = ({ label, value = 0, daily, unit }) => {
  const percent = Math.round((value / daily) * 100);

  return (
    <div className="mb-2">
      <p>{label}: {value} {unit}</p>
      <ProgressBar now={percent} label={`${percent}%`} />
    </div>
  );
};

export default GDAProgress;
