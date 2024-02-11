import { services } from "../constants";
// import { ServiceCard } from "../components";

const Service = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((service) => (
        <div
          key={service.label}
          className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16"
        >
          <div className="bg-coral-red rounded-full w-11 h-11 flex justify-center items-center">
            <img
              src={service.imgURL}
              alt={service.label}
              width={24}
              height={24}
            />
          </div>
          <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">
            {service.label}
          </h3>
          <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-grey">
            {service.subtext}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Service;
