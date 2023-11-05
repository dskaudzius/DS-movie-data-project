import { Fragment } from "react";

const Footer = () => {
  return (
    <Fragment>
      <footer className="footer">
        <h4>Copyright © 2023 | DS</h4>
        <div className="social-media">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/dskaudzius"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a href="https://github.com/dskaudzius" target="_blank" rel="noreferrer">
            Portfolio
          </a>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
