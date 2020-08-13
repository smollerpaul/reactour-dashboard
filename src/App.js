import React from "react";
import { Navigation } from "@instructure/ui-navigation";
import { Avatar } from "@instructure/ui-avatar";
import Tour from "reactour";
import {
  IconDashboardLine,
  IconAdminLine,
  IconCoursesLine,
  IconCalendarMonthLine,
  IconQuestionLine,
  IconCommonsLine,
} from "@instructure/ui-icons";
import { ScreenReaderContent } from "@instructure/ui-a11y-content";
import { Img } from "@instructure/ui-img";
import "@instructure/canvas-theme";
import "./App.css";
import logo from "./logo.svg";
import { View } from "@instructure/ui-view";
import { DrawerLayout } from "@instructure/ui-drawer-layout";
import { CloseButton } from "@instructure/ui-buttons";
import { Text } from "@instructure/ui-text";

class App extends React.Component {
  state = {
    endOpen: false,
    startOpen: false,
    isTourOpen: true,
    classAbc: 'helper',
  };

  closeTour = () => {
    this.setState({ isTourOpen: false, endOpen: false });
  };

  render() {
    const accentColor = "#5cb7b7";

    return (
      <div style={{ height: "100vh" }}>
        <DrawerLayout>
          <DrawerLayout.Tray
            open={this.state.endOpen}
            placement="start"
            label="Drawer Tray End Example"
            left="check-margin"
            onDismiss={() => {
              this.setState({ endOpen: false });
            }}
          >
            <View
              as="div"
              maxWidth="500px"
              textAlign="center"
              margin="large auto"
              padding="large"
            >
              <CloseButton
                placement="end"
                offset="small"
                onClick={() => {
                  this.setState({ endOpen: false });
                }}
                screenReaderLabel="Close"
              />
              <Text as="div" size="x-small">
                Hello from end tray with a good amount of content as well
              </Text>
            </View>
          </DrawerLayout.Tray>
          <Navigation
            label="Main navigation"
            toggleLabel={{
              expandedLabel: "Minimize Navigation",
              minimizedLabel: "Expand Navigation",
            }}
          >
            <Navigation.Item
              icon={<Img src={logo} constrain="cover" />}
              label={<ScreenReaderContent>Home</ScreenReaderContent>}
              href="#"
            />
            <Navigation.Item
              icon={<Avatar name="Ziggy Marley" size="x-small" />}
              label="Account"
              data-tut="reactour__logo"
              onClick={() => {
                this.setState({ endOpen: !this.state.endOpen });
              }}
            />
            <Navigation.Item icon={<IconAdminLine />} label="Admin" href="#" />
            <Navigation.Item
              selected={true}
              icon={<IconDashboardLine />}
              label="Dashboard"
              href="#"
              data-tut="reactour__iso"
            />
            <Navigation.Item
              icon={<IconCoursesLine />}
              label="Courses"
              href="#"
              data-tut="reactour__copy"
            />
            <Navigation.Item
              icon={<IconCalendarMonthLine />}
              label="Calendar"
              href="#"
            />
            <Navigation.Item
              icon={<IconCommonsLine />}
              label="Commons"
              href="#"
            />
            <Navigation.Item
              icon={<IconQuestionLine />}
              label="Help"
              href="#"
              data-tut="reactour__state"
            />
          </Navigation>
        </DrawerLayout>
        <Tour
          onRequestClose={this.closeTour}
          steps={tourConfig}
          isOpen={this.state.isTourOpen}
          maskClassName="mask"
          className={this.state.classAbc}
          rounded={5}
          getCurrentStep={curr => {
            if (curr === 1) {
              setTimeout(() => {
                this.setState({ endOpen: true, classAbc: "showdialog" })
              }, 0);
            }
          }}
        />
      </div>
    );
  }
}

const tourConfig = [
  {
    selector: '[data-tut="reactour__iso"]',
    content: () => (
      <div>
        <div role="none">
          <div>
            <section>
              <h3 className="fOyUs_bGBk blnAQ_bGBk blnAQ_dnfM blnAQ_drOs">
                Hello, Thai Chuong!
              </h3>
              <p
                wrap="normal"
                letterSpacing="normal"
                className="enRcg_bGBk enRcg_ycrn enRcg_eQnG"
              >
                We know getting your courses online quickly during this time is
                priority. This quick tour will show you how to:
              </p>
              <ol>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://community.canvaslms.com/docs/DOC-13111-4152719738"
                  >
                    Set up your Notifications
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://community.canvaslms.com/docs/DOC-18584-set-up-your-canvas-course-in-30-minutes-or-less"
                  >
                    Get your Content online
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://community.canvaslms.com/docs/DOC-12687-41524130"
                    className="fOyUs_bGBk fbyHH_bGBk fbyHH_vIby"
                  >
                    Learn more about Video Conferencing
                  </a>
                  <ul>
                    <li>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://community.canvaslms.com/docs/DOC-23893"
                        className="fOyUs_bGBk fbyHH_bGBk fbyHH_vIby"
                      >
                        Zoom
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://community.canvaslms.com/docs/DOC-18570-google-hangouts-meet-lti"
                        className="fOyUs_bGBk fbyHH_bGBk fbyHH_vIby"
                      >
                        Google Meet
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.youtube.com/watch?v=zUXXeiRCFfY"
                        className="fOyUs_bGBk fbyHH_bGBk fbyHH_vIby"
                      >
                        Microsoft Teams
                      </a>
                    </li>
                  </ul>
                </li>
              </ol>
              <div className="tour-star-image" aria-hidden="true">
                <img
                  src="https://du11hjcvx0uqb.cloudfront.net/br/dist/webpack-production/cafb6a6790be5cd5a6c8e14a0c8eb229.svg"
                  alt="star"
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    )
  },
  {
    selector: '[data-tut="reactour__logo"]',
    content: () => (
      <div class="ascas">
        <div role="none">
          <div>
            <span >
              <span>
                <button
                  cursor="pointer"
                  type="button"
                  tabIndex={0}
                  className="fOyUs_bGBk fOyUs_fKyb fOyUs_cuDs fOyUs_cBHs fOyUs_eWbJ fOyUs_fmDy fOyUs_eeJl fOyUs_cBtr fOyUs_fuTR fOyUs_cnfU fQfxa_bGBk"
                  style={{
                    margin: 0,
                    padding: 0,
                    borderRadius: "0.25rem",
                    borderWidth: 0,
                    width: "auto",
                    cursor: "pointer",
                  }}
                ></button>
              </span>
            </span>
            <section>
              <h3 className="fOyUs_bGBk blnAQ_bGBk blnAQ_dnfM blnAQ_drOs">
                Set Up Your Notifications
              </h3>
              <span className="fdaJD_bGBk">
                Click on the account navigation button to access notification
                preferences.
              </span>
              <p
                wrap="normal"
                letterSpacing="normal"
                className="enRcg_bGBk enRcg_ycrn enRcg_eQnG"
              >
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://community.canvaslms.com/docs/DOC-13111-4152719738"
                  className="fOyUs_bGBk fbyHH_bGBk fbyHH_vIby"
                >
                  Don't miss notifications from your students.
                </a>
              </p>
              <iframe
                title="Canvas Notifications Tutorial Video"
                src="https://player.vimeo.com/video/75514816?title=0&byline=0&portrait=0"
                width="100%"
                height="277px"
                frameBorder={0}
                allow="autoplay; fullscreen"
                allowFullScreen
                style={{ marginTop: "1rem" }}
              />
            </section>
          </div>
        </div>
      </div>
    )
  },
  {
    selector: '[data-tut="reactour__copy"]',
    content: () => (
      <div
        tabIndex={-1}
        className="reactour__helper reactour__helper--is-open css-1b4tx0c"
        role="dialog"
      >
        <div role="none">
          <div>
            <section>
              <h3 className="fOyUs_bGBk blnAQ_bGBk blnAQ_dnfM blnAQ_drOs">
                Get Your Content Online Quickly
              </h3>
              <span className="fdaJD_bGBk">
                Click on the courses navigation button to access your courses.
              </span>
              <p
                wrap="normal"
                letterSpacing="normal"
                className="enRcg_bGBk enRcg_ycrn enRcg_eQnG"
              >
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://community.canvaslms.com/docs/DOC-18584-set-up-your-canvas-course-in-30-minutes-or-less"
                  className="fOyUs_bGBk fbyHH_bGBk fbyHH_vIby"
                >
                  Set up your Canvas course in 30 minutes or less.
                </a>
              </p>
              <iframe
                title="Canvas Course Tutorial Video"
                src="https://player.vimeo.com/video/69658934?title=0&byline=0&portrait=0"
                width="100%"
                height="277px"
                frameBorder={0}
                allow="autoplay; fullscreen"
                allowFullScreen
                style={{ marginTop: "1rem" }}
              />
            </section>
          </div>
        </div>
      </div>
    ),
  },
  {
    selector: '[data-tut="reactour__state"]',
    content: () => (
      <div
        tabIndex={-1}
        className="reactour__helper reactour__helper--is-open css-1b4tx0c"
        role="dialog"
      >
        <div role="none">
          <div>
            <section>
              <h3 className="fOyUs_bGBk blnAQ_bGBk blnAQ_dnfM blnAQ_drOs">
                Learn more about Video Conferencing
              </h3>
              <div className="fOyUs_bGBk" style={{ margin: "0.75rem 0px 0px" }}>
                <ul>
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://community.canvaslms.com/docs/DOC-23893"
                      className="fOyUs_bGBk fbyHH_bGBk fbyHH_vIby"
                    >
                      Zoom
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://community.canvaslms.com/docs/DOC-18570-google-hangouts-meet-lti"
                      className="fOyUs_bGBk fbyHH_bGBk fbyHH_vIby"
                    >
                      Google Meet
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.youtube.com/watch?v=zUXXeiRCFfY"
                      className="fOyUs_bGBk fbyHH_bGBk fbyHH_vIby"
                    >
                      Microsoft Teams
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://community.canvaslms.com/docs/DOC-12687-41524130"
                      className="fOyUs_bGBk fbyHH_bGBk fbyHH_vIby"
                    >
                      More Video Conferencing Tools
                    </a>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    ),
  },
];

export default App;