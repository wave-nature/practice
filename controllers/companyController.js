const sortByEstablishDate = (companyArr, order) => {
  companyArr.forEach(([key, value]) => {
    if (order === "increase")
      value.sort(
        (a, b) =>
          new Date(a.companyDetails.establishDate) -
          new Date(b.companyDetails.establishDate)
      );
    else if (order === "decrease")
      value.sort(
        (a, b) =>
          new Date(b.companyDetails.establishDate) -
          new Date(a.companyDetails.establishDate)
      );
  });
};

exports.companyDetails = (req, res) => {
  const { sort } = req.query;
  console.log(sort);

  const companyData = req.body;

  const companyArr = Object.entries(companyData);

  companyArr.forEach(([key, value]) => {
    value.forEach((company) => {
      company.companyDetails.key = key;
    });
  });

  if (sort === "establishDate") sortByEstablishDate(companyArr, "increase");
  if (sort === "-establishDate") sortByEstablishDate(companyArr, "decrease");

  res.status(200).json({
    status: "success",
    data: companyData,
  });
};
