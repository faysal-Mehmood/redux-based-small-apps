import React from 'react';
import { parseISO, formatDistanceToNow } from 'date-fns';
const Timeage = ({ timestamp }) => {
  let timeAgo = '';
  if (timestamp) {
    const fdate = parseISO(timestamp);
    const timep = formatDistanceToNow(fdate);
    timeAgo = `${timep} ago`;
  }

  return (
    <span title={timestamp}>
      &nbsp; <i>{timeAgo}</i>
    </span>
  );
};

export default Timeage;
