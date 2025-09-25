import React from 'react';
import { Badge } from 'react-bootstrap';

interface Props {
  labels?: string[];
}

const LabelBadges: React.FC<Props> = ({ labels }) => {
  if (!labels) return null;

  return (
    <div className="mt-3">
      {labels.map(label => (
        <Badge bg="success" className="me-1" key={label}>
          {label.replace('en:', '').replace('-', ' ')}
        </Badge>
      ))}
    </div>
  );
};

export default LabelBadges;
