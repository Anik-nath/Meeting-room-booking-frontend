import { TConfirmModal } from "../../Redux/Types/Types";

function BookingConfirmModal({ isOpen, onClose, onConfirm }: TConfirmModal) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal modal-open">
        <div className="modal-box">
          <h2 className="text-lg font-semibold mb-4">
            Are you sure to confirm your booking?
          </h2>
          <div className="flex justify-end">
            <button
              className="btn btn-secondary mr-2"
              onClick={() => onClose(false)}
            >
              Cancel
            </button>
            <button
              className="btn btn-primary text-white"
              onClick={() => onConfirm(true)}
            >
              Submit
            </button>
          </div>
        </div>
        <div className="modal-backdrop" onClick={() => onClose(false)}></div>
      </div>
    </div>
  );
}

export default BookingConfirmModal;
