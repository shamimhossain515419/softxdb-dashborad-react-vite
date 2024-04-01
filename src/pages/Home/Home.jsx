import TotalBalance from '../../components/dashboardHome/TotalBalance';
import TotalExpence from '../../components/dashboardHome/TotalExpence';
import TotalSavings from '../../components/dashboardHome/TotalSavings';
import Outlay from '../../components/dashboardHome/Outlay';
import Income from '../../components/dashboardHome/Income';
import LatestTransactions from '../../components/dashboardHome/LatestTransactions';
import MyCard from '../../components/dashboardHome/MyCard';
import Anallytics from '../../components/dashboardHome/Anallytics';

const Home = () => {
  console.log(import.meta.env.VITE_BASE_URL) // "123"
  return (
    <div>
       <div className="grid xl:grid-cols-3 gap-7">
        <div className="xl:col-span-2">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
             {/* import cart  */}
            <TotalBalance />
            <TotalExpence />
            <TotalSavings />
          </div>
          <div>
            <Outlay />
            <div className=" grid lg:grid-cols-5 items-center gap-5 py-4">
              <div className=" lg:col-span-3 h-full">
                <Income />
              </div>
              <div className=" lg:col-span-2  h-full">
                <LatestTransactions />
              </div>
            </div>
          </div>
        </div>
        <div className="xl:col-span-1">
          <MyCard />
          <Anallytics />
        </div>
      </div>
    </div>
  );
};

export default Home;