import React, { ReactNode, useState } from 'react';

interface CardDataStatsProps {
  title:string,
  children: ReactNode,
  toggler():any,
}

const CardDataStats: React.FC<CardDataStatsProps> = ({
  children,
  title,
  toggler
}) => {
  // const [typeWaste, setTypeWaste] = useState();
  // const handleClickInfo = () => {

  //   toggler();
  // }
  return (
    <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark" onClick={()=>toggler()}>
      <p className='text-2xl'>{title}</p>

      {children}
    </div>
  );
};

export default CardDataStats;
