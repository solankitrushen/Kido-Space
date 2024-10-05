import Card from "components/card";
import PieChart from '../../charts/PieChart'
const General = () => {
  return (
    <Card extra={"w-full h-full p-3"}>
      {/* Header */}
      <div className="mt-2 mb-8 w-full">
        <h4 className="px-2 text-xl font-bold text-navy-700 dark:text-white">
          General Information
        </h4>
      </div>

    </Card>
  );
};

export default General;
