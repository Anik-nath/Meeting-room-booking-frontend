export default function CookiePolicy() {
  return (
    <div className="md:px-10 px-6 py-12 bg-primary min-h-screen text-white">
      <h1 className="text-white text-3xl font-semibold mb-8">
        Cookie Policy for Nexus Meet
      </h1>
      <p className="text-justify">
        This Cookie Policy explains what cookies are, how we use cookies on
        Nexus Meet, and your choices regarding cookies. By using our platform,
        you consent to the use of cookies as described in this policy.
      </p>
      <div className="my-4">
        <h2 className="text-2xl font-semibold mb-4">1. What Are Cookies?</h2>
        <p>
          Cookies are small files that are stored on your device when you visit
          a website. They help websites remember your preferences and provide a
          better user experience.
        </p>
      </div>
      <div className="my-4">
        <h2 className="text-2xl font-semibold mb-4">2. How We Use Cookies</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <span className="font-semibold">Essential Cookies:</span> We use
            cookies to ensure the platform operates correctly and to remember
            your login information.
          </li>
          <li>
            <span className="font-semibold">Performance Cookies:</span> These
            cookies help us analyze how users interact with our platform,
            allowing us to improve functionality and performance.
          </li>
        </ul>
      </div>
      <div className="my-4">
        <h2 className="text-2xl font-semibold mb-4">3. Managing Cookies</h2>
        <p>
          You can manage your cookie preferences through your browser settings.
          Please note that disabling cookies may affect the functionality of the
          platform.
        </p>
      </div>
    </div>
  );
}
