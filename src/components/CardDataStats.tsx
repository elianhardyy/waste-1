import React, { ReactNode } from 'react';

interface CardDataStatsProps {
  title:string,
  children: ReactNode,
  // toggler():any
}

const CardDataStats: React.FC<CardDataStatsProps> = ({
  children,
  title,
  // toggler
}) => {
  // onClick={()=>toggler()}
  return (
    <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark" >
      <p className='text-2xl'>{title}</p>
      {children}
    </div>
  );
};

export default CardDataStats;
