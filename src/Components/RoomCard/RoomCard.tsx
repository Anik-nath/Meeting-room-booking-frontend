export type TRoom = {
    room: {
        id:string,
        image:string,
    };
  };
const RoomCard: React.FC<TRoom> = ({ room }) => {
  return (
    <div
      key={room.id}
      className="bg-secondary shadow rounded-lg overflow-hidden flex flex-col w-full"
    >
      <img className="w-full h-48 object-cover" src={room.image} alt="" />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-semibold md:text-xl md:mb-2">
          Nexus A1 - Collab Room
        </h3>
        <p className="text-gray-700 text-base">
          Capacity: <span className="font-semibold">10 People</span>
        </p>
        <div className="mt-auto pt-4 flex md:flex-row flex-col md:items-center justify-between">
          <p className="text-gray-700 text-base">
            Price Per Slot:
            <span className="font-semibold">$500</span>
          </p>
          <a
            href="#"
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
