import Container from "@/components/shared/container";
import { Collapse } from "antd";
import React from "react";

const text = (
  <p
    style={{
      paddingInlineStart: 24,
    }}
  >
    A dog is a type of domesticated animal. Known for its loyalty and
    faithfulness, it can be found as a welcome guest in many households across
    the world.
  </p>
);

const items = [
  {
    key: "1",
    label: "What is Telehealth?",
    children:
      "Telehealth allows you to consult with doctors and healthcare providers remotely via video calls, chats, or phone calls, offering convenience and accessibility from anywhere.",
  },
  {
    key: "2",
    label: "How do I book an appointment?",
    children:
      "You can book an appointment in three simple steps: Sign up or log in to your account, search for a doctor by specialty or name, choose an available time slot and confirm your booking.",
  },
  {
    key: "3",
    label: "Is the platform secure?",
    children:
      "Yes, our platform uses advanced encryption to protect your personal and medical information, ensuring secure and confidential consultations.",
  },
  {
    key: "4",
    label: "What types of doctors are available?",
    children:
      "Our platform offers access to general practitioners, specialists (e.g., dermatologists, cardiologists), and mental health professionals.",
  },
  {
    key: "5",
    label: "Can I get a prescription through telehealth?",
    children:
      "Yes, after a consultation, doctors can provide electronic prescriptions that you can use at participating pharmacies.",
  },
  {
    key: "6",
    label: "What are the consultation fees?",
    children:
      "Fees vary based on the doctor’s specialty, experience, and the type of consultation. Fees are transparently displayed during booking.",
  },
  {
    key: "7",
    label: "What devices can I use for consultations?",
    children:
      "Our platform is compatible with most devices, including desktops, laptops, tablets, and smartphones, as long as they have an internet connection and a camera.",
  },
  {
    key: "8",
    label: "What if I experience technical difficulties during a session?",
    children:
      "If you face issues, you can reach our support team via the help center or the chat feature on our website.",
  },
  {
    key: "9",
    label: "Do you accept insurance?",
    children:
      "Many insurance providers cover telehealth consultations. Check with your provider or contact us for more details.",
  },
  {
    key: "10",
    label: "What payment methods are accepted?",
    children:
      "We accept major credit/debit cards, digital wallets, and some insurance plans.",
  },
  {
    key: "11",
    label: "Can I reschedule or cancel my appointment?",
    children:
      "Yes, you can reschedule or cancel your appointment at least 24 hours before the scheduled time through your account dashboard.",
  },
  {
    key: "12",
    label: "Can I consult a doctor outside my country?",
    children:
      "Yes, depending on the doctor’s licensing and regulations in your region. Check with the doctor’s profile for availability.",
  },
  {
    key: "13",
    label: "Do I need to download an app?",
    children:
      "You can use our services directly via the website or download our mobile app for added convenience.",
  },
];

const FAQSection = () => {
  return (
    <div className="py-8 sm:py-10">
      <Container>
        <header className="pb-5 sm:pb-8">
          <h4 className="text-center text-2xl font-bold text-gray-600 sm:text-4xl">
            Have any <span className="text-primary">questions?</span>
          </h4>
        </header>
        <Collapse
          items={items}
          bordered={false}
          defaultActiveKey={["1"]}
          size="large"
        />
      </Container>
    </div>
  );
};

export default FAQSection;
