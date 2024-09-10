import { testimonialData } from "../../data/data"
import TestimonialCard from "../TestimonialCard/TestimonialCard"

const Testimonial = () => {
  return (
    <div className="testimonial-background">
      <div className="testimonials">
        <div className="testimonials-container">
          <h1 className="testimonial-title">Testimonials</h1>
        </div>

        <div className="testimonials-list">
          {testimonialData.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              author={testimonial.author}
              description={testimonial.description}
              image={testimonial.image}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Testimonial
