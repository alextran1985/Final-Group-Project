// import React from "react";
// import RecipesComponent from "../../pages/RecipesComponent";

// import { Link, NavLink } from "react-router-dom";
// import {
//   MDBCol,
//   MDBContainer,
//   MDBRow,
//   MDBCard,
//   MDBCardText,
//   MDBCardBody,
//   MDBCardImage,
//   MDBBtn,
//   MDBBreadcrumb,
//   MDBBreadcrumbItem,
//   MDBProgress,
//   MDBProgressBar,
//   MDBIcon,
//   MDBListGroup,
//   MDBListGroupItem,
// } from "mdb-react-ui-kit";

// export default function Profile() {
//   const { loading, data, error } = useQuery(QUERY_CURRENT_USER);

//   const user = data?.user;
//   return (
//     <section style={{ backgroundColor: "#eee" }}>
//       <MDBContainer className="py-5">
//         <MDBRow>
//           <MDBCol>
//             <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
//               <MDBBreadcrumbItem>
//                 <Link to="/">Home</Link>
//               </MDBBreadcrumbItem>
//               <MDBBreadcrumbItem>
//                 <Link to={`/recipes/${randomRecipe}`}>Recipes</Link>
//               </MDBBreadcrumbItem>
//               <MDBBreadcrumbItem active>Profile</MDBBreadcrumbItem>
//             </MDBBreadcrumb>
//           </MDBCol>
//         </MDBRow>

//         <MDBRow>
//           <MDBCol lg="4">
//             <MDBCard className="mb-4">
//               <MDBCardBody className="text-center">
//                 <MDBCardImage
//                   src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
//                   alt="avatar"
//                   className="rounded-circle"
//                   style={{ width: "150px" }}
//                   fluid
//                 />
//                 <p className="text-muted mb-1"></p>
//                 <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
//                 <div className="d-flex justify-content-center mb-2">
//                   <MDBBtn>Follow</MDBBtn>
//                   <MDBBtn outline className="ms-1">
//                     Leave Comment
//                   </MDBBtn>
//                 </div>
//               </MDBCardBody>
//             </MDBCard>

//             <MDBCard className="mb-4 mb-lg-0">
//               <MDBCardBody className="p-0">
//                 <MDBListGroup flush className="rounded-3">
//                   <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
//                     <MDBIcon fas icon="globe fa-lg text-warning" />
//                     <MDBCardText>https://mdbootstrap.com</MDBCardText>
//                   </MDBListGroupItem>
//                   <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
//                     <MDBIcon
//                       fab
//                       icon="github fa-lg"
//                       style={{ color: "#333333" }}
//                     />
//                     <MDBCardText>mdbootstrap</MDBCardText>
//                   </MDBListGroupItem>
//                   <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
//                     <MDBIcon
//                       fab
//                       icon="twitter fa-lg"
//                       style={{ color: "#55acee" }}
//                     />
//                     <MDBCardText>@mdbootstrap</MDBCardText>
//                   </MDBListGroupItem>
//                   <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
//                     <MDBIcon
//                       fab
//                       icon="instagram fa-lg"
//                       style={{ color: "#ac2bac" }}
//                     />
//                     <MDBCardText>mdbootstrap</MDBCardText>
//                   </MDBListGroupItem>
//                   <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
//                     <MDBIcon
//                       fab
//                       icon="facebook fa-lg"
//                       style={{ color: "#3b5998" }}
//                     />
//                     <MDBCardText>mdbootstrap</MDBCardText>
//                   </MDBListGroupItem>
//                 </MDBListGroup>
//               </MDBCardBody>
//             </MDBCard>
//           </MDBCol>
//           <MDBCol lg="8">
//             <MDBCard className="mb-4">
//               <MDBCardBody>
//                 <MDBRow>
//                   <MDBCol sm="3">
//                     <MDBCardText>Full Name</MDBCardText>
//                   </MDBCol>
//                   <MDBCol sm="9">
//                     <MDBCardText className="text-muted">Alex Tran</MDBCardText>
//                   </MDBCol>
//                 </MDBRow>
//                 <hr />
//                 <MDBRow>
//                   <MDBCol sm="3">
//                     <MDBCardText>Email</MDBCardText>
//                   </MDBCol>
//                   <MDBCol sm="9">
//                     <MDBCardText className="text-muted">
//                       example@example.com
//                     </MDBCardText>
//                   </MDBCol>
//                 </MDBRow>
//                 <hr />

//                 <hr />
//                 <MDBRow>
//                   <MDBCol sm="3">
//                     <MDBCardText>Address</MDBCardText>
//                   </MDBCol>
//                   <MDBCol sm="9">
//                     <MDBCardText className="text-muted">
//                       Bay Area, San Francisco, CA
//                     </MDBCardText>
//                   </MDBCol>
//                 </MDBRow>
//               </MDBCardBody>
//             </MDBCard>

//             <MDBRow>
//               <MDBCol md="6">
//                 <MDBCard className="mb-4 mb-md-0">
//                   <MDBCardBody>
//                     <MDBCardText className="mb-4">
//                       <span className="text-primary font-italic me-1">
//                         assigment
//                       </span>{" "}
//                       Project Status
//                     </MDBCardText>
//                     <MDBCardText
//                       className="mb-1"
//                       style={{ fontSize: ".77rem" }}
//                     >
//                       Web Design
//                     </MDBCardText>
//                     <MDBProgress className="rounded">
//                       <MDBProgressBar width={80} valuemin={0} valuemax={100} />
//                     </MDBProgress>

//                     <MDBCardText
//                       className="mt-4 mb-1"
//                       style={{ fontSize: ".77rem" }}
//                     >
//                       Website Markup
//                     </MDBCardText>
//                     <MDBProgress className="rounded">
//                       <MDBProgressBar width={72} valuemin={0} valuemax={100} />
//                     </MDBProgress>

//                     <MDBCardText
//                       className="mt-4 mb-1"
//                       style={{ fontSize: ".77rem" }}
//                     >
//                       One Page
//                     </MDBCardText>
//                     <MDBProgress className="rounded">
//                       <MDBProgressBar width={89} valuemin={0} valuemax={100} />
//                     </MDBProgress>

//                     <MDBCardText
//                       className="mt-4 mb-1"
//                       style={{ fontSize: ".77rem" }}
//                     >
//                       Mobile Template
//                     </MDBCardText>
//                     <MDBProgress className="rounded">
//                       <MDBProgressBar width={55} valuemin={0} valuemax={100} />
//                     </MDBProgress>

//                     <MDBCardText
//                       className="mt-4 mb-1"
//                       style={{ fontSize: ".77rem" }}
//                     >
//                       Backend API
//                     </MDBCardText>
//                     <MDBProgress className="rounded">
//                       <MDBProgressBar width={66} valuemin={0} valuemax={100} />
//                     </MDBProgress>
//                   </MDBCardBody>
//                 </MDBCard>
//               </MDBCol>

//               <MDBCol md="6">
//                 <MDBCard className="mb-4 mb-md-0">
//                   <MDBCard>
//                     <MDBRipple
//                       rippleColor="light"
//                       rippleTag="div"
//                       className="bg-image hover-overlay"
//                     >
//                       <MDBCardImage
//                         src="https://mdbootstrap.com/img/new/standard/nature/111.webp"
//                         fluid
//                         alt="..."
//                       />
//                       <a>
//                         <div
//                           className="mask"
//                           style={{
//                             backgroundColor: "rgba(251, 251, 251, 0.15)",
//                           }}
//                         ></div>
//                       </a>
//                     </MDBRipple>
//                     <MDBCardBody>
//                       <MDBCardTitle>Card title</MDBCardTitle>
//                       <MDBCardText>
//                         Some quick example text to build on the card title and
//                         make up the bulk of the card's content.
//                       </MDBCardText>
//                       <MDBBtn href="#">Button</MDBBtn>
//                     </MDBCardBody>
//                   </MDBCard>
//                 </MDBCard>
//               </MDBCol>
//             </MDBRow>
//           </MDBCol>
//         </MDBRow>
//       </MDBContainer>
//     </section>
//   );
// }
