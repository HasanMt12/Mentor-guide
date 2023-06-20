import React from 'react';
import './Form.css'
const Form = () => {
   
    return (
         <div class="container">
  <form >
  <div class="row">
    <div class="col-25">
      <label className="text-color" for="fname">Name :</label>
    </div>
    <div class="col-75">
      <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
    </div>
  </div>
  <div class="row">
    <div class="col-25">
      <label className="text-color" for="lname">Email :</label>
    </div>
    <div class="col-75">
      <input type="text" id="lname" name="email" placeholder="Your Email.."/>
    </div>
  </div>
   <div class="row">
    <div class="col-25">
      <label className="text-color" for="lname">Subject :</label>
    </div>
    <div class="col-75">
      <input type="text" id="lname" name="sub" placeholder="Whats your Subject"/>
    </div>
  </div>
  <div class="row">
    <div class="col-25">
      <label className="text-color" for="country">Dialing Code :</label>
    </div>
    <div class="col-75">
      <select id="code" name="country">
        <option value="01">01</option>
        <option value="02">02</option>
        <option value="03">03</option>
      </select>
    </div>
  </div>
  <div class="row">
    <div class="col-25">
      <label className="text-color" for="lname">Number :</label>
    </div>
    <div class="col-75">
      <input type="text" id="lname" name="sub" placeholder="Whats your Number"/>
    </div>
  </div>
  <div class="row">
    <div class="col-25">
      <label className="text-color" for="subject">message :</label>
    </div>
    <div class="col-75">
      <textarea id="subject" name="subject" placeholder="Write your message here" style={{height:"200px"}} ></textarea>
    </div>
  </div>
  <br/>
  <div class="row">
    <input type="submit" value="Submit"/>
  </div>
  </form>
</div>
    );
};

export default Form;