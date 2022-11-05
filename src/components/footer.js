import react from 'react'

export default function Footer() {
  return (
    <>
      <div id = "footer">
        <div className="footer">
          <div className="footer-content">
            <div className="mb10">
              <a href="#" target="_blank">Privacy Policy</a>
              <div className="divider" role="separator" style={{color: "rgb(255, 255, 255)", marginTop: 7, marginLeft: 7, marginRight: 7}}></div>
              <a href="#" target="_blank">Security Policy</a>
              <div className="divider" role="separator" style={{color: "rgb(255, 255, 255)", marginTop: 7, marginLeft: 7, marginRight: 7}}></div>
              <a href="#" target="_blank">Terms of Use</a>
            </div>
            <p style ={{marginBottom: 0}}>© 2022 Income (UEN 202135698W). All rights reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
}

