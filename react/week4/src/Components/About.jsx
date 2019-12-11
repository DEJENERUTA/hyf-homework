import React from 'react';

function About() {
  return (
    <section id="about" className="py-5">
      <div className="container bg-white">
        <h2 className="text-primary display-4 mt-5 text-center mb-3">About Me</h2>
       <div className="heading-underline mx-auto"></div>
       <div className="row mt-5">
       <div className="col-sm-6 mb-4 mb-sm-0">
         <img src="/DSC_9088.JPG" alt="" width="200" height="300" />
       </div>
       <div className="col-sm-6">
         <p className="lead text-muted">Courteous and enthusiastic, I am passionate about IT and everything in its orbit. I recently finished my 8 month web development course and began to be fascinated by web programming, e.g. developing apps and building websites.  I am now looking to test my skills further at a local company and join an existing developer team! In return, I would offer my full commitment, and be a pleasant and friendly addition to your team.
          I am therefore open to entry-level position or even internships where I can further hone my skills.</p>
         <p className="lead text-muted">Continual education, keeping up with the latest technology trends and using
              cutting
              edge technologies in my projects are very important to me. Check out my latest projects at <a href="https://github.com/DEJENERUTA" target="_blank" rel="noopener noreferrer">github</a>.</p>
         <p className="lead text-muted">I look forward to making a career in the Tech industry.</p>
         <blockquote className="blockquote text-right mt-5">
         <p>"I love programming, chatting, traveling and lifting heavy things."</p>
        <footer className="blockquote-footer"></footer>
        </blockquote>
      <div className="text-right mt-4">
         <a href="https://github.com/DEJENERUTA" target="_blank" rel="noopener noreferrer" className="mr-2"><i class="fab fa-github-square"></i></a>
         <a href="https://www.linkedin.com/in/dejene-daba-432029140/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
      </div>
      </div>
      </div>
      </div>
    </section>
  )
}

export default About;