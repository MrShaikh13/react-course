// import React from "react";
import Card from "./components/Card";

const App = () => {
  const jobOpenings = [
    {
      company: "Amazon",
      date: "2 days ago",
      wark: "UX Designer",
      warkTime: "Full Time",
      level: "Remote",
      price: "$95/hr",
      from: "Bangalore, India",
      img: "https://www.kindpng.com/picc/m/106-1065269_small-amazon-logo-vector-hd-png-download.png",
    },
    {
      company: "Google",
      date: "5 days ago",
      wark: "Product Designer",
      warkTime: "Full Time",
      level: "In Office",
      price: "$90/hr",
      from: "Hyderabad, India",
      img: "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png",
    },
    {
      company: "Microsoft",
      date: "1 day ago",
      wark: "UX Researcher",
      warkTime: "Contract",
      level: "Remote",
      price: "$85/hr",
      from: "Chennai, India",
      img: "https://i0.wp.com/www.printmag.com/wp-content/uploads/2012/09/2a34d8_0780274467a2423dad8f53021b21caadmv2.png?fit=376%2C375&quality=80&ssl=1",
    },
    {
      company: "Adobe",
      date: "3 days ago",
      wark: "UI/UX Designer",
      warkTime: "Full Time",
      level: "Hybrid",
      price: "$92/hr",
      from: "Noida, India",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrwQfjxYHgFGWPe6kpIwq3xWtlcSrBgjqfbA&s",
    },
    {
      company: "Meta",
      date: "6 days ago",
      wark: "Product Designer",
      warkTime: "Full Time",
      level: "Remote",
      price: "$100/hr",
      from: "Mumbai, India",
      img: "https://static.vecteezy.com/system/resources/previews/055/210/890/non_2x/meta-logo-square-rounded-meta-logo-meta-logo-free-download-free-png.png",
    },
    {
      company: "Netflix",
      date: "4 days ago",
      wark: "UX Designer",
      warkTime: "Contract",
      level: "Remote",
      price: "$110/hr",
      from: "Pune, India",
      img: "https://static.vecteezy.com/system/resources/previews/020/336/373/non_2x/netflix-logo-netflix-icon-free-free-vector.jpg",
    },
    {
      company: "Airbnb",
      date: "7 days ago",
      wark: "Interaction Designer",
      warkTime: "Part Time",
      level: "Remote",
      price: "$80/hr",
      from: "Delhi, India",
      img: "https://i.pinimg.com/736x/39/13/61/3913610b8cf23554537bbfa6cb374ae1.jpg",
    },
    {
      company: "Spotify",
      date: "2 days ago",
      wark: "UX Designer",
      warkTime: "Full Time",
      level: "Hybrid",
      price: "$88/hr",
      from: "Bangalore, India",
      img: "https://i.pinimg.com/736x/61/3f/89/613f897c5dd58206dc221c808c2f69af.jpg",
    },
    {
      company: "Uber",
      date: "1 week ago",
      wark: "Product Designer",
      warkTime: "Full Time",
      level: "In Office",
      price: "$87/hr",
      from: "Hyderabad, India",
      img: "https://images.icon-icons.com/2407/PNG/512/uber_icon_146079.png",
    },
    {
      company: "Swiggy",
      date: "3 days ago",
      wark: "UX Designer",
      warkTime: "Full Time",
      level: "Hybrid",
      price: "$60/hr",
      from: "Bangalore, India",
      img: "https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png",
    },
    {
      company: "Zomato",
      date: "2 days ago",
      wark: "UI Designer",
      warkTime: "Contract",
      level: "Remote",
      price: "$55/hr",
      from: "Gurgaon, India",
      img: "https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png",
    },
    {
      company: "Flipkart",
      date: "4 days ago",
      wark: "UX Researcher",
      warkTime: "Full Time",
      level: "In Office",
      price: "$70/hr",
      from: "Bangalore, India",
      img: "https://static.vecteezy.com/system/resources/previews/054/650/802/non_2x/flipkart-logo-rounded-flipkart-logo-free-download-flipkart-logo-free-png.png",
    },
    {
      company: "Paytm",
      date: "6 days ago",
      wark: "Product Designer",
      warkTime: "Full Time",
      level: "Hybrid",
      price: "$65/hr",
      from: "Noida, India",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO-EZ6e_RwNhOjmlrNsT8lXVElZ6BgNAkOrQ&s",
    },
    {
      company: "Razorpay",
      date: "1 day ago",
      wark: "UX Designer",
      warkTime: "Full Time",
      level: "Remote",
      price: "$75/hr",
      from: "Bangalore, India",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwciDSF2nsPulR6vee4JCvFZkGTMgI7-szHA&s",
    },
    {
      company: "CRED",
      date: "5 days ago",
      wark: "Interaction Designer",
      warkTime: "Part Time",
      level: "Remote",
      price: "$72/hr",
      from: "Bangalore, India",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8Zbig8osovP8A5tu79m7hz2lYLt4L_b0-EA&s",
    },
    {
      company: "Byju's",
      date: "3 days ago",
      wark: "UI/UX Designer",
      warkTime: "Contract",
      level: "Hybrid",
      price: "$58/hr",
      from: "Bangalore, India",
      img: "https://vectorseek.com/wp-content/uploads/2023/05/BYJUS-Logo-Vector.jpg",
    },
    {
      company: "Ola",
      date: "2 days ago",
      wark: "Product Designer",
      warkTime: "Full Time",
      level: "In Office",
      price: "$68/hr",
      from: "Bangalore, India",
      img: "https://c8.alamy.com/comp/2S1BHCJ/ola-letter-logo-design-for-technology-company-ola-logo-design-black-and-white-color-combination-ola-logo-ola-vector-ola-design-ola-icon-ola-alph-2S1BHCJ.jpg",
    },
    {
      company: "Freshworks",
      date: "1 week ago",
      wark: "UX Designer",
      warkTime: "Full Time",
      level: "Remote",
      price: "$78/hr",
      from: "Chennai, India",
      img: "https://masterconcept.ai/wp-content/uploads/2022/10/Freshworks-logo.png",
    },
    {
      company: "Zoho",
      date: "4 days ago",
      wark: "UI Designer",
      warkTime: "Full Time",
      level: "In Office",
      price: "$62/hr",
      from: "Chennai, India",
      img: "https://i.pinimg.com/736x/ad/d8/dc/add8dc1359dbece041e40456660101dc.jpg",
    },
    {
      company: "TCS",
      date: "2 days ago",
      wark: "UX Designer",
      warkTime: "Full Time",
      level: "Hybrid",
      price: "$50/hr",
      from: "Mumbai, India",
      img: "https://resources.ripplematch.com/hubfs/Tata%20Consultancy%20Services-1.png",
    },
  ];
  return (
    <div className="parent">
      {jobOpenings.map(function (e, idx) {
        return (
          <div key={idx}>
            <Card
              company={e.company}
              date={e.date}
              work={e.work}
              warkTime={e.warkTime}
              level={e.level}
              price={e.price}
              from={e.from}
              img={e.img}
            />
          </div>
        );
      })}
    </div>
  );
};
export default App;
