import React, { Suspense } from "react"
import CalendarChart from "@/components/CalenderChart"
import EarhCanvas from "@/components/EarhCanvas"
import DailyInfo from "@/components/DailyInfo";
import { client } from "@/lib/sanity";
import Sales from "@/components/Sales";

const CRM = async () => {

  const query = `*[_type == "dailyInfo"]{ title, rate, caseName }`;
  const data = await client.fetch(query);
  return (
    <div className=''>
      <div className="relative z-10 ">

        <div className=" w-[55%]">
          <h3 className="text-4xl mt-3 mb-7 ms-3 font-semibold capitalize text-white">general statistics</h3>
          <DailyInfo fallbackData={data}
          />
          <div className="mt-10"><Sales />
          </div>
        </div>

        <div className="w-3/4 mb-5">
          <Suspense fallback={<p>Loading Calendar...</p>}>
            <CalendarChart />
          </Suspense>
        </div>
      </div>

      <Suspense fallback={null}>
        <EarhCanvas />
      </Suspense>


    </div>

  )
}

export default CRM