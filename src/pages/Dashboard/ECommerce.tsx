import React, {useEffect,useState} from 'react';
import CardDataStats from '../../components/CardDataStats';
import ChartOne from '../../components/Charts/ChartOne';
import ChartThree from '../../components/Charts/ChartThree';
import ChartTwo from '../../components/Charts/ChartTwo';
import ChatCard from '../../components/Chat/ChatCard';
import MapOne from '../../components/Maps/MapOne';
import TableOne from '../../components/Tables/TableOne';
import DefaultLayout from '../../layout/DefaultLayout';
import { ref, onValue} from "firebase/database";
import { database } from '../../utils/firebaseConfig';
import {Flat} from '@alptugidin/react-circular-progress-bar'
import Modals from '../../utils/Modals';
import useToggle from '../../hooks/useToggle';
const ECommerce: React.FC = () => {
  const [datas, setDatas] : any = useState({});
  const [ultra2, setUltra2] : any = useState({})
  const {on,toggler} = useToggle();
  useEffect(()=>{
    const useRef = ref(database,'hcsr1');
    const useRef2 = ref(database,'hcsr2');
    //const useRefAlarm = ref(database,'buzzer1')
    onValue(useRef,(snapshot)=>{
      //setDatas([]);
      const dataRtdb = snapshot.val();
      if(dataRtdb !== null){
        
        setDatas(dataRtdb);
      }
    })
    onValue(useRef2,(snapshot)=>{
      //setDatas([]);
      const dataRtdb2 = snapshot.val();
      if(dataRtdb2 !== null){
        
        setUltra2(dataRtdb2);
      }
    })
  },[]);
 
  return (
    <>
    {/* <Modals/> */}
    {on && <Modals toggler={toggler}/>}
      <DefaultLayout>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
      
        <CardDataStats toggler={toggler} title='Organic Composable'>
        <i className="fa-solid fa-circle-info"></i>
       
        <div className={`float-end size-4 border-solid border-2 ${datas.value >= 100 ? 'border-red-600 rounded-3xl bg-red-600 shadow-3 shadow-red-600': 'border-green-600 rounded-3xl bg-green-600 shadow-3 shadow-green-300'}`}></div>
        <div className="md:size-50">
        
        <Flat  
              progress={datas.value}
              range={{ from: 0, to: 100 }}
              sign={{ value: ' %', position: 'end' }}
              text={datas.value >= 100 ? 'FULL!!' : ''}
              showMiniCircle={false}
              showValue={true}
              sx={{
                strokeColor: '#00cc66',
                barWidth: 10, 
                bgStrokeColor: '#ffffff',
                bgColor: { value: `${datas.value>=100 ? '#ff0000' : '#00cc66'}`, transparency: '30' },  
                shape: 'full',
                strokeLinecap: 'square',
                valueSize: 20,
                valueWeight: 'bold',
                valueColor: `${datas.value >= 100 ? '#ff0000' :'#669999' }`,
                valueFamily: 'Trebuchet MS',
                textSize: 20,
                textWeight: 'bold',
                textColor: `${datas.value >= 100 ? '#ff0000' :'#669999' }`,
                textFamily: 'Trebuchet MS',
                loadingTime: 1000,
                
                valueAnimation: true,
                intersectionEnabled: true
              }}
            />
        </div>
          
            
        </CardDataStats>
        
     
        <CardDataStats toggler={toggler} title='Organic Non Composable'>
        <i className="fa-solid fa-circle-info"></i>
        <div className={`float-end size-4 border-solid border-2 ${ultra2.value >= 100 ? 'border-red-600 rounded-3xl bg-red-600 shadow-3 shadow-red-300': 'border-green-600 rounded-3xl bg-green-600 shadow-3 shadow-green-300'}`}></div>
        <div className="md:size-50">
          <Flat  
              progress={ultra2.value}
              range={{ from: 0, to: 100 }}
              sign={{ value: ' %', position: 'end' }}
              text={ultra2.value >= 100 ? 'FULL!!' : ''}
              showMiniCircle={false}
              showValue={true}
              sx={{
                strokeColor: '#ffff00',
                barWidth: 10, 
                bgStrokeColor: '#ffffff',
                bgColor: { value: `${ultra2.value>=100 ? '#ff0000' : '#ffff00'}`, transparency: '30' },  
                shape: 'full',
                strokeLinecap: 'square',
                valueSize: 20,
                valueWeight: 'bold',
                valueColor: `${ultra2.value >= 100 ? '#ff0000' :'#669999' }`,
                valueFamily: 'Trebuchet MS',
                textSize: 20,
                textWeight: 'bold',
                textColor: `${ultra2.value >= 100 ? '#ff0000' :'#669999' }`,
                textFamily: 'Trebuchet MS',
                loadingTime: 1000,
                
                valueAnimation: true,
                intersectionEnabled: true
              }}
            />

        </div>
        </CardDataStats>
        <CardDataStats toggler={toggler} title='Anorganik'>
        <i className="fa-solid fa-circle-info"></i>
        <div className={`float-end size-4 border-solid border-2 ${datas.value == 100 ? 'border-red-600 rounded-3xl bg-red-600 shadow-3 shadow-red-300': 'border-green-600 rounded-3xl bg-green-600 shadow-3 shadow-green-300'}`}></div>
        <div className="md:size-50">
          <Flat  
              progress={datas.value}
              range={{ from: 0, to: 100 }}
              sign={{ value: ' %', position: 'end' }}
              text={datas.value == 100 ? 'FULL!!' : ''}
              showMiniCircle={false}
              showValue={true}
              sx={{
                strokeColor: '#ff0000',
                barWidth: 10, 
                bgStrokeColor: '#ffffff',
                bgColor: { value: `${datas.value==100 ? '#ff0000' : '#ff0000'}`, transparency: '30' },  
                shape: 'full',
                strokeLinecap: 'square',
                valueSize: 20,
                valueWeight: 'bold',
                valueColor: `${datas.value == 100 ? '#ff0000' :'#669999' }`,
                valueFamily: 'Trebuchet MS',
                textSize: 20,
                textWeight: 'bold',
                textColor: `${datas.value == 100 ? '#ff0000' :'#669999' }`,
                textFamily: 'Trebuchet MS',
                loadingTime: 1000,
                
                valueAnimation: true,
                intersectionEnabled: true
              }}
            />

        </div>
        </CardDataStats>
     
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo />
        <ChartThree />
        <MapOne />
        <div className="col-span-12 xl:col-span-8">
          <TableOne />
        </div>
        <ChatCard />
      </div>
    </DefaultLayout>
    </>
    
  );
};

export default ECommerce;
