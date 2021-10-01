import React from 'react'
const UserFooter = () => {
    return (
    <>
    <footer class="footer bgi">
  <div class="footer-left col-md-4 col-sm-6">
    <p class="about">
      <span id="uni"> About the company</span>Founded in 2011 as Decision Management Inc. in Virginia, USA, now RealCoderZ, is leading technology company with expertise in cloud computing, AI, microservices, blockchain, responsive design, mobile apps, digital marketing and creator of industry-leading HR products such as RC teambuilder
    </p>
    <div class="icons ">
      <a href="#" id="alum"><i class="fa fa-facebook "></i></a>
      <a href="#" id="vol"><i class="fa fa-twitter"></i></a>
      <a href="#" id="alum"><i class="fa fa-linkedin"></i></a>
      <a href="#" id="uni"><i class="fa fa-google-plus"></i></a>
      <a href="#" id = "col"><i class="fa fa-instagram"></i></a>
    </div>
  </div>
  <div class="footer-center col-md-4 col-sm-6">
    <div>
      <i class="fa fa-map-marker"></i>
      <p><span> Noida Sec-135</span> ABC Tower, 815 </p>
    </div>
    <div>
      <i class="fa fa-phone"></i>
      <p> +91 987654321</p>
    </div>
    <div>
      <i class="fa fa-envelope"></i>
      <p><a href="#"> Admin@Realcoderz.com</a></p>
    </div>
  </div>
  <div class="footer-right col-md-4 col-sm-6">
    <h2> Alumni<span> Meet</span></h2>
    <p class="menu ">
      <a href="#">  Home </a>  |
      <a href="#about">  About </a>  |
      <a href="#howwework">  Services </a>  |
      <a href="#ourteam">  Team </a>  |
      <a href="#blog">  Blog</a>  |
      <a href="#contact">  Contact</a>
    </p>
    <p class="name"> Alumni Management Systemcopy</p>
  </div>
</footer>
    </>
    )
};
export default UserFooter
