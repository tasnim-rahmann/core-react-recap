import { use } from "react";

const AvailablePlayers = ({ playersPromise }) => {
  const playersData = use(playersPromise);
  console.log(playersData);

  return <div>Availalbe Players</div>;
};

export default AvailablePlayers;
