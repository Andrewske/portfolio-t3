const interest = prompt("Web Developer or Data Analyst?");

export const AboutKevin = ({}) => {
  let about = `Passionate, motivated, life learner with 
        experience in web development and data analysis. 
        Seeking interesting and complex problems to solve.`;

  if (interest === "Web Developer") {
    about = `I began learning HTML and CSS in 2017 while 
        working as a Marketing Project Manager out of a 
        desire to build landing pages.
        
        I quickly felt limited and found Javascript as the
        solution to set me free. In 2020, I decided to pursue 
        web development and learned React. I have been
        building projects and continuing my education since.`;
  } else if (interest === "Data Analyst") {
    about = `I began learning SQL and Python in 2017 while
        working as a Marketing Project Manager out of a
        desire to access my company's data and use that data to
        answer interesting questions.
        
        I discovered a passion for identifying patterns and
        using data to tell stories. I evolved my position
        at Bonanza to focus my duties on data analysis. I have
        been working full-time as a data analyst since 2019.`;
  }

  return about;
};
