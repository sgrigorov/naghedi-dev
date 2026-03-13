import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="page" className="container" role="main">
        <article className="sections" id="sections" dangerouslySetInnerHTML={{ __html: SECTIONS_HTML }} />
      </main>
      <Footer />
    </>
  );
}

const SECTIONS_HTML = `
  <section class="page-section has-section-divider full-bleed-section layout-engine-section background-width--full-bleed section-height--medium content-width--wide horizontal-alignment--center vertical-alignment--middle has-background black" data-section-theme="black">
    <div class="section-border">
      <div class="section-background">
        <div class="section-background-content">
          <img src="https://images.squarespace-cdn.com/content/v1/6593abc53b38c97cdaf5a338/189683c5-9773-45a4-9738-d0cfe3f900a1/Home+page+photo.jpg" alt="NAGHEDI Immigration" class="background-image-fx" style="display:block;object-position: 44.2% 22.4%;object-fit:cover;width:100%;height:100%;" />
          <div class="section-background-canvas background-fx-canvas"></div>
        </div>
        <div class="section-background-overlay" style="opacity: 0.15;"></div>
      </div>
    </div>
    <div class="content-wrapper">
      <div class="content">
        <div class="sqs-block html-block sqs-block-html">
          <div class="sqs-block-content">
            <div class="sqs-html-content">
              <h3 style="white-space:pre-wrap;color:white;"><strong>Your Immigration Journey Is Unique,</strong></h3>
              <h3 style="white-space:pre-wrap;color:white;"><strong>So Is Our Approach.</strong></h3>
              <p class="sqsrte-large" style="white-space:pre-wrap;color:white;">Our dedicated team of licensed professionals is here to guide and empower you every step of the way towards realizing your Canadian aspirations. With our unwavering and transparent support, your journey towards a brighter future in Canada becomes smoother, more attainable, and empowering.</p>
            </div>
          </div>
        </div>
        <div class="sqs-block button-block sqs-block-button">
          <div class="sqs-block-content">
            <div class="sqs-block-button-container sqs-block-button-container--center" style="margin-top:1.5rem;display:flex;flex-direction:column;gap:1rem;align-items:flex-start;">
              <a href="https://calendly.com/naghedi-booking/consultation-appointment" target="_blank" rel="noopener" class="sqs-block-button-element--medium sqs-button-element--primary sqs-block-button-element">Book Consultation</a>
              <a href="https://secure.officio.ca/qnr?id=4902&hash=d83cf1baabcbb257f7f99f624ba3b2f0" target="_blank" rel="noopener" class="sqs-block-button-element--medium sqs-button-element--primary sqs-block-button-element">Free Assessment Form</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="page-section full-bleed-section layout-engine-section background-width--full-bleed section-height--custom content-width--wide horizontal-alignment--center vertical-alignment--middle white-bold" data-section-theme="white-bold">
    <div class="section-border"><div class="section-background"></div></div>
    <div class="content-wrapper">
      <div class="content">
        <div class="sqs-html-content">
          <h2 style="white-space:pre-wrap;">Welcome to NAGHEDI Immigration Inc</h2>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;margin:2rem 0;">
          <div style="padding:6%;background:var(--white, #fff);border-radius:4px;">
            <h4 style="white-space:pre-wrap;"><strong>Our mission</strong></h4>
            <p class="sqsrte-large" style="white-space:pre-wrap;">Our mission is to navigate the complexities of immigration law with integrity, professionalism, and compassion, for each client to receive the best possible outcome.</p>
          </div>
          <div style="padding:6%;background:var(--white, #fff);border-radius:4px;">
            <h4 style="white-space:pre-wrap;"><strong>Our vision</strong></h4>
            <p class="sqsrte-large" style="white-space:pre-wrap;">Supporting you in achieving your dreams of a better life in Canada by providing reliable and compassionate immigration assistance, for a smooth and positive experience for every client.</p>
          </div>
        </div>

        <div class="sqs-html-content">
          <h4 style="white-space:pre-wrap;"><strong>How it works?</strong></h4>
        </div>
        <div class="accordion-block" style="margin:1rem 0;">
          <ul class="accordion-items-container">
            <li class="accordion-item">
              <h4 class="accordion-item__title-wrapper" role="heading" aria-level="3">
                <button class="accordion-item__click-target" aria-expanded="false"><span class="accordion-item__title">1- Initial Consultation</span></button>
              </h4>
              <div class="accordion-item__dropdown" role="region">
                <div class="accordion-item__description sqsrte-small"><p>We start with an initial consultation to understand your immigration goals, assess your eligibility, and discuss the best pathway for your situation. This includes discussing applicable government and professional fees.</p></div>
              </div>
            </li>
            <li class="accordion-item">
              <h4 class="accordion-item__title-wrapper" role="heading" aria-level="3">
                <button class="accordion-item__click-target" aria-expanded="false"><span class="accordion-item__title">2 - Service Agreement (Retainer Agreement)</span></button>
              </h4>
              <div class="accordion-item__dropdown" role="region">
                <div class="accordion-item__description sqsrte-small"><p>Once you decide to move forward, we formalize our partnership through a service agreement. This contract outlines the scope of our services, fees, payment terms, and the responsibilities of both parties.</p></div>
              </div>
            </li>
            <li class="accordion-item">
              <h4 class="accordion-item__title-wrapper" role="heading" aria-level="3">
                <button class="accordion-item__click-target" aria-expanded="false"><span class="accordion-item__title">3 - Documentation</span></button>
              </h4>
              <div class="accordion-item__dropdown" role="region">
                <div class="accordion-item__description sqsrte-small"><p>We assist in gathering and preparing all necessary paperwork, filling out forms, and crafting a tailored submission letter. You will receive copies of all your documents.</p></div>
              </div>
            </li>
            <li class="accordion-item">
              <h4 class="accordion-item__title-wrapper" role="heading" aria-level="3">
                <button class="accordion-item__click-target" aria-expanded="false"><span class="accordion-item__title">4 - Application Submission</span></button>
              </h4>
              <div class="accordion-item__dropdown" role="region">
                <div class="accordion-item__description sqsrte-small"><p>We submit the application on your behalf as your authorized representative, or guide you through the submission process.</p></div>
              </div>
            </li>
            <li class="accordion-item">
              <h4 class="accordion-item__title-wrapper" role="heading" aria-level="3">
                <button class="accordion-item__click-target" aria-expanded="false"><span class="accordion-item__title">5 - Communication and Updates</span></button>
              </h4>
              <div class="accordion-item__dropdown" role="region">
                <div class="accordion-item__description sqsrte-small"><p>We keep you regularly updated on the progress and follow up with the immigration and refugee departments as needed.</p></div>
              </div>
            </li>
            <li class="accordion-item">
              <h4 class="accordion-item__title-wrapper" role="heading" aria-level="3">
                <button class="accordion-item__click-target" aria-expanded="false"><span class="accordion-item__title">6 - Decisions</span></button>
              </h4>
              <div class="accordion-item__dropdown" role="region">
                <div class="accordion-item__description sqsrte-small"><p>Once a decision is made, we promptly notify you and provide guidance on next steps.</p></div>
              </div>
            </li>
            <li class="accordion-item">
              <h4 class="accordion-item__title-wrapper" role="heading" aria-level="3">
                <button class="accordion-item__click-target" aria-expanded="false"><span class="accordion-item__title">7 - Post-Immigration Support</span></button>
              </h4>
              <div class="accordion-item__dropdown" role="region">
                <div class="accordion-item__description sqsrte-small"><p>Our support doesn't end with the approval. We provide ongoing assistance and resources after your immigration is approved.</p></div>
              </div>
            </li>
          </ul>
        </div>

        <div class="sqs-html-content" style="margin-top:2rem;">
          <h4 style="white-space:pre-wrap;"><strong>Why NAGHEDI?</strong></h4>
          <p class="sqsrte-large" style="white-space:pre-wrap;">NAGHEDI Immigration Inc. is a licensed and authorized migration firm based in Calgary, Alberta, specializing exclusively in permanent immigration, temporary work, study, or visitation to Canada, refugee programs, and citizenship applications.</p>
          <p class="sqsrte-large" style="white-space:pre-wrap;">At NAGHEDI, we believe that excellence in immigration services should be an accessible journey for everyone. We are committed to simplifying the immigration journey for our clients by offering expert guidance, personalized support, integrity, innovative solutions, empowerment, and community commitment, because:</p>
          <ul>
            <li><p class="sqsrte-large" style="white-space:pre-wrap;">we are seasoned professionals in immigration law and authorized to advocate for you at the Immigration and Refugee Board of Canada.</p></li>
            <li><p class="sqsrte-large" style="white-space:pre-wrap;">we are trained to think outside the box and tailor solutions for your unique immigration needs.</p></li>
            <li><p class="sqsrte-large" style="white-space:pre-wrap;">we operate with honesty and transparency and equip you with tools, resources, and knowledge for informed decisions.</p></li>
            <li><p class="sqsrte-large" style="white-space:pre-wrap;">we utilize cutting-edge methods to streamline processes.</p></li>
            <li><p class="sqsrte-large" style="white-space:pre-wrap;">we support diversity and inclusion.</p></li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section class="page-section full-bleed-section layout-engine-section background-width--full-bleed section-height--small content-width--wide horizontal-alignment--center vertical-alignment--bottom has-background bright-inverse" data-section-theme="bright-inverse">
    <div class="section-border">
      <div class="section-background">
        <img src="https://images.squarespace-cdn.com/content/v1/6593abc53b38c97cdaf5a338/1713931274438-IAV2L7GSJV787QWZNJ81/image-asset.jpeg" alt="" style="display:block;object-position:50% 50%;object-fit:cover;width:100%;height:100%;" />
        <div class="section-background-overlay" style="opacity: 0.01;"></div>
      </div>
    </div>
    <div class="content-wrapper">
      <div class="content">
        <div class="sqs-html-content">
          <h3 style="text-align:center;white-space:pre-wrap;"><strong>&ldquo;A person who makes an application must answer truthfully all questions put to them for the purpose of the examination&rdquo;</strong></h3>
        </div>
        <div class="sqs-html-content">
          <p style="text-align:right;white-space:pre-wrap;" class="sqsrte-large">&mdash; Immigration and Refugee Protection Act, SC 2001, c 27, s 16.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="page-section has-section-divider full-bleed-section layout-engine-section background-width--full-bleed section-height--custom content-width--wide horizontal-alignment--center vertical-alignment--middle bright-inverse" data-section-theme="bright-inverse">
    <div class="section-border"><div class="section-background"></div></div>
    <div class="content-wrapper">
      <div class="content">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:3rem;">

          <div>
            <div class="sqs-html-content">
              <h3 style="white-space:pre-wrap;">Permanent Residence</h3>
              <p style="white-space:pre-wrap;"><span class="sqsrte-text-color--accent">Permanent legal residency for immigration purposes.</span></p>
            </div>
            <ul class="accordion-items-container" style="margin-top:1rem;">
              <li class="accordion-item"><h4 class="accordion-item__title-wrapper" role="heading" aria-level="3"><button class="accordion-item__click-target" aria-expanded="false"><span class="accordion-item__title">Economic Class - Skilled Workers</span></button></h4><div class="accordion-item__dropdown" role="region"><div class="accordion-item__description sqsrte-small"><p>Individuals chosen based on their ability to contribute to the Canadian economy and establish economic stability.</p></div></div></li>
              <li class="accordion-item"><h4 class="accordion-item__title-wrapper" role="heading" aria-level="3"><button class="accordion-item__click-target" aria-expanded="false"><span class="accordion-item__title">Economic Class - Business</span></button></h4><div class="accordion-item__dropdown" role="region"><div class="accordion-item__description sqsrte-small"><p>For accomplished business professionals seeking new opportunities in Canada.</p></div></div></li>
              <li class="accordion-item"><h4 class="accordion-item__title-wrapper" role="heading" aria-level="3"><button class="accordion-item__click-target" aria-expanded="false"><span class="accordion-item__title">Family Classes</span></button></h4><div class="accordion-item__dropdown" role="region"><div class="accordion-item__description sqsrte-small"><p>Reunion of families in Canada through sponsorship programs.</p></div></div></li>
              <li class="accordion-item"><h4 class="accordion-item__title-wrapper" role="heading" aria-level="3"><button class="accordion-item__click-target" aria-expanded="false"><span class="accordion-item__title">Refugee Classes</span></button></h4><div class="accordion-item__dropdown" role="region"><div class="accordion-item__description sqsrte-small"><p>Refugee protection under Canada's obligations as a signatory to the 1951 Convention.</p></div></div></li>
              <li class="accordion-item"><h4 class="accordion-item__title-wrapper" role="heading" aria-level="3"><button class="accordion-item__click-target" aria-expanded="false"><span class="accordion-item__title">H &amp; C - Humanitarian and Compassionate Grounds</span></button></h4><div class="accordion-item__dropdown" role="region"><div class="accordion-item__description sqsrte-small"><p>The Minister may grant permanent resident status or exempt from certain rules for humanitarian and compassionate reasons.</p></div></div></li>
            </ul>
          </div>

          <div>
            <div class="sqs-html-content">
              <h3 style="white-space:pre-wrap;">Temporary Residence</h3>
              <p style="white-space:pre-wrap;">Short-term legally stays in Canada for study, work, or tourism purposes.</p>
            </div>
            <ul class="accordion-items-container" style="margin-top:1rem;">
              <li class="accordion-item"><h4 class="accordion-item__title-wrapper" role="heading" aria-level="3"><button class="accordion-item__click-target" aria-expanded="false"><span class="accordion-item__title">Visit Canada</span></button></h4><div class="accordion-item__dropdown" role="region"><div class="accordion-item__description sqsrte-small"><p>Temporary Resident Visa as proof for temporary entry to Canada.</p></div></div></li>
              <li class="accordion-item"><h4 class="accordion-item__title-wrapper" role="heading" aria-level="3"><button class="accordion-item__click-target" aria-expanded="false"><span class="accordion-item__title">Study in Canada</span></button></h4><div class="accordion-item__dropdown" role="region"><div class="accordion-item__description sqsrte-small"><p>Study Permit for Designated Learning Institutions (DLIs).</p></div></div></li>
              <li class="accordion-item"><h4 class="accordion-item__title-wrapper" role="heading" aria-level="3"><button class="accordion-item__click-target" aria-expanded="false"><span class="accordion-item__title">Work in Canada</span></button></h4><div class="accordion-item__dropdown" role="region"><div class="accordion-item__description sqsrte-small"><p>Employer-specific and Open Work Permits for working in Canada.</p></div></div></li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  </section>

  <section class="page-section full-bleed-section layout-engine-section background-width--full-bleed section-height--custom content-width--wide light-bold" data-section-theme="light-bold">
    <div class="section-border"><div class="section-background"></div></div>
    <div class="content-wrapper">
      <div class="content">
        <div class="sqs-html-content" style="margin-bottom:2rem;">
          <h3 style="text-align:center;white-space:pre-wrap;">More Support</h3>
        </div>
        <div class="user-items-list">
          <ul class="user-items-list-item-container user-items-list-simple" style="display:grid;grid-template-columns:repeat(4, 1fr);gap:20px;list-style:none;padding:0;">
            <li style="text-align:center;">
              <img src="https://images.squarespace-cdn.com/content/v1/6593abc53b38c97cdaf5a338/db1a5430-e066-4f6c-bdd6-60f2817ddd1c/1.jpg" alt="Citizenship" style="width:100%;aspect-ratio:1;object-fit:cover;border-radius:4px;" />
              <h4 style="margin-top:1rem;">Citizenship</h4>
              <p>To become a Canadian citizen, most applicants must meet certain residency requirements, demonstrate knowledge of Canada, pass a citizenship test, and take the Oath of Citizenship.</p>
              <a href="/other/citizenship/" class="sqs-block-button-element--medium sqs-button-element--primary sqs-block-button-element" style="margin-top:0.75rem;display:inline-block;">Learn more</a>
            </li>
            <li style="text-align:center;">
              <img src="https://images.squarespace-cdn.com/content/v1/6593abc53b38c97cdaf5a338/c4942cd9-5e96-4bf2-9d1a-26205495ab18/ID+-+Icon.png" alt="PR Card" style="width:100%;aspect-ratio:1;object-fit:cover;border-radius:4px;" />
              <h4 style="margin-top:1rem;">PR Card</h4>
              <p>The document indicating someone's permanent resident status is a permanent resident card.</p>
              <a href="/other/pr-card/" class="sqs-block-button-element--medium sqs-button-element--primary sqs-block-button-element" style="margin-top:0.75rem;display:inline-block;">Learn more</a>
            </li>
            <li style="text-align:center;">
              <img src="https://images.squarespace-cdn.com/content/v1/6593abc53b38c97cdaf5a338/94dcaae0-7821-4a68-af61-9f199cfb2623/1+%281%29.jpg" alt="Inadmissibility" style="width:100%;aspect-ratio:1;object-fit:cover;border-radius:4px;" />
              <h4 style="margin-top:1rem;">Inadmissibility</h4>
              <p>Being inadmissible means that certain individuals are not allowed to enter Canada, according to the country's immigration law.</p>
              <a href="/other/inadmissibility/" class="sqs-block-button-element--medium sqs-button-element--primary sqs-block-button-element" style="margin-top:0.75rem;display:inline-block;">Learn more</a>
            </li>
            <li style="text-align:center;">
              <img src="https://images.squarespace-cdn.com/content/v1/6593abc53b38c97cdaf5a338/0fb4354d-4bfb-4080-8b30-2ffef7759250/Appeal+-+Icon+-+Colour.png" alt="Appeals" style="width:100%;aspect-ratio:1;object-fit:cover;border-radius:4px;" />
              <h4 style="margin-top:1rem;">Appeals</h4>
              <p>In the immigration and refugee process in Canada, an appeal refers to the process by which an individual challenges a decision made by immigration authorities.</p>
              <a href="/other/appeals/" class="sqs-block-button-element--medium sqs-button-element--primary sqs-block-button-element" style="margin-top:0.75rem;display:inline-block;">Learn more</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section class="page-section full-bleed-section layout-engine-section background-width--full-bleed section-height--medium content-width--wide horizontal-alignment--center vertical-alignment--middle has-background black" data-section-theme="black">
    <div class="section-border">
      <div class="section-background">
        <img src="https://images.squarespace-cdn.com/content/v1/6593abc53b38c97cdaf5a338/699cd2b1-36ca-437d-b13a-cd7089e6f45f/image-asset.jpg" alt="" style="display:block;object-position:50% 50%;object-fit:cover;width:100%;height:100%;" />
        <div class="section-background-overlay" style="opacity: 0.15;"></div>
      </div>
    </div>
    <div class="content-wrapper">
      <div class="content">
        <div class="sqs-html-content">
          <h3 style="text-align:center;white-space:pre-wrap;color:white;"><span style="color:#584910;">Need more help?</span></h3>
          <h4 style="text-align:center;white-space:pre-wrap;color:white;">Our team is here to support you!</h4>
        </div>
        <div style="margin-top:1.5rem;display:flex;justify-content:center;gap:1rem;flex-wrap:wrap;">
          <a href="https://calendly.com/naghedi-booking/consultation-appointment" target="_blank" rel="noopener" class="sqs-block-button-element--medium sqs-button-element--primary sqs-block-button-element">Book Appointment</a>
          <a href="https://secure.officio.ca/qnr?id=4902&hash=d83cf1baabcbb257f7f99f624ba3b2f0" target="_blank" rel="noopener" class="sqs-block-button-element--medium sqs-button-element--primary sqs-block-button-element">Free Assessment Form</a>
        </div>
        <div class="sqs-html-content" style="margin-top:2rem;">
          <p class="sqsrte-large" style="white-space:pre-wrap;color:white;"><strong><em>Your Immigration Journey Is Unique,</em></strong></p>
          <p class="sqsrte-large" style="white-space:pre-wrap;color:white;"><strong><em>So Is Our Approach.</em></strong></p>
        </div>
      </div>
    </div>
  </section>

  <section class="page-section full-bleed-section layout-engine-section background-width--full-bleed content-width--wide" data-section-theme="white">
    <div class="section-border"><div class="section-background"></div></div>
    <div class="content-wrapper">
      <div class="content">

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:3rem;">
          <div>
            <div class="sqs-html-content">
              <h4 style="white-space:pre-wrap;"><strong>Have a Question?</strong></h4>
              <p style="white-space:pre-wrap;">Leave us a message. We will get in touch with you shortly!</p>
            </div>
            <div class="form-wrapper" style="margin-top:1.5rem;">
              <form autocomplete="on" method="POST" action="https://formspree.io/f/mzzzkvrz">
                <div class="field-list clear">
                  <fieldset class="form-item fields name required">
                    <legend class="title">Name <span class="required" aria-hidden="true">*</span></legend>
                    <div class="field first-name"><label class="caption"><span class="caption-text">First Name</span><input class="field-element field-control" name="First Name" type="text" maxlength="30" aria-required="true" /></label></div>
                    <div class="field last-name"><label class="caption"><span class="caption-text">Last Name</span><input class="field-element field-control" name="Last Name" type="text" maxlength="30" aria-required="true" /></label></div>
                  </fieldset>
                  <div class="form-item field email required">
                    <label class="title" for="email-field">Email <span class="required" aria-hidden="true">*</span></label>
                    <input class="field-element" id="email-field" name="email" type="email" autocomplete="email" aria-required="true" />
                    <label><input type="checkbox" name="signup" value="true" /> Sign up for news and updates</label>
                  </div>
                  <div class="form-item field text required">
                    <label class="title" for="subject-field">Subject <span class="required" aria-hidden="true">*</span></label>
                    <input class="field-element text" id="subject-field" type="text" name="Subject" aria-required="true" />
                  </div>
                  <div class="form-item field textarea required">
                    <label class="title" for="message-field">Message <span class="required" aria-hidden="true">*</span></label>
                    <textarea class="field-element" id="message-field" name="Message" aria-required="true"></textarea>
                  </div>
                </div>
                <div class="form-button-wrapper form-button-wrapper--align-left">
                  <input class="button sqs-system-button sqs-editable-button sqs-button-element--primary" type="submit" value="Submit" />
                </div>
              </form>
            </div>
          </div>

          <div>
            <div class="sqs-html-content">
              <h4 style="white-space:pre-wrap;"><strong>Useful Links</strong></h4>
              <p class="sqsrte-small" style="white-space:pre-wrap;"><a href="https://www.college-ic.ca/" target="_blank">The College of Immigration and Citizenship Consultants</a></p>
              <p class="sqsrte-small" style="white-space:pre-wrap;"><a href="https://register.college-ic.ca/Public-Register-EN/RCIC_Search.aspx" target="_blank">Find an authorized Immigration Consultant</a></p>
              <p class="sqsrte-small" style="white-space:pre-wrap;"><a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada.html" target="_blank">IRCC - Immigrate to Canada</a></p>
              <p class="sqsrte-small" style="white-space:pre-wrap;"><a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/provincial-nominees/works.html" target="_blank">IRCC - PNP</a></p>
              <p class="sqsrte-small" style="white-space:pre-wrap;"><a href="https://www.canada.ca/en/services/immigration-citizenship/helpcentre/glossary.html" target="_blank">IRCC - Glossary</a></p>
              <p class="sqsrte-small" style="white-space:pre-wrap;"><a href="https://www.irb-cisr.gc.ca/en/Pages/index.aspx" target="_blank">IRB</a></p>
              <p class="sqsrte-small" style="white-space:pre-wrap;"><a href="https://www.cbsa-asfc.gc.ca/menu-eng.html" target="_blank">CBSA</a></p>
              <p class="sqsrte-small" style="white-space:pre-wrap;"><a href="https://takeielts.britishcouncil.org/take-ielts/prepare" target="_blank">IELTS - Free resources</a></p>
              <p class="sqsrte-small" style="white-space:pre-wrap;"><a href="https://www.celpip.ca/prepare-for-celpip/free-resources/" target="_blank">CELPIP - Free resources</a></p>
              <p class="sqsrte-small" style="white-space:pre-wrap;"><a href="https://www.pearsonpte.com/pte-core/preparation" target="_blank">PTE Core - Free resources</a></p>
              <p class="sqsrte-small" style="white-space:pre-wrap;"><a href="https://ircc.canada.ca/english/immigrate/skilled/crs-tool.asp" target="_blank">CRS Calculator</a></p>
              <p class="sqsrte-small" style="white-space:pre-wrap;"><a href="https://www.jobbank.gc.ca/home" target="_blank">Job Bank</a></p>
              <p class="sqsrte-small" style="white-space:pre-wrap;"><a href="https://ircc.canada.ca/english/newcomers/services/index.asp" target="_blank">Newcomer Services</a></p>
            </div>

            <div class="sqs-html-content" style="margin-top:2rem;">
              <h4 style="white-space:pre-wrap;"><strong>SITE MAP</strong></h4>
              <p style="white-space:pre-wrap;"><a href="/temporary-residence/">Temporary Residence</a></p>
              <p style="white-space:pre-wrap;"><a href="/permanent-residence/">Permanent Residence</a></p>
              <p style="white-space:pre-wrap;"><a href="/other/">Other</a></p>
              <p class="sqsrte-small" style="white-space:pre-wrap;"><a href="/our-team/">Our Team</a></p>
              <p class="sqsrte-small" style="white-space:pre-wrap;"><a href="https://calendly.com/naghedi-booking/consultation-appointment" target="_blank">Book Appointment</a></p>
              <p class="sqsrte-small" style="white-space:pre-wrap;"><a href="https://secure.officio.ca/qnr?id=4902&hash=d83cf1baabcbb257f7f99f624ba3b2f0" target="_blank">Free Assessment Form</a></p>
            </div>

            <div class="sqs-html-content" style="margin-top:2rem;">
              <h4 style="white-space:pre-wrap;"><strong>FOLLOW</strong></h4>
              <p class="sqsrte-small" style="white-space:pre-wrap;"><a href="https://www.linkedin.com/company/naghedi-immigration/" target="_blank">LinkedIn</a></p>
              <p style="white-space:pre-wrap;">Facebook</p>
              <p style="white-space:pre-wrap;">Instagram</p>
            </div>
          </div>
        </div>

        <div class="sqs-html-content" style="margin-top:2rem;">
          <p style="white-space:pre-wrap;">Calgary, Alberta, Canada</p>
          <p style="white-space:pre-wrap;">Call us at: +1 (403) 879 - 7010</p>
          <p style="white-space:pre-wrap;">Email us at: hello@naghedi-immigration.ca</p>
          <p style="white-space:pre-wrap;">Monday - Friday 9:00 AM to 5:00 PM - Mountain Standard Time (MST)</p>
          <p style="white-space:pre-wrap;">We speak English, Persian (Farsi/Dari), German, Arabic, French, Bulgarian</p>
          <p style="white-space:pre-wrap;">NAGHEDI Immigration Inc.</p>
        </div>

        <div style="margin-top:2rem;display:flex;gap:2rem;align-items:center;">
          <img src="https://images.squarespace-cdn.com/content/v1/6593abc53b38c97cdaf5a338/618c86e2-2fef-4c4e-8550-e807bbd2d85a/Web+-+College+-+RCIC-IRB_EN_HORZ_CLR_POS.png" alt="RCIC-IRB" style="max-height:60px;" />
          <img src="https://images.squarespace-cdn.com/content/v1/6593abc53b38c97cdaf5a338/26fea104-7127-4194-83a9-f9682124d95e/Official+-+CAPIC-Logo+2-TM+600px.png" alt="CAPIC" style="max-height:60px;" />
        </div>

      </div>
    </div>
  </section>
`;
