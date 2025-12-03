import { Card, Page, Layout, FormLayout, TextField, Button } from "@shopify/polaris";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState, useCallback } from "react";

const MAX_FILE_SIZE = 100 * 1024 * 1024; // 100MB

export default function FormPage() {
  const [fileError, setFileError] = useState("");

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      content: "",
      profile: null,
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name là bắt buộc"),
      email: Yup.string().email("Email không hợp lệ").required("Email là bắt buộc"),
      content: Yup.string().required("Content là bắt buộc"),
    }),
    onSubmit: (values) => {
      console.log(values);
      alert("Submit thành công!");
    },
  });

  const handleFileChange = useCallback((event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (file.size > MAX_FILE_SIZE) {
      setFileError("File phải nhỏ hơn 100MB!");
      formik.setFieldValue("profile", null);
      return;
    }

    setFileError("");
    formik.setFieldValue("profile", file);
  }, []);

  return (
    <Page title="Tạo Profile">
      <div
        style={{
          // minHeight: "70vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Layout.Section oneHalf>
          <Card sectioned>
            <form onSubmit={formik.handleSubmit}>
              <FormLayout>
                <TextField
                  label="Name"
                  value={formik.values.name}
                  onChange={(value) => formik.setFieldValue("name", value)}
                  error={formik.errors.name}
                />

                <TextField
                  type="email"
                  label="Email"
                  value={formik.values.email}
                  onChange={(value) => formik.setFieldValue("email", value)}
                  error={formik.errors.email}
                />

                <TextField
                  label="Content"
                  multiline={4}
                  value={formik.values.content}
                  onChange={(value) => formik.setFieldValue("content", value)}
                  error={formik.errors.content}
                />

                <div>
                  <label><strong>Upload Profile</strong></label>
                  <input type="file" onChange={handleFileChange} />
                  {fileError && (
                    <p style={{ color: "red", marginTop: "5px" }}>{fileError}</p>
                  )}
                </div>

                <Button primary submit>
                  Submit
                </Button>
              </FormLayout>
            </form>
          </Card>
        </Layout.Section>
      </div>
    </Page>
  );
}
