import MissionDetails from "./MissionDetails";
import ShipsPanel from "./ShipsPanel";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Mousewheel } from "swiper";
import "swiper/css";

import { pastLaunchesData } from "../data/past-launches";
import { useQuery } from "@apollo/client";

SwiperCore.use([Mousewheel]);

function MissionPanel() {
  const { data, loading, error } = useQuery(pastLaunchesData);

  if (loading)
    return <h2 className="heading--2 loading">Loading Missions 🚀</h2>;
  if (error)
    return (
      <h2 className="heading--2 error">
        Couldn't get the past missions. Please try again later.
      </h2>
    );

  return (
    <section className="mission-panel">
      <Swiper
        spaceBetween={60}
        slidesPerView={1}
        mousewheel={{ invert: true, enabled: true }}
      >
        {data.launchesPast.map((mission, index) => {
          return (
            <SwiperSlide key={index}>
              <MissionDetails missionDetails={mission} />
              <ShipsPanel missionDetails={mission} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default MissionPanel;
