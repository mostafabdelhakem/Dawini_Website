import { FaStar } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoPersonCircleOutline } from "react-icons/io5";
import doctorImg from "../../../assets/clinic Image.jpg";

const Title = () => {
  return (
    <h1 className="section-title text-[var(--white-color)]">Testimonials</h1>
  );
};

const TestimonialCard = ({ name, photo, rating, quote }) => {
  // Create an array of stars based on the rating
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <FaStar
        key={i}
        className={`h-5 w-5 ${
          i < rating ? "text-yellow-400" : "text-gray-300"
        }`}
      />
    );
  }

  return (
    <div className="bg-[var(--white-color)] shadow-lg rounded-lg p-6 w-full max-w-md mx-auto">
      <div className="flex items-center space-x-4">
        <IoPersonCircleOutline className="h-16 w-16 rounded-full object-cover text-[var(--black-color)]" />
        <div>
          <h3 className="text-lg font-semibold text-[var(--black-color)]">
            {name}
          </h3>
          <div className="flex space-x-1">{stars}</div>
        </div>
      </div>
      <p className="mt-4 text-gray-600 italic">{quote}</p>
    </div>
  );
};

const AddNewTestimonialBtn = () => {
  return (
    <button className="border-2 rounded-md text-[var(--white-color)] text-xl font-bold drop-shadow-md">
      Add yours +
    </button>
  );
};

const AllTestimonials = ({ testimonials }) => {
  return (
    <div className="grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {testimonials.map((testimonial) => {
        return (
          <TestimonialCard
            name={testimonial.name}
            photo={testimonial.photo}
            rating={testimonial.rating}
            quote={testimonial.quote}
          />
        );
      })}
      <AddNewTestimonialBtn />
    </div>
  );
};

const ShowMoreBtn = () => {
  return (
    <div className="w-full flex justify-center">
      <button className="mt-12 bg-[var(--white-color)] py-4 px-8 rounded-full shadow-lg font-bold">
        <p className="flex items-center gap-2">
          Show More <MdKeyboardArrowDown />
        </p>
      </button>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Hassan Youssef",
      photo: doctorImg,
      rating: 5,
      quote: "I am very impressed by the quality of service and support.",
    },
    {
      name: "Fatima Ahmed",
      photo: doctorImg,
      rating: 3,
      quote: "It's a good platform, but it could be better.",
    },
    {
      name: "Omar Ali",
      photo: doctorImg,
      rating: 4,
      quote: "It's a very useful platform, I learned a lot from it.",
    },
    {
      name: "Nadia Mahmoud",
      photo: doctorImg,
      rating: 5,
      quote: "It's an amazing platform, I highly recommend it.",
    },
    {
      name: "Mona Hassan",
      photo: doctorImg,
      rating: 4,
      quote: "It's a wonderful platform, I appreciate the opportunity.",
    },
  ];

  return (
    <div id="testim onials" className="gradient-background">
      <section>
        <Title />
        <AllTestimonials testimonials={testimonials} />
        <ShowMoreBtn />
      </section>
    </div>
  );
};

export default Testimonials;
