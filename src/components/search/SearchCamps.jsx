import React from "react";
import axios from "axios";
import { getLatitude } from "@/utils/getCurrentLocation";
import { getLongitude } from "@/utils/getCurrentLocation";
import Campaign from "@/components/Table/Campaign";
import { useState, useEffect } from "react";
import SearchCampLoader from "../UIElements/SearchCampLoader";
import Loading from "../UIElements/Loading";

export default function SearchCampaign() {
  // const initialCampaigns = [
  //   {
  //     campaign_name: "Campaign Blood",
  //     location: "Labour Chowk, Jhansi",
  //     organizerEmail: "organizer@email.com",
  //     campaign_date: "25 - 03- 2024",
  //     goal: "A step ta a healthy future",
  //     id: "01",
  //   },
  //   {
  //     campaign_name: "Campaign Blood",
  //     location: "Labour Chowk, Jhansi",
  //     organizerEmail: "organizer@email.com",
  //     campaign_date: "25 - 03- 2024",
  //     goal: "A step ta a healthy future",
  //     id: "01",
  //   },
  //   // ... (other initial campaigns)
  // ];

  const [campaigns, setCampaigns] = useState([]);
  const [district, setDistrict] = useState("");
  const[loading, setLoading] = useState(true);

  const districtHandler = async () => {
    try {
      const response = await axios.get(
        process.env.NEXT_PUBLIC_SERVER_URL + `/camps/district/${district}`
      );
      setCampaigns(response.data.campaigns);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    } finally{
      setLoading(false);
    }
  };

  return (
    <>
    {loading && <Loading/> && <SearchCampLoader/>}
    <div className="w-[95%] mx-auto">
      <div>
        <div className="flex">
          <div className="w-1/2 flex p-4 gap-2 justify-start mr-5+">
            <input
              name="district"
              value={district}
              onChange={(e) => {
                setDistrict(e.target.value);
              }}
              type="text"
              placeholder="District.."
              className="rounded-md border-gray-400 border-2 p-2 ml-4"
            ></input>
            <button
              onClick={districtHandler}
              className="px-2 bg-white rounded-md border-2 border-gray-400 text-white font-semibold"
            >
              🔍
            </button>
          </div>
        </div>
      </div>
      {campaigns.length == 0 && (
        <div className="flex justify-center items-center h-[20rem]">
          <h2 className="mont font-semibold text-gray-500 text-xl">No Blood Bank found. </h2>
        </div>
      )}
      <Campaign campaigns={campaigns} />
    </div>
    </>
  );
}
