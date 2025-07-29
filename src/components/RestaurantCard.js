import { CDN_URL } from "../utils/constants";

const ResturantCard = (props) => {
  const { resData } = props;

  const { name, cuisines, avgRating, costForTwo, sla } = resData?.info || {};

  return (
    <div className="res-card">
      <img
        className="res-img"
        src={CDN_URL + resData.info.cloudinaryImageId}
        alt="Cravory-Logo"
      />
      <h4>{name}</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};

export default ResturantCard;
