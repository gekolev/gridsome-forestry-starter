<template>
  <Layout>
    <div class="container">

      <div class="contact-header">

<div id="shake" class="circular--portrait">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/92e43377589717.603fe72c4e08a.jpg"/>
</div>
        <h1 class="contact-title">About me</h1>


        <h2>I'm a reasonable guy, interested in design and web technologies.</h2>
   
        <p>I have a passion for great design, of any kind. I love the extremes, either a clean, minimalist design where form follows function or a crazy brutalist page where you loose yourself amongst the horrible colours and images. Going to the extremes always proves to be beneficial. </p>
        <p>The digital world offers so much more in terms of possibilities. Therefore, I am planning on focusing mostly on interaction and interface design in web environments. Studying the way people percieve different designs and experiences in the digital world captivates me.   </p>
        <p>In the future I would like to learn as much as possible about interaction design and user experience. Animations, micro interactions and all other elements of interfaces are facinating to me and seem like a good starting point for my journey. Creative web development also seems like an amazing thing to learn. Static sites are very interesting, the performance is crazy and I don't really understand how they work so well. Maybe I'll need a mentor or someone to guide me in the start...</p>
        
        <div id="right" style="text-align:right;"><i>Currently looking to join a design agency...</i>
<br>
<br>
        <a href="https://gekolev.github.io/" target="_blank" rel="noopener noreferrer">Old Portfolio</a>
        <br> <br>
        <a href="https://github.com/gekolev" target="_blank" rel="noopener noreferrer">GitHub</a>
        <br>
        <a href="https://www.behance.net/gekolev" target="_blank" rel="noopener noreferrer">Behance</a>
        </div>
      </div>

            <div class="info">
              <div class="left"><h2>Education</h2></div>
              <div class="right"><i>Jönköping University 2018 - 2021</i> <br> <h4 class="tight">Degree of Bachelor with a major in Informatics
specialisation in New Media Design</h4> <br> <br> <i>American College Arcus 2013 - 2018</i> <br> <h4 class="tight">Excellent gymnasium diploma</h4><br><h4 class="tight">+Cambridge English: Advanced (CAE)</h4> </div>
            </div>
                        <div class="info">
              <div class="left"><h2>Experience</h2></div>
              <div class="right"><i>UI/UX Internship</i> <br> <h4 class="tight">9 Week intership at <a href="https://ny.se/">NY</a> - Full Service Creative Agency</h4> <br> <i>Graphic Designer</i> <br> <h4 class="tight">Designer and board member of Students of Sustainable Action</h4><br> <i>Cient-Side TA</i> <br> <h4 class="tight">Teacher Assistant in computer lab sessions</h4> </div>
            </div>
            <br>
            <br>
            <h2> Things I have used</h2>
            <h3>Tech Stack:</h3>
      <div class="box">
        <div class="skill">
          <p class=items>HTML</p> 
        </div>
        <div class="skill">
          <p class=items>CSS/SASS/SCSS</p> 
        </div>
        <div class="skill">
          <p class=items>JavaScript</p> 
        </div>
        <div class="skill">
          <p class=items>PHP</p> 
        </div>
        <div class="skill">
          <p class=items>WordPress</p> 
        </div>
        <div class="skill">
          <p class=items>Three.js</p> 
        </div>
        <div class="skill">
          <p class=items>Vue.js</p> 
        </div>
        <div class="skill">
          <p class=items>Gridsome</p>
        </div>
        <div class="skill">
          <p class=items>Forestry CMS</p> 
        </div>
        <div class="skill">
          <p class=items>Markdown</p> 
        </div>
        <div class="skill">
          <p class=items>Lottie Animations</p> 
        </div>
        <div class="skill">
          <p class=items>Gulp</p> 
        </div>
      </div>
        <br>
        <br>
      <h3>Design Stack:</h3>
      <div class="box">
        <div class="skill">
          <p class=items>Illustrator</p>
        </div>
        <div class="skill">
          <p class=items>Photoshop</p> 
        </div>
        <div class="skill">
          <p class=items>InDesign</p>
        </div>
        <div class="skill">
          <p class=items>Figma</p> 
        </div>
        <div class="skill">
          <p class=items>After Effects</p> 
        </div>
        <div class="skill">
          <p class=items>Premiere</p> 
        </div>
      </div>


    </div>
  </Layout>
</template>

<script>

export default {}
</script>

<style scoped>
.tight{
  margin-top: 0;
  margin-bottom: 0;
}
.info {
  max-width: 840px;
  display: flex;
}
.left {
 width: 50%;
}
.right{
  padding-top:32px;
  width: 50%;
}

.circular--portrait {
  position: absolute;
  right: 10%;
  top:0%;
  width: 150px;
  height: 150px;
  overflow: hidden;
  border-radius: 50%;
}

.circular--portrait img {
  width: 100%;
  height: auto;
}

.items {
  margin:auto;
  margin-top: 5%;
}
.box {
  max-width: 840px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.skill {
  flex: 1 0 40%; 
  margin: 0;
}
.contact-header {
  max-width: 840px;
  padding: 2rem 0 4rem 0;
  position: relative;
}
.contact-title {
  font-size: 4rem;
  margin: 0 0 4rem 0;
  padding: 0;
}

#shake:hover{
  animation-play-state: running;
	animation-name: shake;
	animation-duration: 400ms;
	animation-timing-function: ease-in-out;
	animation-iteration-count: infinite; 
}

@keyframes shake {
  10% {
    transform: translate(-1px, 0.5px) rotate(1deg); }
  20% {
    transform: translate(-0.5px, -0.5px) rotate(-0.5deg); }
  30% {
    transform: translate(2px, 0.5px) rotate(0.5deg); }
  40% {
    transform: translate(0.5px, 0px) rotate(0.25deg); }
  50% {
    transform: translate(1px, -1px) rotate(1deg); }
  60% {
    transform: translate(-1px, -0.5px) rotate(-0.5deg); }
  70% {
    transform: translate(0.5px, 1px) rotate(1deg); }
  80% {
    transform: translate(-1px, 0.5px) rotate(-2.2deg); }
  90% {
    transform: translate(0.5px, -0.5px) rotate(0.5deg); }
  0%, 100% {
    transform: translate(0, 0) rotate(0); } 
}

@media (max-width: 860px) {
.circular--portrait{
  display: none;
}

.box {
  max-width: 840px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
}

.info {
  max-width: 840px;
  display: flex;
  flex-direction: column;
}

.left {
 width: 100%;
}
.right{
  padding-top:0;
  width: 100%;
}



}

</style>

