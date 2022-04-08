exports.companyDetails = (req, res) => {
  const { sort } = req.query;
  const sortBy = typeof sort === "object" ? [...sort] : [sort];

  const companyData = req.body;

  const companyArr = Object.entries(companyData);

  companyArr.forEach(([key, value]) => {
    value.forEach((company) => {
      company.companyDetails.key = key;
    });
  });

  const companyDataArr = [];

  for (key in companyData) {
    companyDataArr.push(companyData[key]);
  }

  let newData = [...companyDataArr].flat();

  sortBy.forEach((val) => {
    if (val === "establishDate") {
      newData = newData.sort(
        (a, b) =>
          new Date(a.companyDetails.establishDate) -
          new Date(b.companyDetails.establishDate)
      );
    }
    if (val === "-establishDate") {
      newData = newData.sort(
        (a, b) =>
          new Date(b.companyDetails.establishDate) -
          new Date(a.companyDetails.establishDate)
      );
    }
    if (val === "key") {
      newData = newData.sort((a, b) =>
        a.companyDetails.key.localeCompare(b.companyDetails.key)
      );
    }
    if (val === "-key") {
      newData = newData.sort((a, b) =>
        b.companyDetails.key.localeCompare(a.companyDetails.key)
      );
    }
  });

  res.status(200).json({
    status: "success",
    data: newData,
  });
};
