const calculate = (arr) => {
  if (arr.length === 0) return;
  const student = arr[0];

  const { maths, science, english, socialStudies } = student.results;

  const percentage =
    (maths.marks + science.marks + english.marks + socialStudies.marks) / 5;

  student.percentage = percentage;

  return calculate(arr.slice(1));
};

exports.calcPercentage = (req, res) => {
  const marksData = req.body;
  calculate(marksData);

  res.status(200).json({
    status: "success",
    data: marksData,
  });
};
