import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const Title = () => {
  return (
    <h1 className="section-title gradient-text">FAQs - Facts And Questions</h1>
  );
};

const useFAQs = (initialFAQs) => {
  const [faqs, setFAQs] = useState(initialFAQs);

  const toggleFAQ = (id) => {
    const newFAQs = faqs.map((faq) => {
      if (faq.id === id) {
        return { ...faq, expanded: !faq.expanded };
      } else {
        return faq;
      }
    });
    setFAQs(newFAQs);
  };

  return [faqs, toggleFAQ];
};

const FAQsCardHeading = ({ question, expanded }) => {
  return (
    <div className="flex justify-between items-center">
      <h3 className="text-xl font-bold">- {question}</h3>
      {expanded ? (
        <MdKeyboardArrowUp size={20} />
      ) : (
        <MdKeyboardArrowDown size={20} />
      )}
    </div>
  );
};

const FAQsCardAnswer = ({ answer }) => {
  return <p className="text-gray-700 italic mt-3 text-justify">{answer}</p>;
};

const FAQsCard = ({ id, question, answer, expanded, toggleFAQ }) => {
  return (
    <div
      id={id}
      className="bg-[var(--white-color)] p-4 w-full lg:max-w-[900px] mx-auto rounded-lg shadow-md cursor-pointer"
      onClick={() => toggleFAQ(id)}
    >
      <FAQsCardHeading question={question} expanded={expanded} />
      {expanded && <FAQsCardAnswer answer={answer} />}
    </div>
  );
};

const AllFAQsCards = () => {
  let initialFAQs = [
    {
      id: 1,
      qus: "What is Dawini?",
      ans: "Dawini is a medical platform that connects patients with various medical providers. It allows you to find, compare, and book appointments with doctors, clinics, hospitals, and pharmacies in your area. You can also access your medical records, prescriptions, and test results online.",
      expanded: false,
    },
    {
      id: 2,
      qus: "How does Dawini work?",
      ans: "Dawini works by using artificial intelligence to match you with the best medical providers for your needs. You can search for providers by specialty, location, availability, ratings, and reviews. You can also filter your results by price, insurance, and distance. Once you find a provider that suits you, you can book an appointment with them through the app or website.",
    },
    {
      id: 3,
      qus: "Is Dawini free to use?",
      ans: "Dawini is free to use for patients. You only pay for the medical services that you receive from the providers. Dawini does not charge any fees or commissions for booking appointments.",
      expanded: false,
    },
    {
      id: 4,
      qus: "Is Dawini secure and confidential?",
      ans: "Dawini is committed to protecting your privacy and security. We use encryption and authentication to ensure that your personal and medical information is safe and secure. We also comply with all the relevant laws and regulations regarding data protection and confidentiality. We do not share your information with any third parties without your consent.",
      expanded: false,
    },
    {
      id: 5,
      qus: "How can I contact Dawini?",
      ans: "If you have any questions, feedback, or suggestions, you can contact us through our website or app. You can also email us at support@dawini.com or call us at +20 123 456 789. We are always happy to hear from you and help you with any issues.",
      expanded: false,
    },
  ];

  const [faqs, toggleFAQ] = useFAQs(initialFAQs);

  return (
    <div className="flex flex-col gap-y-6">
      {faqs.map((faq) => {
        return (
          <FAQsCard
            id={faq.id}
            question={faq.qus}
            answer={faq.ans}
            expanded={faq.expanded}
            toggleFAQ={toggleFAQ}
          />
        );
      })}
    </div>
  );
};

const FAQs = () => {
  return (
    <section id="faqs">
      <Title />
      <AllFAQsCards />
    </section>
  );
};

export default FAQs;
