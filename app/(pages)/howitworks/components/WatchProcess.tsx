import React from "react";

const WatchProcess = () => {
  return (
    <>
      <section>
        <div className="md:w-1/2 mx-auto text-center">
          <h2>
            Watch our Work <em className="text-green-600">Process!</em>
          </h2>
          <p>
            Get an inside look at how PAKPRENEURSHIP transforms ideas into
            successful ventures. In this video, we walk you through our
            step-by-step process – from ideation and mentorship to incubation
            and growth. See firsthand how we empower entrepreneurs to achieve
            their dreams!
          </p>
        </div>
        <div className="mt-6">
          <iframe
            className="md:w-3/5 mx-auto h-64 md:h-80 lg:h-96 rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Dummy Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default WatchProcess;
