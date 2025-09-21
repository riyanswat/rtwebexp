import SectionTitle from "../Common/SectionTitle";
import SingleWork from "./SingleWork";
import workData from "./workData";

const Work = () => {
  return (
    <section id="how-it-works" className="py-6 md:py-20 lg:py-18 rt-section-b">
      <div className="container">
        <SectionTitle
          title="How It Works"
          paragraph="A simple, transparent process from your request to arrival at your port."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {workData.map((item) => (
            <SingleWork key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
