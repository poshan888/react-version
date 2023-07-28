import React from 'react'

const index = () => {
  return (
    <footer className="mt-auto bg-primary">
      <div className="container-fluid">
        <div className="py-3 d-flex flex-wrap flex-md-row flex-sm-column gap-2 align-items-center justify-content-md-between justify-content-center">
          <img src="../../assets/images/webp/logo.webp" alt="HTestHtml" srcset="../../assets/images/webp/logo.webp" width="90" height="40" />
          <div className="d-flex flex-wrap align-items-center justify-content-md-between justify-content-center gap-md-3 gap-2">
            <span className="capshift-write-to-us fs-6 text-gray"></span>
            <span className="text-white fw-semibold">Write to us at:</span>
            <a href="mailto:info@capshift.com" title="info@capshift.com" className="flex-grow-1 text-center">info@capshift.com</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default index