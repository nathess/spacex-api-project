import { gql } from "@apollo/client";

export const pastLaunchesData = gql`
  {
    launchesPast(limit: 10) {
      mission_name
      launch_date_local
      launch_site {
        site_name_long
        site_id
      }
      links {
        article_link
        video_link
      }
      rocket {
        rocket_name
        fairings {
          recovered
        }
      }
      ships {
        name
        home_port
        image
        weight_kg
      }
    }
  }
`;
