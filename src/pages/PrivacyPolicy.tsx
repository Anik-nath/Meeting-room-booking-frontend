export default function PrivacyPolicy() {
  return (
    <div className="md:px-10 px-6 py-12 bg-primary min-h-screen text-white">
      <h1 className="text-white text-3xl font-semibold mb-8">
        Privacy Policy for Nexus Meet
      </h1>
      <p className="text-justify">
        At Nexus Meet, we are committed to protecting your privacy. This Privacy
        Policy explains how we collect, use, disclose, and safeguard your
        information when you visit our platform. Please read this policy
        carefully. If you do not agree with the terms of this Privacy Policy,
        please do not access the platform.
      </p>
      <div className="my-4">
        <h2 className="text-2xl font-semibold mb-4">
          1. Information We Collect
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <span className="font-semibold">Personal Data:</span> We may collect
            personal information such as your name, email address, phone number,
            and payment information when you register or make a booking.
          </li>
          <li>
            <span className="font-semibold">Usage Data:</span> We may collect
            data about how you use our platform, including IP addresses, browser
            types, and pages visited.
          </li>
        </ul>
      </div>
      <div className="my-4">
        <h2 className="text-2xl font-semibold mb-4">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <span className="font-semibold">To Provide Services:</span> We use
            your information to process bookings, provide customer support, and
            improve our services.
          </li>
          <li>
            <span className="font-semibold">To Communicate:</span> We may use
            your contact information to send updates, promotional materials, and
            respond to inquiries.
          </li>
        </ul>
      </div>
      <div className="my-4">
        <h2 className="text-2xl font-semibold mb-4">3. Data Security</h2>
        <p>
          We implement security measures to protect your information from
          unauthorized access, use, or disclosure. However, no method of
          transmission over the internet or electronic storage is 100% secure.
        </p>
      </div>
    </div>
  );
}
