import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";

const Dashboard = () => {
  return (
    <div className="w-full relative bg-gray-100 overflow-hidden flex flex-row items-start justify-start pt-0 px-0 pb-[114px] box-border leading-[normal] tracking-[normal] text-left text-base text-darkslategray-200 font-qanelas-soft mq1000:pl-5 mq1000:pr-5 mq1000:box-border">
      <div className="w-[272px] bg-floralwhite box-border flex flex-col items-start justify-start pt-6 pb-[250px] pr-6 pl-[47px] gap-[48px] border-r-[1px] border-solid border-gainsboro-100 mq1000:hidden mq1000:pt-5 mq1000:pb-[162px] mq1000:box-border mq450:gap-[24px] mq450:pl-5 mq450:pb-[105px] mq450:box-border">
        <div className="w-[178.2px] flex flex-row items-start justify-start gap-[9px]">
          <img
            className="h-12 w-[48.4px] relative object-cover"
            loading="lazy"
            alt=""
            src="/group-1@2x.png"
          />
          <div className="flex-1 flex flex-col items-start justify-start pt-[15.6px] px-0 pb-0">
            <img
              className="self-stretch h-[16.8px] relative max-w-full overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/climate-angels.svg"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
          <div className="self-stretch h-12 hidden flex-row items-center justify-start py-3 pr-1 pl-4 box-border gap-[8px]">
            <img
              className="h-6 w-6 relative min-h-[24px]"
              alt=""
              src="/component-12.svg"
            />
            <div className="self-stretch flex-1 relative leading-[24px] font-medium">
              Home
            </div>
            <img
              className="h-6 w-6 relative object-contain hidden min-h-[24px]"
              alt=""
              src="/arrow-back-ios-new@2x.png"
            />
            <img
              className="h-6 w-6 relative hidden min-h-[24px]"
              alt=""
              src="/expand-more.svg"
            />
          </div>
          <div className="self-stretch rounded-lg bg-darkslategray-200 flex flex-row items-start justify-start py-3 pr-1 pl-4 gap-[8px] top-[0] z-[99] sticky text-floralwhite">
            <img
              className="h-6 w-6 relative min-h-[24px]"
              alt=""
              src="/component-12-1.svg"
            />
            <div className="flex-1 relative leading-[24px] font-medium">
              Portfolio
            </div>
            <img
              className="h-6 w-6 relative object-contain hidden min-h-[24px]"
              alt=""
              src="/arrow-back-ios-new@2x.png"
            />
            <img
              className="h-6 w-6 relative hidden min-h-[24px]"
              alt=""
              src="/expand-more1.svg"
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-3 pr-1 pl-4 gap-[8px]">
            <img
              className="h-6 w-6 relative min-h-[24px]"
              alt=""
              src="/component-12-2.svg"
            />
            <div className="flex-1 relative leading-[24px] font-medium ">
              Invest
            </div>
            <img
              className="h-6 w-6 relative object-contain hidden min-h-[24px]"
              alt=""
              src="/arrow-back-ios-new@2x.png"
            />
            <img
              className="h-6 w-6 relative min-h-[24px]"
              alt=""
              src="/expand-more.svg"
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-3 pr-1 pl-4 gap-[8px]">
            <img
              className="h-6 w-6 relative min-h-[24px]"
              alt=""
              src="/component-12-3.svg"
            />
            <div className="flex-1 relative leading-[24px] font-medium">
              Syndicates
            </div>
            <img
              className="h-6 w-6 relative object-contain hidden min-h-[24px]"
              alt=""
              src="/arrow-back-ios-new@2x.png"
            />
            <img
              className="h-6 w-6 relative hidden min-h-[24px]"
              alt=""
              src="/expand-more.svg"
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-3 pr-1 pl-4 gap-[8px]">
            <img
              className="h-6 w-6 relative min-h-[24px]"
              alt=""
              src="/component-12-4.svg"
            />
            <div className="flex-1 relative leading-[24px] font-medium">
              Ledger
            </div>
            <img
              className="h-6 w-6 relative object-contain hidden min-h-[24px]"
              alt=""
              src="/arrow-back-ios-new@2x.png"
            />
            <img
              className="h-6 w-6 relative hidden min-h-[24px]"
              alt=""
              src="/expand-more.svg"
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-3 pr-1 pl-4 gap-[8px]">
            <img
              className="h-6 w-6 relative min-h-[24px]"
              alt=""
              src="/component-12-5.svg"
            />
            <div className="flex-1 relative leading-[24px] font-medium">
              Messages
            </div>
            <img
              className="h-6 w-6 relative object-contain hidden min-h-[24px]"
              alt=""
              src="/arrow-back-ios-new@2x.png"
            />
            <img
              className="h-6 w-6 relative hidden min-h-[24px]"
              alt=""
              src="/expand-more.svg"
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-3 pr-1 pl-4 gap-[8px]">
            <img
              className="h-6 w-6 relative min-h-[24px]"
              alt=""
              src="/component-12-6.svg"
            />
            <div className="flex-1 relative leading-[24px] font-medium">
              Events
            </div>
            <img
              className="h-6 w-6 relative object-contain hidden min-h-[24px]"
              alt=""
              src="/arrow-back-ios-new@2x.png"
            />
            <img
              className="h-6 w-6 relative hidden min-h-[24px]"
              alt=""
              src="/expand-more.svg"
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-3 pr-1 pl-4 gap-[8px]">
            <img
              className="h-6 w-6 relative min-h-[24px]"
              alt=""
              src="/component-12-7.svg"
            />
            <div className="flex-1 relative leading-[24px] font-medium">{`News & Blogs`}</div>
            <img
              className="h-6 w-6 relative object-contain hidden min-h-[24px]"
              alt=""
              src="/arrow-back-ios-new@2x.png"
            />
            <img
              className="h-6 w-6 relative hidden min-h-[24px]"
              alt=""
              src="/expand-more.svg"
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-3 pr-1 pl-4 gap-[8px]">
            <img
              className="h-6 w-6 relative min-h-[24px]"
              alt=""
              src="/component-12-8.svg"
            />
            <div className="flex-1 relative leading-[24px] font-medium">{`Help & Support`}</div>
            <img
              className="h-6 w-6 relative object-contain hidden min-h-[24px]"
              alt=""
              src="/arrow-back-ios-new@2x.png"
            />
            <img
              className="h-6 w-6 relative hidden min-h-[24px]"
              alt=""
              src="/expand-more.svg"
            />
          </div>
        </div>
      </div>
      <main className="flex-1 flex flex-col items-start justify-start gap-[32px] max-w-[calc(100%_-_272px)] mq750:gap-[16px] mq1000:max-w-full">
        <FrameComponent1 />
        <section className="w-[1152px] flex flex-row items-start justify-start py-0 px-8 box-border max-w-full text-left text-[32px] text-darkslategray-200 font-montserrat">
          <div className="flex-1 flex flex-col items-start justify-start gap-[24px] max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-2 box-border gap-[24px] max-w-full shrink-0 text-gray-500">
              <h1 className="m-0 w-[744px] relative text-inherit leading-[40px] font-semibold font-inherit inline-block max-w-full mq1000:text-[26px] mq1000:leading-[32px] mq450:text-lgi mq450:leading-[24px]">
                My portfolio
              </h1>
              <div className="self-stretch h-[37px] box-border overflow-x-auto shrink-0 flex flex-row items-start justify-start py-0 pr-[751px] pl-0 gap-[25px] text-base text-darkslategray-200 font-qanelas-soft border-b-[1px] border-solid border-silver mq750:pr-[187px] mq750:box-border mq450:pr-5 mq450:box-border mq1100:pr-[375px] mq1100:box-border">
                <div className="flex flex-col items-start justify-start pt-0 px-0 pb-2 gap-[4px]">
                  <div className="flex flex-row items-start justify-start py-0.5 px-2">
                    <div className="relative leading-[24px] font-medium inline-block min-w-[79px]">
                      Dashboard
                    </div>
                  </div>
                  <img
                    className="w-[39px] h-0 relative hidden"
                    alt=""
                    src="/line-1.svg"
                  />
                </div>
                <div className="w-[121px] shrink-0 flex flex-col items-start justify-start gap-[6px]">
                  <div className="flex flex-row items-start justify-start py-0.5 px-1.5">
                    <div className="relative leading-[24px] font-semibold inline-block min-w-[108px]">{`MIS & Updates`}</div>
                  </div>
                  <img
                    className="self-stretch h-0.5 relative max-w-full overflow-hidden shrink-0"
                    alt=""
                    src="/line-1-stroke.svg"
                  />
                </div>
                <div className="flex flex-col items-start justify-start pt-0 px-0 pb-2 gap-[4px]">
                  <div className="flex flex-row items-start justify-start py-0.5 px-2">
                    <div className="relative leading-[24px] font-medium inline-block min-w-[55px]">
                      Insights
                    </div>
                  </div>
                  <img
                    className="w-[39px] h-0 relative hidden"
                    alt=""
                    src="/line-11.svg"
                  />
                </div>
              </div>
            </div>
            <div className="w-[744px] flex flex-col items-start justify-start gap-[17px] max-w-full shrink-0 text-[24px] text-gray-400">
              <div className="w-[696px] flex flex-col items-start justify-start gap-[23px] max-w-full shrink-0">
                <div className="w-[437px] h-12 flex flex-row items-start justify-start gap-[16px] max-w-full">
                  <div className="h-[50px] flex-1 rounded-lg bg-white box-border flex flex-row items-center justify-start py-3 pr-2.5 pl-4 max-w-[calc(100%_-_117px)] border-[1px] border-solid border-silver">
                    <div className="flex-1 flex flex-row items-center justify-start gap-[8px]">
                      <img
                        className="h-6 w-6 relative min-h-[24px]"
                        alt=""
                        src="/search.svg"
                      />
                      <input
                        className="w-[calc(100%_-_24px)] [border:none] [outline:none] font-manrope text-base bg-[transparent] h-6 flex-1 relative leading-[24px] text-darkgray text-left flex items-center min-w-[157px] p-0"
                        placeholder="Search by company name..."
                        type="text"
                      />
                    </div>
                  </div>
                  <button className="cursor-pointer py-2.5 px-[15px] bg-white rounded-lg flex flex-row items-center justify-start gap-[8px] border-[1px] border-solid border-silver hover:bg-gainsboro-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-200">
                    <img
                      className="h-6 w-6 relative min-h-[24px]"
                      alt=""
                      src="/filter-list.svg"
                    />
                    <div className="relative text-base leading-[24px] font-manrope text-gray-300 text-center inline-block min-w-[37px]">
                      Filter
                    </div>
                  </button>
                </div>
                <h3 className="m-0 self-stretch relative text-inherit leading-[32px] font-semibold font-inherit mq450:text-lgi mq450:leading-[26px]">
                  Activity feed
                </h3>
              </div>
              <div className="self-stretch rounded-xl bg-white box-border overflow-hidden flex flex-col items-start justify-start py-6 pr-[23px] pl-6 gap-[15.7px] max-w-full shrink-0 text-base text-darkslategray-200 font-qanelas-soft border-[1px] border-solid border-silver mq1000:pt-5 mq1000:pb-5 mq1000:box-border">
                <FrameComponent investorUpdate="Investor update" />
                <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gainsboro-100" />
                <div className="self-stretch relative leading-[20px]">
                  <p className="m-0">
                    Lorem ipsum dolor sit amet consectetur. Nulla urna quis
                    ipsum lectus adipiscing. Egestas et mi tortor pretium
                    convallis. Vel eu tincidunt commodo quisque nunc sit ac
                    vulputate orci. Tincidunt vel vel ultricies enim integer ac
                    blandit. Vestibulum maecenas cursus feugiat vestibulum
                    congue. Turpis sit enim tincidunt blandit. Pellentesque
                    porttitor scelerisque ut risus facilisis dignissim in amet
                    hendrerit. Porttitor risus netus et in. Lacus tincidunt
                    dignissim risus quam diam vivamus proin volutpat.
                  </p>
                  <p className="m-0">Massa ut et sed mattis tristique.</p>
                  <p className="m-0">
                    Pulvinar vehicula tellus ut egestas leo sed. Malesuada
                    auctor vestibulum luctus maecenas maecenas aliquam tellus
                    viverra.
                  </p>
                </div>
                <img
                  className="w-[450px] relative max-h-full object-cover max-w-full"
                  loading="lazy"
                  alt=""
                  src="/unsplashshr-xn8s8qu@2x.png"
                />
                <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                  <div className="self-stretch relative leading-[20px]">
                    Pulvinar vehicula tellus ut egestas leo sed. Malesuada
                    auctor vestibulum luctus maecenas maecenas aliquam tellus
                    viverra.
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-end text-center text-sm text-seagreen-200">
                    <div className="relative leading-[24px] font-semibold inline-block min-w-[78px]">
                      READ MORE
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gainsboro-100" />
                <div className="relative text-sm leading-[20px] inline-block min-w-[68px]">
                  4 days ago
                </div>
              </div>
            </div>
            <div className="w-[746px] rounded-xl bg-white box-border overflow-hidden flex flex-col items-start justify-start py-6 pr-[22px] pl-[23px] gap-[8px] max-w-full shrink-0 text-sm font-qanelas-soft border-[1px] border-solid border-silver mq450:pt-5 mq450:pb-5 mq450:box-border">
              <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-2 box-border max-w-full">
                <FrameComponent
                  investorUpdate="Feature launch"
                  propAlignSelf="unset"
                  propFlex="1"
                  propMinWidth="90px"
                />
              </div>
              <div className="self-stretch h-2 flex flex-row items-start justify-start pt-0 px-0 pb-[7px] box-border max-w-full">
                <div className="self-stretch flex-1 relative box-border max-w-full border-t-[1px] border-solid border-gainsboro-100" />
              </div>
              <div className="self-stretch relative text-base leading-[20px]">
                <p className="m-0">
                  Lorem ipsum dolor sit amet consectetur. Nulla urna quis ipsum
                  lectus adipiscing. Egestas et mi tortor pretium convallis. Vel
                  eu tincidunt commodo quisque nunc sit ac vulputate orci.
                  Tincidunt vel vel ultricies enim integer ac blandit.
                  Vestibulum maecenas cursus feugiat vestibulum congue. Turpis
                  sit enim tincidunt blandit. Pellentesque porttitor scelerisque
                  ut risus facilisis dignissim in amet hendrerit. Porttitor
                  risus netus et in. Lacus tincidunt dignissim risus quam diam
                  vivamus proin volutpat.
                </p>
                <p className="m-0">Massa ut et sed mattis tristique.</p>
                <p className="m-0">
                  Pulvinar vehicula tellus ut egestas leo sed. Malesuada auctor
                  vestibulum luctus maecenas maecenas aliquam tellus viverra.
                </p>
              </div>
              <div className="self-stretch flex flex-row items-start justify-end pt-0 px-[3px] pb-2 text-center text-seagreen-200">
                <div className="relative leading-[24px] font-semibold inline-block min-w-[78px]">
                  READ MORE
                </div>
              </div>
              <div className="self-stretch h-2 flex flex-row items-start justify-start pt-0 px-0 pb-[7px] box-border max-w-full">
                <div className="self-stretch flex-1 relative box-border max-w-full border-t-[1px] border-solid border-gainsboro-100" />
              </div>
              <div className="relative leading-[20px] inline-block min-w-[75px]">
                15-03-2024
              </div>
            </div>
            <div className="w-[746px] rounded-xl bg-white box-border overflow-hidden flex flex-col items-start justify-start py-6 pr-[23px] pl-6 gap-[15px] max-w-full shrink-0 text-lg font-qanelas-soft border-[1px] border-solid border-silver mq750:pt-5 mq750:pb-5 mq750:box-border">
              <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[4px] max-w-full">
                <button className="cursor-pointer [border:none] py-1 px-4 bg-whitesmoke-100 w-[181px] rounded-3xl flex flex-row items-start justify-start box-border whitespace-nowrap hover:bg-lightgray">
                  <div className="flex-1 relative text-sm leading-[16px] font-medium font-qanelas-soft text-darkslategray-200 text-left">
                    Fund investment update
                  </div>
                </button>
                <div className="flex-1 flex flex-col items-start justify-start min-w-[314px] max-w-full">
                  <button className="cursor-pointer [border:none] py-1 px-4 bg-whitesmoke-100 rounded-3xl flex flex-row items-start justify-start gap-[8px]">
                    <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                      <div className="w-2 h-2 relative rounded-[50%] bg-seagreen-200" />
                    </div>
                    <div className="relative text-sm leading-[16px] font-semibold font-qanelas-soft text-seagreen-200 text-left inline-block min-w-[56px]">
                      Live deal
                    </div>
                  </button>
                </div>
                <img
                  className="h-6 w-6 relative min-h-[24px]"
                  alt=""
                  src="/more-vert.svg"
                />
              </div>
              <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[12px] max-w-full text-gray-400 font-montserrat">
                <img
                  className="h-16 w-16 relative rounded-29xl overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/frame-159825@2x.png"
                />
                <div className="flex-1 flex flex-col items-start justify-start gap-[4px] min-w-[403px] max-w-full mq750:min-w-full">
                  <div className="self-stretch relative leading-[24px] font-semibold">
                    Ace Green Recycling
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[408px] pl-0 gap-[4px] text-sm text-darkslategray-200 mq750:flex-wrap mq750:pr-[204px] mq750:box-border mq450:pr-5 mq450:box-border">
                    <div className="relative leading-[20px] inline-block min-w-[124px]">
                      Battery Recycling
                    </div>
                    <div className="relative leading-[20px] inline-block min-w-[5px] mq750:w-full mq750:h-[5px]">
                      |
                    </div>
                    <div className="relative leading-[20px] inline-block min-w-[75px]">
                      Bengaluru
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gainsboro-100" />
              <div className="self-stretch relative text-base leading-[20px]">{`Lorem ipsum dolor sit amet consectetur. Nulla urna quis ipsum lectus adipiscing. Egestas et mi tortor pretium convallis. Vel eu tincidunt commodo quisque nunc sit ac vulputate orci. Tincidunt vel vel ultricies enim integer ac blandit. Vestibulum maecenas cursus feugiat vestibulum congue. Turpis sit enim tincidunt blandit. Pellentesque porttitor scelerisque ut risus facilisis dignissim in amet hendrerit. Porttitor risus netus et in. `}</div>
              <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[9px] box-border max-w-full">
                <img
                  className="h-[269px] flex-1 relative max-w-full overflow-hidden object-cover"
                  loading="lazy"
                  alt=""
                  src="/unsplashwwqrpsnbpq4@2x.png"
                />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[15.5px] text-sm">
                <button className="cursor-pointer py-2.5 px-[34px] bg-[transparent] w-40 rounded-lg box-border flex flex-row items-start justify-start whitespace-nowrap border-[1px] border-solid border-seagreen-200 hover:bg-seagreen-300 hover:box-border hover:border-[1px] hover:border-solid hover:border-seagreen-100">
                  <div className="flex-1 relative text-base tracking-[1.25px] leading-[24px] uppercase font-semibold font-qanelas-soft text-seagreen-200 text-right whitespace-nowrap">
                    View deal
                  </div>
                </button>
                <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gainsboro-100" />
                <div className="relative leading-[20px] inline-block min-w-[75px]">
                  15-03-2024
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
