import { useState } from "react";

export default function MachineLearningData() {
  const [formData, setFormData] = useState({
    age: "",
    sex: "",
    cp: "",
    trestbps: "",
    chol: "",
    fbs: "",
    restecg: "",
    thalach: "",
    exang: "",
    oldpeak: "",
    slope: "",
    ca: "",
    thal: "",
  });

  const [responseData, setResponseData] = useState(null);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const jsonData = {
      data: {
        age: Number(formData.age),
        sex: Number(formData.sex),
        cp: Number(formData.cp),
        trestbps: Number(formData.trestbps),
        chol: Number(formData.chol),
        fbs: Number(formData.fbs),
        restecg: Number(formData.restecg),
        thalach: Number(formData.thalach),
        exang: Number(formData.exang),
        oldpeak: Number(formData.oldpeak),
        slope: Number(formData.slope),
        ca: Number(formData.ca),
        thal: Number(formData.thal),
      },
    };

    try {
      const response = await fetch("http://127.0.0.1:8005/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jsonData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      setResponseData(result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 to-orange-300">
      <div className="bg-white shadow-lg rounded-lg p-10 w-full max-w-3xl">
        <h1 className="text-3xl font-bold text-center mb-8">
          The Prediction System - Evaluation of Patients
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                id: "age",
                label: "Enter your age",
                adornment: "years",
                value: formData.age,
              },
              {
                id: "sex",
                label: "Sex (0 = Female, 1 = Male)",
                adornment: "0 or 1",
                value: formData.sex,
              },
              {
                id: "cp",
                label: "Chest Pain Type (0-3)",
                adornment: "type",
                value: formData.cp,
              },
              {
                id: "trestbps",
                label: "Resting Blood Pressure",
                adornment: "mm Hg",
                value: formData.trestbps,
              },
              {
                id: "chol",
                label: "Serum Cholesterol",
                adornment: "mg/dL",
                value: formData.chol,
              },
              {
                id: "fbs",
                label: "Fasting Blood Sugar (1 if > 120 mg/dL)",
                adornment: "0 or 1",
                value: formData.fbs,
              },
              {
                id: "restecg",
                label: "Resting ECG Result",
                adornment: "0-2",
                value: formData.restecg,
              },
              {
                id: "thalach",
                label: "Maximum Heart Rate",
                adornment: "bpm",
                value: formData.thalach,
              },
              {
                id: "exang",
                label: "Exercise-Induced Angina (1 = Yes)",
                adornment: "0 or 1",
                value: formData.exang,
              },
              {
                id: "oldpeak",
                label: "ST Depression",
                adornment: "mm",
                value: formData.oldpeak,
              },
              {
                id: "slope",
                label: "Slope of Peak Exercise ST Segment",
                adornment: "0-2",
                value: formData.slope,
              },
              {
                id: "ca",
                label: "Number of Major Vessels Colored by Fluoroscopy",
                adornment: "0-3",
                value: formData.ca,
              },
              {
                id: "thal",
                label: "Thalassemia (0-3)",
                adornment: "0-3",
                value: formData.thal,
              },
            ].map((field) => (
              <div key={field.id}>
                <label
                  className="block text-sm font-bold text-gray-700 mb-1"
                  htmlFor={field.id}
                >
                  {field.label}
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id={field.id}
                    name={field.id}
                    value={field.value}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder={field.adornment}
                  />
                  <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-500">
                    {field.adornment}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-orange-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-orange-600 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>

        {responseData && (
          <div className="mt-6">
            <h3 className="text-lg font-bold">Response Data:</h3>
            <pre className="bg-gray-100 p-4 rounded">
              {JSON.stringify(responseData, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
