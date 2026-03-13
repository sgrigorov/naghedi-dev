export default function Header() {
  return (
    <header
      id="header"
      className="black header theme-col--primary"
      data-section-theme="black"
      dangerouslySetInnerHTML={{ __html: HEADER_HTML }}
    />
  );
}

const HEADER_HTML = `
  <a href="/#page" class="header-skip-link sqs-button-element--primary">Skip to Content</a>
  <div class="header-border" data-header-style="dynamic" style="border-width: 0px 0px 4px 0px !important;"></div>
  <div class="header-inner container--fluid header-mobile-layout-logo-left-nav-right header-layout-nav-right" style="padding: 0 0 4px 0;">
    <div class="header-background theme-bg--primary"></div>
    <div class="header-display-desktop">
      <div class="header-title-nav-wrapper">
        <div class="header-title header-title--use-mobile-logo">
          <div class="header-title-logo">
            <a href="/">
              <img src="https://images.squarespace-cdn.com/content/v1/6593abc53b38c97cdaf5a338/08d9ff45-fd7a-4d60-87e0-4ae2fc7fb330/YESNOARTBOARD.png?format=1500w" alt="NAGHEDI Immigration Inc" width="146" style="max-height: 146px;">
            </a>
          </div>
          <div class="header-mobile-logo">
            <a href="/">
              <img src="https://images.squarespace-cdn.com/content/v1/6593abc53b38c97cdaf5a338/08d9ff45-fd7a-4d60-87e0-4ae2fc7fb330/YESNOARTBOARD.png?format=1500w" alt="NAGHEDI Immigration Inc" style="max-height: 89px;">
            </a>
          </div>
        </div>
        <div class="header-nav">
          <div class="header-nav-wrapper">
            <nav class="header-nav-list">
              <div class="header-nav-item header-nav-item--collection header-nav-item--active header-nav-item--homepage">
                <a href="/" aria-current="page">Home</a>
              </div>
              <div class="header-nav-item header-nav-item--collection">
                <a href="/our-team/">Our Team</a>
              </div>
              <div class="header-nav-item header-nav-item--folder">
                <a class="header-nav-folder-title" href="/services/">Services</a>
                <div class="header-nav-folder-content">
                  <div class="header-nav-folder-item">
                    <a href="/temporary-residence/"><span class="header-nav-folder-item-content">Temporary Residence</span></a>
                  </div>
                  <div class="header-nav-folder-item">
                    <a href="/permanent-residence/"><span class="header-nav-folder-item-content">Permanent Residence</span></a>
                  </div>
                  <div class="header-nav-folder-item">
                    <a href="/other/"><span class="header-nav-folder-item-content">Other</span></a>
                  </div>
                </div>
              </div>
              <div class="header-nav-item header-nav-item--external">
                <a href="https://secure.officio.ca/qnr?id=4902&hash=d83cf1baabcbb257f7f99f624ba3b2f0" target="_blank" rel="noopener">Free Assessment Form</a>
              </div>
              <div class="header-nav-item header-nav-item--external">
                <a href="https://calendly.com/naghedi-booking/consultation-appointment" target="_blank" rel="noopener">Book Appointment</a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="header-burger">
    <button class="header-burger-btn burger" id="mobile-menu-btn" aria-label="Toggle menu" aria-expanded="false" type="button">
      <div class="burger-inner header-menu-icon-doubleLineHamburger">
        <div class="top-bun"></div>
        <div class="patty"></div>
        <div class="bottom-bun"></div>
      </div>
    </button>
  </div>
`;
