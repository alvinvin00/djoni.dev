import {
  Anchor,
  Button,
  Checkbox,
  Group,
  Modal,
  Stack,
  Textarea,
  TextInput,
} from '@mantine/core';
import {motion} from 'motion/react';
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
    <section className="w-full max-w-2xl mx-auto px-4">
      <motion.div
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true}}
        transition={{duration: 0.6}}
        className="glass-card-dark p-8 md:p-12"
      >
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
            <TextInput
              id="name"
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
              classNames={{
                input:
                  'bg-white/5 dark:bg-white/5 border-2 border-neon-purple/30 dark:border-neon-cyan/30 text-gray-900 dark:text-white placeholder-gray-500 focus:border-neon-purple dark:focus:border-neon-cyan transition-all duration-300 rounded-lg',
              }}
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-2 text-gray-200"
            >
              Email
            </label>
            <TextInput
              id="email"
              type="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({...formData, email: e.target.value})
              }
              required
              classNames={{
                input:
                  'bg-white/5 dark:bg-white/5 border-2 border-neon-purple/30 dark:border-neon-cyan/30 text-gray-900 dark:text-white placeholder-gray-500 focus:border-neon-purple dark:focus:border-neon-cyan transition-all duration-300 rounded-lg',
              }}
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium mb-2 text-gray-200"
            >
              Message
            </label>
            <Textarea
              id="message"
              placeholder="Tell me about your project or idea..."
              value={formData.message}
              onChange={(e) =>
                setFormData({...formData, message: e.target.value})
              }
              required
              rows={5}
              classNames={{
                input:
                  'bg-white/5 dark:bg-white/5 border-2 border-neon-purple/30 dark:border-neon-cyan/30 text-gray-900 dark:text-white placeholder-gray-500 focus:border-neon-purple dark:focus:border-neon-cyan transition-all duration-300 rounded-lg resize-none',
              }}
            />
          </div>

          <Button
            type="submit"
            fullWidth
            size="lg"
            className="bg-gradient-neon text-white font-semibold py-3 rounded-lg hover:shadow-neon-purple-lg transition-all duration-300 hover:scale-105"
          >
            Send Message
          </Button>
        </form>
      </motion.div>

      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Important Disclaimer"
        size="lg"
        classNames={{
          modal: 'glass-card-dark border-2 border-neon-purple/50',
          title:
            'text-2xl font-bold bg-gradient-neon bg-clip-text text-transparent',
          close: 'text-gray-400 hover:text-white',
        }}
      >
        <Stack gap="md">
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

          <Anchor
            href="https://en.wikipedia.org/wiki/Amsal_Sitepu_case"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neon-cyan hover:text-neon-purple transition-colors duration-300 underline"
          >
            Learn more about the Amsal Sitepu case →
          </Anchor>

          <div className="mt-4">
            <Checkbox
              label="I understand and I'm not a government official"
              checked={disclaimerChecked}
              onChange={(e) => setDisclaimerChecked(e.currentTarget.checked)}
              classNames={{
                input:
                  'border-2 border-neon-purple/30 dark:border-neon-cyan/30',
                label: 'text-gray-700 dark:text-gray-200',
              }}
            />
          </div>

          <Group justify="flex-end" mt="md">
            <Button
              variant="subtle"
              onClick={() => setOpened(false)}
              className="text-gray-400 hover:text-white"
            >
              Cancel
            </Button>
            <Button
              onClick={() => setOpened(false)}
              disabled={!disclaimerChecked}
              className="bg-gradient-neon text-white hover:shadow-neon-purple-lg transition-all duration-300"
            >
              Continue
            </Button>
          </Group>
        </Stack>
      </Modal>
    </section>
  );
}
