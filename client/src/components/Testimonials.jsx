const testimonials = [
    { customer: "Customer 1", service: "Service Offered", review: "Lorem ipsum dolor sit amet.", rating: "⭐⭐⭐⭐⭐" },
    { customer: "Customer 2", service: "Service Offered", review: "Integer facilum aliquet.", rating: "⭐⭐⭐⭐⭐" }
  ];
  
  const Testimonials = () => {
    return (
      <section className="text-center py-10">
        <h3 className="text-xl font-bold">SUCCESS STORIES FROM OUR PAST CUSTOMERS</h3>
        <div className="grid grid-cols-2 gap-4 p-4">
          {testimonials.map((test, index) => (
            <div key={index} className="bg-white shadow-md p-4 rounded">
              <h4 className="font-bold">{test.customer}</h4>
              <p className="text-sm text-gray-500">{test.service}</p>
              <p>{test.rating}</p>
              <p>{test.review}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Testimonials;
  