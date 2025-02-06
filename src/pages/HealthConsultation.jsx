import React from "react";

const HealthConsultation = () => {
  const services = [
    {
      id: 1,
      image: "https://cdn.mend.zone/assets/imgs/banner/DoctorConsultant.jpg",
      title: "Period doubts or Pregnancy",
      link: "#",
    },
    {
      id: 2,
      image: "path/to/acne-icon.png",
      title: "Acne, pimple or skin issues",
      link: "#",
    },
    {
      id: 3,
      image: "path/to/performance-icon.png",
      title: "Performance issues in bed",
      link: "#",
    },
    {
      id: 4,
      image: "path/to/cold-icon.png",
      title: "Cold, cough or fever",
      link: "#",
    },
    {
      id: 5,
      image: "path/to/child-icon.png",
      title: "Child not feeling well",
      link: "#",
    },
    {
      id: 6,
      image: "path/to/depression-icon.png",
      title: "Depression or anxiety",
      link: "#",
    },
  ];

  return (
    <div className="container py-5">
      {/* Section Title */}
      <div className="text-center mb-4">
        <h1 className="fw-bold">Consult top doctors online for any health concern</h1>
        <p className="text-muted">
          Private online consultations with verified doctors in all specialists
        </p>
      </div>

      {/* Services Grid */}
      <div className="row g-4">
        {services.map((service) => (
          <div key={service.id} className="col-6 col-md-4 col-lg-2">
            <div className="card text-center border-0 shadow-sm h-100">
              <div className="card-body">
                <img
                  src={service.image}
                  alt={service.title}
                  className="img-fluid mb-3"
                  style={{ width: "60px", height: "60px" }}
                />
                <h6 className="card-title fw-semibold">{service.title}</h6>
                <a
                  href={service.link}
                  className="text-primary fw-bold text-decoration-none mt-2 d-block"
                >
                  CONSULT NOW
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Specialties Button */}
      <div className="text-center mt-4">
        <a
          href="#"
          className="btn btn-outline-primary px-4 py-2 fw-bold"
        >
          View All Specialties
        </a>
      </div>
    </div>
  );
};

export default HealthConsultation;
