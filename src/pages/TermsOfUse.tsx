export default function TermsOfUse() {
  return (
    <div className="md:px-10 px-6 py-12 bg-primary min-h-screen text-white">
      <h1 className="text-white text-3xl font-semibold mb-8">
        Terms of use for Nexus Meet
      </h1>
      <p className="text-justify">
        Welcome to Nexus Meet! By accessing or using our meeting room booking
        platform, you agree to be bound by the following terms of use. Please
        read them carefully. If you do not agree with these terms, you should
        not use our platform.
      </p>
      <div className="my-4">
        <h2 className="text-2xl font-semibold  mb-4">
          1. User Responsibilities
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <span className="font-semibold">Account Security:</span> You are
            responsible for maintaining the confidentiality of your account
            information, including your password. You agree to accept
            responsibility for all activities that occur under your account.
          </li>
          <li>
            <span className="font-semibold">Booking Usage:</span> All bookings
            made through Nexus Meet must be lawful and comply with our
            platform’s rules. Misuse of rooms or violations of booking terms may
            result in account suspension.
          </li>
          <li>
            <span className="font-semibold">Payment Obligations:</span> Users
            are responsible for all charges related to their bookings. All
            payments must be made promptly according to the payment terms
            provided at the time of booking.
          </li>
        </ul>
      </div>
      <div className="my-4">
        <h2 className="text-2xl font-semibold  mb-4">2. Nexus Meet’s Rights</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <span className="font-semibold">Service Modification:</span> Nexus
            Meet reserves the right to modify or discontinue the platform,
            either temporarily or permanently, with or without notice to you.
          </li>
          <li>
            <span className="font-semibold">Termination of Accounts:</span> We
            may suspend or terminate your account if you violate these terms of
            use or engage in any conduct we deem harmful to the platform or its
            users.
          </li>
        </ul>
      </div>
      <div className="my-4">
        <h2 className="text-2xl font-semibold  mb-4">
          3. Limitation of Liability
        </h2>
        <p>
          Nexus Meet is not responsible for any direct, indirect, incidental, or
          consequential damages arising from the use of our platform, including
          but not limited to the loss of data or booking errors.
        </p>
      </div>
    </div>
  );
}
