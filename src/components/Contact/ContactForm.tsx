import {useState} from 'react';

export function ContactForm() {
  const [opened, setOpened] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [disclaimerChecked, setDisclaimerChecked] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!disclaimerChecked) {
      setOpened(true);
    } else {
      console.log('Form submitted:', formData);
    }
  };

  return (
    <section className="w-full max-w-2xl mx-auto px-4 py-20">
      <div className="glass-card-dark p-8 md:p-12">
        <h3 className="text-3xl font-bold mb-2 text-center bg-gradient-neon bg-clip-text text-transparent">
          Get In Touch
        </h3>
        <p className="text-gray-400 dark:text-gray-300 text-center mb-8">
          Have a project in mind or just want to chat? Send me a message.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium mb-2 text-gray-200"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
              className="w-full bg-white/5 dark:bg-white/5 border-2 border-neon-purple/30 dark:border-neon-cyan/30 text-gray-900 dark:text-white placeholder-gray-500 focus:border-neon-purple dark:focus:border-neon-cyan transition-all duration-300 rounded-lg px-4 py-3 outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-2 text-gray-200"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({...formData, email: e.target.value})
              }
              required
              className="w-full bg-white/5 dark:bg-white/5 border-2 border-neon-purple/30 dark:border-neon-cyan/30 text-gray-900 dark:text-white placeholder-gray-500 focus:border-neon-purple dark:focus:border-neon-cyan transition-all duration-300 rounded-lg px-4 py-3 outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium mb-2 text-gray-200"
            >
              Message
            </label>
            <textarea
              id="message"
              placeholder="Tell me about your project or idea..."
              value={formData.message}
              onChange={(e) =>
                setFormData({...formData, message: e.target.value})
              }
              required
              rows={5}
              className="w-full bg-white/5 dark:bg-white/5 border-2 border-neon-purple/30 dark:border-neon-cyan/30 text-gray-900 dark:text-white placeholder-gray-500 focus:border-neon-purple dark:focus:border-neon-cyan transition-all duration-300 rounded-lg px-4 py-3 outline-none resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-neon text-white font-semibold py-3 rounded-lg hover:shadow-neon-purple-lg transition-all duration-300 hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Modal */}
      {opened && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setOpened(false)}
          />
          <div className="relative glass-card-dark border-2 border-neon-purple/50 rounded-xl p-6 w-full max-w-lg animate-scale-in">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold bg-gradient-neon bg-clip-text text-transparent">
                Important Disclaimer
              </h3>
              <button
                onClick={() => setOpened(false)}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Close"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 dark:bg-red-500/20">
                <h4 className="font-bold text-red-400 mb-2">
                  ⚠️ Government Officials Notice
                </h4>
                <p className="text-gray-700 dark:text-gray-200 text-sm">
                  Government Officials are barred from contacting me for Government
                  projects for any reason.
                </p>
              </div>

              <p className="text-gray-600 dark:text-gray-200 text-sm">
                This is a principled stance regarding government corruption and
                ethical practices in the IT sector. I will not accept projects from
                government entities or officials.
              </p>

              <a
                href="https://en.wikipedia.org/wiki/Amsal_Sitepu_case"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neon-cyan hover:text-neon-purple transition-colors duration-300 underline text-sm inline-block"
              >
                Learn more about the Amsal Sitepu case →
              </a>

              <div className="mt-4">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={disclaimerChecked}
                    onChange={(e) => setDisclaimerChecked(e.target.checked)}
                    className="w-5 h-5 border-2 border-neon-purple/30 dark:border-neon-cyan/30 rounded bg-transparent text-neon-purple focus:ring-neon-purple"
                  />
                  <span className="text-gray-700 dark:text-gray-200 text-sm">
                    I understand and I'm not a government official
                  </span>
                </label>
              </div>

              <div className="flex justify-end gap-3 mt-4">
                <button
                  onClick={() => setOpened(false)}
                  className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setOpened(false)}
                  disabled={!disclaimerChecked}
                  className="px-4 py-2 bg-gradient-neon text-white rounded-lg hover:shadow-neon-purple-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
