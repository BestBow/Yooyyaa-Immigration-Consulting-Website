const services = ["Service 1", "Service 2", "Service 3", "Service 4"];

const Services = () => {
  return (
    <section className="text-center py-10">
      <h3 className="text-xl font-bold">SERVICES</h3>
      <div className="grid grid-cols-2 gap-4 p-4">
        {services.map((service, index) => (
          <div key={index} className="bg-white shadow-md p-4 rounded">
            <img src="/service-placeholder.jpg" alt={service} className="rounded mb-2"/>
            <h4 className="text-lg font-bold">{service}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
