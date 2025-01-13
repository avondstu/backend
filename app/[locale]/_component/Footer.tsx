import React from 'react'
import { getCompanyInformation } from '../(protected)/company/information/lib/data'

export default async function Footer() {

    const pageData = await getCompanyInformation();

  return (
    <footer>
        <div className="pt-12.5 pb-10">
            <div className="container">
                <div className="flex lg:flex-row flex-col items-center justify-between gap-y-4">
                    <div className="copyright-text">
                        <p>Copyright <a href="index.html" className="text-primary">&copy;{pageData?.name}</a> All Rights
                            Reserved.</p>
                    </div>
                    <ul className="flex flex-wrap justify-center gap-x-7.5 gap-y-3">
                        <li><a href="">Latest Project</a></li>
                        <li><a href="">Pricing</a></li>
                        <li><a href="">Contact</a></li>
                        <li><a href="">Privacy Policy</a></li>
                        <li><a href="">Terms & conditions</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}
