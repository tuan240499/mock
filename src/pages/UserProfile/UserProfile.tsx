import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../axiosInterceptor";
import {
  Box,
  Button,
  Container,
  Grid,
  Select,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserProfile = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };

  const [userData, setUserData] = useState<any>({});
  const [editableData, setEditableData] = useState<any>({
    firstname: "",
    lastname: "",
    email: "",
    gender: "",
    phone: "",
    address: "",
    avatar: null,
  });

  const [isDataChanged, setIsDataChanged] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("/user");
        setUserData(response.data);
        setEditableData({
          ...response.data,
        });
      } catch (error) {
        console.error("Failed to fetch user data!", error);
      }
    };

    fetchUserData();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditableData({ ...editableData, [name]: value });
    setIsDataChanged(true);
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setEditableData({ ...editableData, avatar: e.target.files[0] });
      setIsDataChanged(true);
    }
  };

  const handleSave = async () => {
    const token = localStorage.getItem("token");

    try {
      const formData = new FormData();
      for (const key in editableData) {
        if (key === "avatar") {
          formData.append("avatar", editableData.avatar);
        } else {
          formData.append(key, editableData[key]);
        }
      }

      const response = await axios.put("/user", formData, {
        headers: {
          Authorization: `${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Cập nhật thông tin tài khoản thành công!", {
        position: "bottom-right",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "dark",
        autoClose: 2000,
      });

      setUserData(response.data);
      setIsDataChanged(false);
      // console.log("Thông tin người dùng đã được cập nhật thành công!");
    } catch (error) {
      console.error("Lỗi khi cập nhật thông tin người dùng:", error);
      toast.error("Cập nhật thông tin tài khoản thất bại!", {
        position: "bottom-right",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "dark",
        autoClose: 2000,
      });
    }
  };

  return (
    <div>
      <Container maxWidth="lg" style={{ marginBottom: "30px" }}>
        <Typography variant="h4" style={{ margin: "20px 0" }}>
          Thông tin tài khoản
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Box
              border="1px solid #ccc"
              borderRadius="5px"
              padding="20px"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center">
              {userData.avatar ? (
                <img
                  src={`http://localhost:5000${userData.avatar}`}
                  alt="Avatar"
                  style={{
                    width: "263px",
                    height: "310px",
                    maxWidth: "263px",
                    maxHeight: "310px",
                    objectFit: "cover",
                    marginBottom: "20px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  }}
                />
              ) : (
                <img
                  src="\public\images\user.jpg"
                  alt="Avatar"
                  style={{
                    width: "263px",
                    height: "310px",
                    maxWidth: "263px",
                    maxHeight: "310px",
                    objectFit: "cover",
                    marginBottom: "20px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  }}
                />
              )}
              <input
                accept="image/*"
                style={{ display: "none" }}
                id="contained-button-file"
                multiple={false}
                type="file"
                onChange={handleAvatarChange}
              />
              <label htmlFor="contained-button-file">
                <Button
                  variant="contained"
                  color="info"
                  component="span"
                  startIcon={<CloudUploadIcon />}>
                  Tải lên tệp
                </Button>
              </label>
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Box
              border="1px solid #ccc"
              borderRadius="5px"
              padding="20px"
              display="flex"
              flexDirection="column">
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} style={{ marginTop: "35px" }}>
                  <TextField
                    fullWidth
                    label="Email"
                    type="text"
                    name="email"
                    value={editableData.email}
                    variant="outlined"
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6} style={{ marginTop: "35px" }}>
                  <TextField
                    fullWidth
                    label="Họ"
                    type="text"
                    name="firstname"
                    value={editableData.firstname}
                    variant="outlined"
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6} style={{ marginTop: "35px" }}>
                  <TextField
                    fullWidth
                    label="Tên"
                    type="text"
                    name="lastname"
                    value={editableData.lastname}
                    variant="outlined"
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6} style={{ marginTop: "35px" }}>
                  <Select
                    fullWidth
                    // label="Giới tính"
                    name="gender"
                    value={editableData.gender}
                    variant="outlined"
                    onChange={handleInputChange}>
                    <MenuItem value="male">Nam</MenuItem>
                    <MenuItem value="female">Nữ</MenuItem>
                    <MenuItem value="other">Khác</MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={12} sm={6} style={{ marginTop: "35px" }}>
                  <TextField
                    fullWidth
                    label="Số điện thoại"
                    type="tel"
                    name="phone"
                    value={editableData.phone}
                    variant="outlined"
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6} style={{ marginTop: "35px" }}>
                  <TextField
                    fullWidth
                    label="Địa chỉ"
                    type="text"
                    name="address"
                    value={editableData.address}
                    variant="outlined"
                    onChange={handleInputChange}
                  />
                </Grid>
              </Grid>
              <Box mt={2} style={{ marginTop: "35px" }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSave}
                  style={{ marginRight: "10px" }}
                  disabled={!isDataChanged} // Disable nút khi không có sự thay đổi
                >
                  LƯU Mới
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  onClick={handleLogout}>
                  Đăng xuất
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default UserProfile;
