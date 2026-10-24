import Card from "../ui/Card.jsx";
import Accordion from "../ui/Accordion.jsx";
import LabelledInput from "../ui/LabelledInput.jsx";

const FAQS = [
  {
    question: "How long does it take to complete a web development project?",
    answer:
      "The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards.",
  },
  {
    question: "Can you handle large-scale mobile-app development projects?",
    answer:
      "Yes, our team has the experience and resources to take on projects of any size. We plan carefully, scale our workflow to match your needs, and keep communication open so your project stays on track from start to finish.",
  },
  {
    question: "Can you integrate third-party APIs into our mobile app?",
    answer:
      "Absolutely. We regularly integrate third-party services such as payment gateways, analytics, and authentication providers. Each integration is built securely and tested thoroughly to ensure it performs reliably within your app.",
  },
  {
    question: "How do you ensure cross-platform compatibility for mobile apps?",
    answer:
      "We build with modern cross-platform frameworks and test across a wide range of devices, screen sizes, and operating systems. This helps us deliver a consistent, high-quality experience for every user, regardless of their platform.",
  },
  {
    question: "What is your approach to user experience (UX) design?",
    answer:
      "We start by understanding your users and business goals, then design intuitive interfaces through research, wireframing, and prototyping. Every decision is validated with feedback so the final product is both easy to use and visually engaging.",
  },
];

const INPUT_NAMES = [
  { label: "Name", placeholder: "Enter your name", type: "text" },
  { label: "Email", placeholder: "Enter your email", type: "Email" },
  {
    label: "Your question",
    placeholder: "Enter your question here ……",
    type: "textarea",
  },
];

function AskYourQuestion() {
  return (
    <Card type="large">
      <div className="flex flex-col w-full gap-[var(--card-inner-gap)]">
        <h3 className="uppercase text-start w-full text-[18px] font-roboto-flex font-medium text-orange-95">
          Ask your question
        </h3>

        <hr className="border-1 border-neutral-15 w-full" />

        <form className="flex flex-col gap-[14px] ">
          {INPUT_NAMES.map((name) => (
            <LabelledInput {...name} />
          ))}
        </form>

        <button
          type="submit"
          className="uppercase text-[14px] font-medium font-roboto-flex bg-orange-90 text-neutral-06 rounded-1 px-5 py-3"
        >
          Send your message
        </button>
      </div>
    </Card>
  );
}

function FAQs() {
  return (
    <div className="flex flex-col gap-1 mt-12">
      <Card>
        <h2 className="uppercase w-full font-roboto-flex text-orange-95 text-[28px] font-semibold">
          Frequently Asked Questions
        </h2>
      </Card>
      <div className="contents">
        {FAQS.map((faq) => (
          <Accordion {...faq} />
        ))}
      </div>
      <AskYourQuestion />
    </div>
  );
}

export default FAQs;
