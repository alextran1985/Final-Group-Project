import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import NewRecipe from "../../pages/NewRecipe";

import { QUERY_CURRENT_USER } from "../../utils/queries";
import { EDIT_USER } from ".././../utils/mutations";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
  MDBCardTitle,
  MDBRipple,
} from "mdb-react-ui-kit";

export default function Profile() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editFormState, setEditFormState] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { loading, data } = useQuery(QUERY_CURRENT_USER);
  const [updateUser, { error }] = useMutation(EDIT_USER);

  // console.log("Loading... ", loading);
  // console.log("Fetched Data: ", data);
  // console.log("Error: ", error);
  const user = data?.getCurrent;
  // console.log("User: ", user);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleEditChange = (event) => {
    const { name, value } = event.target;
    setEditFormState({
      ...editFormState,
      [name]: value,
    });
  };

  const handleEditForm = async (event) => {
    event.preventDefault();
    console.log("Sending Data to Server...");
    const { data } = await updateUser({
      
      variables: { ...editFormState },
    });
    console.log(updateUser);
  };

  return (
    <section style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol>
            <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
              <MDBBreadcrumbItem>
                <Link to="/">Home</Link>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem>
                <Link to={`/recipes`}>Recipes</Link>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem active>Profile</MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6.webp"
                  alt="User Image"
                  className="rounded-circle"
                  style={{ width: "150px" }}
                  fluid
                />
                <p className="text-muted mb-1">{user?.name}</p>
                <p className="text-muted mb-4">{user?.email}</p>
                <div className="d-flex justify-content-center mb-2">
                  <MDBBtn onClick={openModal}>Edit Profile</MDBBtn>
                  <MDBBtn outline className="ms-1">
                    <Link to={`/recipes`}>My Recipes</Link>
                  </MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-4 mb-lg-0">
              <MDBCardBody className="p-0">
                <MDBListGroup flush="true" className="rounded-3">
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon
                      fab
                      icon="github fa-lg"
                      style={{ color: "#333333" }}
                    />
                    <MDBCardText>{user?.name}@github</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon
                      fab
                      icon="twitter fa-lg"
                      style={{ color: "#55acee" }}
                    />
                    <MDBCardText>{user?.name}@twitter</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon
                      fab
                      icon="instagram fa-lg"
                      style={{ color: "#ac2bac" }}
                    />
                    <MDBCardText>{user?.name}@instagram</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon
                      fab
                      icon="facebook fa-lg"
                      style={{ color: "#3b5998" }}
                    />
                    <MDBCardText>{user?.name}@facebook</MDBCardText>
                  </MDBListGroupItem>
                </MDBListGroup>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          {/* Where you can create new recipe form is going to be */}
          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <NewRecipe />
              </MDBCardBody>
            </MDBCard>

            <MDBRow>
              {/* where create recipe will go */}
              <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBRipple
                    rippleColor="light"
                    rippleTag="div"
                    className="bg-image hover-overlay"
                  >
                    <MDBCardImage
                      src="/src/assets/article-1.jpg"
                      fluid
                      alt="Create Recipe"
                    />
                    <a>
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      ></div>
                    </a>
                  </MDBRipple>
                  <MDBCardBody>
                    <MDBCardTitle>{}Recipe Name</MDBCardTitle>
                    <MDBCardText>Description of recipe goe here</MDBCardText>
                    <MDBBtn href="#">New Recipe</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              {/* Where liked recipe will go */}
              <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBRipple
                    rippleColor="light"
                    rippleTag="div"
                    className="bg-image hover-overlay"
                  >
                    <MDBCardImage
                      src="/src/assets/article-2.jpg"
                      fluid
                      alt="..."
                    />
                    <a>
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      ></div>
                    </a>
                  </MDBRipple>
                  <MDBCardBody>
                    <MDBCardTitle>Saved Recipe</MDBCardTitle>
                    <MDBCardText>Description goes here</MDBCardText>
                    <MDBBtn>
                      <Link to={`/recipes`}>View more</Link>
                    </MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      {isModalOpen && (
        <div className="wrapper active-popup">
          <span className="icon-close" onClick={closeModal}>
            <i className="fa-solid fa-xmark"></i>
          </span>

          <div className="form-box register">
            <h2>Update Profile</h2>
            <form onSubmit={handleEditForm}>
              <div className="input-box">
                <span className="icon">
                  <i className="fa-solid "></i>
                </span>
                <input
                  type="text"
                  name="name"
                  defaultValue={user.name}
                  onChange={handleEditChange}
                  required
                />
                <label>Name</label>
              </div>
              <div className="input-box">
                <span className="icon">
                  <i className="fa-solid fa-envelope"></i>
                </span>
                <input
                  type="email"
                  name="email"
                  defaultValue={user.email}
                  onChange={handleEditChange}
                />
                <label>Email</label>
              </div>
              <div className="input-box">
                <span className="icon">
                  <i className="fa-solid fa-lock"></i>
                </span>
                <input
                  type="password"
                  name="password"
                  defaultValue={user.password}
                  onChange={handleEditChange}
                  required
                />
                <label>Password</label>
              </div>
              <div className="input-box">
                <span className="icon">
                  <i className="fa-solid fa-lock"></i>
                </span>
                <input
                  type="password"
                  name="confirmPassword"
                  defaultValue={user.confirmpassword}
                  onChange={handleEditChange}
                  required
                />
                <label>Confirm Password</label>
              </div>
              <button onClick={handleEditChange} type="submit" className="btn">
                Update Profile
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
