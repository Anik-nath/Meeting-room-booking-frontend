import { useNavigate } from "react-router-dom";

type TConfirmData = {
  user: {
    name: string;
  };
  date: string;
  time: string;
  totalCost: string;
};

type TBookingConfirmModal = {
  confirmData: TConfirmData;
};

export default function BookingConfirmModal({
  confirmData,
}: TBookingConfirmModal) {
  const navigate = useNavigate();
  const handleCloseModal = () => {
    const modal = document.getElementById(
      "confirmation-modal"
    ) as HTMLDialogElement;
    if (modal) {
      modal.close();
    }
    navigate("/meeting-rooms");
  };
  return (
    <>
      <dialog id="confirmation-modal" className="modal modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-primary">Booking Confirmed!</h3>
          <p className="py-4">
            Thank you,{" "}
            <span className="font-semibold">{confirmData.user.name}</span>. Your
            booking for{" "}
            <span className="font-semibold">{confirmData.date}</span> at{" "}
            <span className="font-semibold">{confirmData.time}</span> has been
            confirmed. The total cost is $
            <span className="font-semibold">{confirmData.totalCost}</span>.
          </p>
          <div className="modal-action">
            <button className="btn-primary text-white" onClick={handleCloseModal}>
              Close
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}
