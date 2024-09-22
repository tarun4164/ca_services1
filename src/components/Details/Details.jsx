const Details = () => {
  const details = [
    {
      header: "some title",
      description:
        "Lorem some full details, Lorem some full details, Lorem some full details",
    },
    {
      header: "some title",
      description:
        "Lorem some full details, Lorem some full details, Lorem some full details",
    },
  ];

  return (
    <>
      {details.map((detail, index) => (
        <InfoSection
          key={index}
          header={detail.header}
          description={detail.description}
        />
      ))}
    </>
  );
};

export default Details;

const InfoSection = ({ header, description }) => {
  return (
    <>
      <div className="acc-header">{header}</div>
      <div className="acc-desc">{description}</div>
    </>
  );
};
