import React from "react";
import CommonCard from "./common-card";
import bg from "../../assets/about-page/profileBack.avif";
import profile1 from "../../assets/about-page/profile1.avif";
import profile2 from "../../assets/about-page/profile2.avif";
import profile3 from "../../assets/about-page/profile3.avif";
import profile4 from "../../assets/about-page/profile4.avif";
const teamMembers = [
  {
    name: "John Doe",
    role: "CEO",
    bg: bg, // background image
    overlay: profile1, // profile image
  },
  {
    name: "Jane Smith",
    role: "CTO",
    bg: bg,
    overlay: profile2,
  },
  {
    name: "Michael Lee",
    role: "COO",
    bg: bg,
    overlay: profile3,
  },
  {
    name: "Emily Clark",
    role: "CMO",
   bg: bg,
    overlay:profile4,
  },
];

const ManagementTeam = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 text-warning fw-bold">Our Management Team</h2>
      <div className="row">
        {teamMembers.map((member, idx) => (
          <div key={idx} className="col-lg-3 col-md-6 mb-4">
            <CommonCard
              title={member.name}
              desc={member.role}
              bg={member.bg}
              overlay={member.overlay}
              showOverlay={true}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManagementTeam;
