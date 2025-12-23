import React, { useState } from "react";
import { Formik } from "formik";
import "./App.css";

const SEX_LIST = [
  { label: "Nam", value: "male" },
  { label: "Nữ", value: "female" },
];

const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

function App() {
  const [form, setForm] = useState({});

  // xử lý change
  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    setForm({
      ...form,
      [e.target.name]: value,
    });
  };

  // validate
  const handleValidate = () => {
    const errors = {};

    if (!form.name) errors.name = "Required";
    if (!form.passport) errors.passport = "Required";

    if (!form.year) {
      errors.year = "Required";
    } else if (form.year <= 1900) {
      errors.year = "Year must be greater than 1900";
    }

    if (!form.nationality) errors.nationality = "Required";

    if (!form.city) errors.city = "Required";
    if (!form.district) errors.district = "Required";
    if (!form.ward) errors.ward = "Required";
    if (!form.address) errors.address = "Required";

    if (!form.phone) errors.phone = "Required";

    if (!form.email) {
      errors.email = "Required";
    } else if (!EMAIL_REGEX.test(form.email)) {
      errors.email = "Invalid email address";
    }

    return errors;
  };

  // submit
  const handleSubmit = () => {
    alert("Khai báo y tế thành công!");
    console.log(form);
  };

  return (
    <div className="container">
      <h2>TỜ KHAI Y TẾ</h2>

      <Formik
        initialValues={form}
        validate={handleValidate}
        onSubmit={handleSubmit}
      >
        {({ errors, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            {/* ===== THÔNG TIN CÁ NHÂN ===== */}
            <h3>Thông tin cá nhân</h3>

            <label>Họ tên *</label>
            <input name="name" onChange={handleChange} />
            {errors.name && <div className="error">{errors.name}</div>}

            <label>Số hộ chiếu / CMND *</label>
            <input name="passport" onChange={handleChange} />
            {errors.passport && (
              <div className="error">{errors.passport}</div>
            )}

            <label>Năm sinh *</label>
            <input type="number" name="year" onChange={handleChange} />
            {errors.year && <div className="error">{errors.year}</div>}

            <label>Giới tính</label>
            <select name="gender" onChange={handleChange}>
              <option value="">-- Chọn --</option>
              {SEX_LIST.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>

            <label>Quốc tịch *</label>
            <input name="nationality" onChange={handleChange} />
            {errors.nationality && (
              <div className="error">{errors.nationality}</div>
            )}

            <label>Công ty làm việc</label>
            <input name="company" onChange={handleChange} />

            <label>Bộ phận làm việc</label>
            <input name="department" onChange={handleChange} />

            <label>
              <input
                type="checkbox"
                name="insurance"
                onChange={handleChange}
              />{" "}
              Có thẻ bảo hiểm y tế
            </label>

            {/* ===== ĐỊA CHỈ LIÊN HỆ ===== */}
            <h3>Địa chỉ liên hệ tại Việt Nam</h3>

            <label>Tỉnh / Thành *</label>
            <input name="city" onChange={handleChange} />
            {errors.city && <div className="error">{errors.city}</div>}

            <label>Quận / Huyện *</label>
            <input name="district" onChange={handleChange} />
            {errors.district && (
              <div className="error">{errors.district}</div>
            )}

            <label>Phường / Xã *</label>
            <input name="ward" onChange={handleChange} />
            {errors.ward && <div className="error">{errors.ward}</div>}

            <label>Số nhà, phố, thôn / tổ dân phố *</label>
            <input name="address" onChange={handleChange} />
            {errors.address && (
              <div className="error">{errors.address}</div>
            )}

            <label>Điện thoại *</label>
            <input name="phone" onChange={handleChange} />
            {errors.phone && <div className="error">{errors.phone}</div>}

            <label>Email *</label>
            <input name="email" onChange={handleChange} />
            {errors.email && <div className="error">{errors.email}</div>}
{/* ===== KHAI BÁO TRONG 14 NGÀY ===== */}
<h3>
  Trong vòng 14 ngày qua, Anh / Chị có đến quốc gia / vùng lãnh thổ nào
  (Có thể đi qua nhiều quốc gia)
</h3>
<textarea
  name="travelHistory"
  rows="3"
  onChange={handleChange}
/>

<h3>
  Trong vòng 14 ngày qua, Anh / Chị có thấy xuất hiện dấu hiệu nào sau đây
  không?
</h3>
{[
  "Sốt",
  "Ho",
  "Khó thở",
  "Viêm phổi",
  "Đau họng",
  "Mệt mỏi",
].map((item) => (
  <label key={item} className="checkbox">
    <input
      type="checkbox"
      name={`symptom_${item}`}
      onChange={handleChange}
    />
    {item}
  </label>
))}

<h3>
  Trong vòng 14 ngày qua, Anh / Chị có tiếp xúc với?
</h3>
{[
  "Người bệnh hoặc nghi ngờ mắc COVID-19",
  "Người từ nước có bệnh COVID-19",
  "Người có biểu hiện (Sốt, ho, khó thở, viêm phổi)",
].map((item) => (
  <label key={item} className="checkbox">
    <input
      type="checkbox"
      name={`contact_${item}`}
      onChange={handleChange}
    />
    {item}
  </label>
))}
{/* ===== END KHAI BÁO 14 NGÀY ===== */}

            <br />
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default App;
