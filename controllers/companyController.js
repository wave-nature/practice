const companyData = {
  a: [
    {
      id: 1,
      partNumber: 101,
      name: "apple",
      size: "small",
      color: ["red", "yellow"],
      weight: 5,
      companyDetails: {
        establishDate: "2015-07-06",
        address: "Baroda",
        companyname: "FST",
      },
      description: "The apple is really juicy",
    },
    {
      id: 2,
      partNumber: 102,
      name: "apricot",
      size: "medium",
      color: ["green"],
      weight: 2,
      companyDetails: {
        establishDate: "2000-11-08",
        address: "San Hose",
        companyname: "Google",
      },
      description: "apricot is good",
    },
  ],
  b: [
    {
      id: 3,
      partNumber: 103,
      name: "banana",
      size: "medium",
      color: ["green", "yellow"],
      weight: 1,
      companyDetails: {
        establishDate: "1998-03-30",
        address: "New york",
        companyname: "Netflix",
      },
      description: "The banana is yellow",
    },
    {
      id: 4,
      partNumber: 104,
      name: "blackberry",
      size: "small",
      color: ["red", "yellow", "green"],
      companyDetails: {
        establishDate: "2004-05-05",
        address: "California",
        companyname: "Facebook",
      },
      description: "The Blackberry is small",
    },
  ],
  c: [
    {
      id: 5,
      partNumber: 104,
      name: "coconut",
      size: "large",
      color: ["green"],
      weight: 2,
      companyDetails: {
        establishDate: "2001-08-21",
        address: "Chicago",
        companyname: "Microsoft",
      },
      description: "The coconut is big",
    },
  ],
};

const companyDataCopy = { ...companyData };

const companyArr = Object.entries(companyDataCopy);

companyArr.forEach(([key, value]) => {
  value.forEach((company) => {
    company.companyDetails.key = key;
  });
});

const sortByEstablishDate = (res, order) => {
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
  res.status(200).json({
    status: "success",
    data: companyData,
  });
};

exports.companyDetails = (req, res) => {
  const { sort } = req.query;
  console.log(sort);
  if (sort === "establishDate") sortByEstablishDate(res, "increase");
  if (sort === "-establishDate") sortByEstablishDate(res, "decrease");
};
