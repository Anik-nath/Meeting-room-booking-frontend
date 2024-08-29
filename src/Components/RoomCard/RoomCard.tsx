import { TRoom } from "../../Redux/Types/Types";

export type TRoomCards = {
  room: TRoom;
};
const RoomCard: React.FC<TRoomCards> = ({ room }) => {
  return (
    <div
      key={room._id}
      className="bg-secondary shadow rounded-lg overflow-hidden flex flex-col w-full"
    >
      <img
        className="w-full h-48 object-cover"
        src="https://i.postimg.cc/Nfq5MgTH/premium-photo-1681487144031-d502ea9abefc.jpg"
        alt=""
      />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-semibold md:text-xl md:mb-2">
          Nexus A1 - {room.name}{" "}
        </h3>
        <p className="text-gray-700 text-base">
          Capacity:
          <span className="font-semibold">{room.capacity} People</span>
        </p>
        <div className="mt-auto pt-4 flex md:flex-row flex-col md:items-center justify-between">
          <p className="text-gray-700 text-base">
            Price Per Slot:
            <span className="font-semibold">${room.pricePerSlot}</span>
          </p>
          <a
            href={`/rooms/${room._id}`}
            className="btn-secondary text-white inline-block text-center md:mt-0 mt-4"
          >
            Details
          </a>
        </div>
      </div>
    </div>
  );
};
export default RoomCard;
