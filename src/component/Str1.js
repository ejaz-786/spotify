import React, { Component } from 'react'

class Str1 extends Component {
  render() {
    return (
        <>
         {/* <div>Str1</div>
         <i class="fa-brands fa-spotify fa-3x"></i> */}
 <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
    <a class="navbar-brand" href="+">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="+">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="+">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="+">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="+" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

{/* ..................... */}

<div style={{height:"40vh",width:"100%",backgroundColor:"lightblue",textAlign:"center",paddingTop:"45px"}} className="container1" >
    <h1>this is heading</h1>
    <p> 7 rs for 1 day
    </p>
    <p>25 rs for 1 week</p>
    <button>click here</button>
    <button>click me</button><br />
    <a href="+">this is link</a>

</div>

<div style={{height:"60vh",width:"100%",backgroundColor:"black",textAlign:"center",paddingTop:"45px",color:"white"}}  className="container2">

<h1>this is heading</h1>
    <p> 7 rs for 1 day
    </p>
    <p>25 rs for 1 week</p>
    <button>click here</button>
    <button>click me</button><br />
    <a href="+">this is link</a>

</div>

<div style={{height:"60vh",width:"100%",backgroundColor:"white",textAlign:"center",paddingTop:"45px",color:"black"}}  className="container2">

<h1>this is heading</h1>
    <p> 7 rs for 1 day
    </p>
    <p>25 rs for 1 week</p>
    <button>click here</button>
    <button>click me</button><br />
    <a href="+">this is link</a>

</div>
         
        </>
     
    )
  }
}

export default Str1