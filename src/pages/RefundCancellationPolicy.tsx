import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface PolicySection {
  section_title: string;
  section_content: string;
}

interface RefundCancellationData {
  title: string;
  content: PolicySection[];
}

const RefundCancellationPolicy: React.FC = () => {
  const navigate = useNavigate();

  const policyData: RefundCancellationData = {
    title: "Refund & Cancellation Policy",
    content: [
      {
        section_title: "Introduction",
        section_content: `
          <p>All the capitalised terms used in the present policy have the same definitions assigned to them in the Terms of Use unless otherwise specified.</p>
        `
      },
      {
        section_title: "A. CANCELLATION OF SERVICE",
        section_content: `
          <p>Since the Company is providing its Services or purchase thereof digitally, it will consent to cancellation of service only if the customer raises the request within 2 (two) days from the date of order/sign up and only if the customer has not used the Services at all. Using the Services includes without limitation, viewing course/s or course trailers, communicating/interacting with Experts or in any other way, interacting with the Application or availing of the Services in person in a manner that would be gainful to the Customer at the expense of the Company if a refund were to be given. Additionally, only in respect of the Boss Academy programme, the following conditions apply:</p>
          <ul style="list-style-type: disc; margin-left: 40px;">
            <li>a 50% refund will be provided if the customer raises a request after 2 (two) days up to 7 (seven) days prior to the date of the Boss Academy event for which the customer has signed up.</li>
            <li>Notwithstanding anything else stated in the present ToU and regardless of the date of sign up by the customer, no refund will be provided at all if a request is raised 7(seven) days or later prior to the date of the Boss Academy event for which the customer has signed up.</li>
          </ul>
          <br />
          <p>The Customer can request a cancellation by sending an email to support@bosswallah.com. The Company will respond to the request within 2 days from the date of receipt of the request.</p>
        `
      },
      {
        section_title: "B. REFUND",
        section_content: `
          <p>A refund will be made to the Customer within 2 working days if a request for cancellation is entertained.</p>
          <br />
          <p>App membership and subscription period once selected and paid for shall be allowed to be changed only at the time of renewal or post expiry of the existing period covered under the subscription.</p>
          <br />
          <p>No chargeback and refund shall be admissible under any other circumstances. The amount once paid to subscribe for the package will not be refunded unless the customer seeks cancellation in the manner detailed above.</p>
        `
      },
      {
        section_title: "C. SERVICE LIMITATIONS",
        section_content: `
          <p>The Company will try to make your experience with the Desktop App/Mobile App a productive one. However, the Company cannot always foresee or anticipate technical or other difficulties. The Services may contain errors, bugs, or other problems. These difficulties may result in loss of data, personalization settings or other service interruptions. For this reason, you agree that, except as explicitly stated otherwise in these Terms, the Services are provided 'AS IS', without warranties of any kind. the Company does not assume responsibility for the timelines, deletion, mis-delivery, or failure to store any user data, communications, or personalization settings.</p>
          <br />
          <p>The Company and its directors, employees, associates, or other representatives shall not be liable for any damages or injury, arising out of or in connection with the use, or non-use including non-availability of the Desktop App/ Mobile App, and also for any consequential loss or any damages caused because of non-performance of the system due to a computer virus, system failure, corruption of data, delay in operation or transmission, communication line failure, or any other reason whatsoever. The Company will not be responsible for any liability arising out of delay in providing any information on the Website/Mobile App.</p>
          <br />
          <strong>Not an Investment Advisor, Planner, Broker or Tax Advisor</strong>
          <br />
          <br />
          <p>Neither the Company nor the Services are intended to provide any legal, tax or financial or securities-related advice unless an explicit statement is made to the contrary. You agree and understand that the Company is not and shall never be construed as a financial planner, financial intermediary, investment advisor, broker or tax advisor.</p>
          <br />
          <p>Your personal financial situation is unique, and any information and advice obtained through the Services may not be appropriate for your situation, especially in the absence of all details being provided to the advisor who is providing Services.</p>
          <br />
          <p>The Company may merely facilitate the above services via any Third-Party service provider/ Intermediary/Expert but is not responsible for the nature of advice received from such Experts.</p>
          <br />
          <p>Accordingly, before making any final decisions or implementing any financial strategy, you should consider obtaining additional information and advice from your advisor or other financial advisors who are fully aware of your individual circumstances. Please use your discretion and judgment before implementing any advice received on the Application.</p>
        `
      },
      {
        section_title: "D. DISCLAIMERS OF WARRANTY",
        section_content: `
          <p>You expressly understand and agree that your use of the Services and all information, products, services and other content (including that of the third parties) included in or accessible from the Services is at your sole risk.</p>
          <br />
          <p>The services are provided on an <strong>as is</strong> and <strong>as available</strong> basis. The Company and its service providers expressly disclaim all warranties of any kind as to the services and all information, products, services and other content (including that of the third parties) included in or accessible from the Services, whether express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose and non-infringement.</p>
          <br />
          <p>Without limiting the generality of the foregoing, the company and its third-party service providers are not responsible for the accuracy or reliability of any data from any third party or for any interruptions in the availability of any services, whether as a result of actions by the company, or any third party.</p>
          <br />
          <p>The company makes no representations, warranties or guarantees, express or implied, regarding the accuracy, reliability or completeness of the content on the desktop app/ mobile app or of the services (whether or not sponsored by third party service providers), and expressly disclaims any warranties of non-infringement or fitness for a particular purpose.</p>
          <br />
          <p>The company makes no representation, warranty or guarantee that the content that may be available through the services is free of infection from any viruses or other code or computer programming routines that contain contaminating or destructive properties or that are intended to damage, surreptitiously intercept or expropriate any system, data or personal information. Categorization of your transactional information within the services is estimation provided for your information only, and the company disclaims all warranties of accuracy for any use, including without limitation, tax deduction. The company and its service providers make no warranty that (i) the services will meet your requirements, (ii) the services will be uninterrupted, timely, secure, or error-free, (iii) the results that may be obtained from the use of the services will be accurate or reliable, (iv) the quality of any products, services, information, or other material purchased or obtained by you through the services will meet your expectations, and (v) any errors in the technology will be corrected. Any material downloaded or otherwise obtained through the use of the services is done at your own discretion and risk and you are solely responsible for any damage to your computer system or loss of data that results from the download of any such material. No advice or information, whether oral or written, obtained by you from the company or its service providers or through or from the company or its service providers, will create any warranty not expressly stated in these terms.</p>
        `
      },
      {
        section_title: "E. DISCLAIMER ON CONTENT",
        section_content: `
          <p>The content of the courses on the Desktop App/ Mobile App do not constitute any offer or solicitation to offer or recommendation or endorsement of the activities being explained in the said courses. There is also no guarantee regarding the quantum of earnings/other milestones detailed in the courses that can be achieved by watching the courses. These courses are for educational purposes only and have been prepared to create knowledge and awareness about various facets of agriculture/farming, personal finance and small business, among others. The Company is not affiliated with the government or with any department thereof, unless there is specific claim of such affiliation made by the Company. The contents of the courses do not take into account your individual needs, career/financial objectives and specific financial circumstances. Any representation received from a third party professing to be affiliated with the Company, offering to provide/facilitate/assist with any financial service are false and the Company is not liable or responsible for such representations. The Company is also not responsible for any representations made by any third party on the Website/Mobile App. Watching the courses does not guarantee success in any field as there are various factors that contribute to success in any area and the Company cannot be held to be responsible for any direct or indirect loss incurred by you as a result of watching and/or implementing the ideas professed in the courses. The Company is also not liable to ensure the continued accuracy of the information available on published courses, although the information is accurate to the best of its knowledge as on the date of publication of each course. The Company also retains the right to edit or deactivate or delete any of its courses, or parts thereof, at any time.</p>
        `
      },
      {
        section_title: "F. LIMITATION OF LIABILITY",
        section_content: `
          <p>You agree that neither the Company nor any of its affiliates, subsidiaries, licensors, suppliers, service providers, third party developers, account providers or any of their affiliates will be liable for any direct, indirect, incidental, special, consequential or exemplary damages, including but not limited to damages for loss of the Company has been advised of the possibility of such damages, resulting from:</p>
          <ul style="list-style-type: disc; margin-left: 40px;">
            <li>the use or the inability to use the services</li>
            <li>the cost of getting substitute goods and services resulting from any products, data, information or services purchased or obtained or messages received or transactions entered into, through or from the company</li>
            <li>unauthorized access to or alteration of your transmissions or data.</li>
            <li>statements or conduct of anyone on the service.</li>
            <li>the use, inability to use, unauthorized use, performance or non-performance of any third-party account provider site, even if the provider has been advised previously of the possibility of such damages. Or (vi) any other matter relating to the services.</li>
          </ul>
          <br />
          <p>Neither the Company nor any of its affiliates, directors, officers or employees, will be liable or have any responsibility of any kind for any direct or indirect loss or damage that you may incur in the event of any failure or interruption of this website/mobile app, or resulting from the act or omission of any other party involved in making this Application or the data contained therein available to you, or from any other cause relating to your access to, inability to access, or use of the desktop app/mobile app or these materials, whether or not the circumstances giving rise to such cause may have been within the control of the website/mobile app or of any vendor providing software or services support. In no event, will the company be liable to you for any direct, special, indirect, consequential, incidental damages or any other damages of any kind.</p>
        `
      }
    ]
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Home Button */}
      <Button
        variant="ghost"
        onClick={() => navigate('/')}
        className="mb-6 flex items-center gap-2"
      >
        <ArrowLeft className="h-4 w-4" />
        Home
      </Button>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          {policyData.title}
        </h1>
        <hr className="mt-6 border-border" />
      </div>

      {/* Content */}
      <div className="prose prose-lg max-w-none">
        {policyData.content.map((section, index) => (
          <div key={index} className="mb-8">
            {section.section_title !== "Introduction" && (
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {section.section_title}
              </h2>
            )}
            <div 
              className="text-muted-foreground leading-relaxed"
              dangerouslySetInnerHTML={{ __html: section.section_content }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RefundCancellationPolicy;
