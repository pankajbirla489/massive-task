import { useMemo } from "react";

const FrameComponent = ({
  investorUpdate,
  propAlignSelf,
  propFlex,
  propMinWidth,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flex: propFlex,
    };
  }, [propAlignSelf, propFlex]);

  const investorUpdateStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full text-left text-lg text-gray-400 font-montserrat"
      style={frameDivStyle}
    >
      <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
        <button className="cursor-pointer [border:none] py-1 px-4 bg-whitesmoke-100 rounded-3xl flex flex-row items-center justify-center whitespace-nowrap hover:bg-lightgray">
          <div
            className="relative text-sm leading-[16px] font-medium font-qanelas-soft text-darkslategray-200 text-left inline-block min-w-[97px]"
            style={investorUpdateStyle}
          >
            {investorUpdate}
          </div>
        </button>
        <img
          className="h-6 w-6 relative min-h-[24px]"
          alt=""
          src="/more-vert.svg"
        />
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[12px] max-w-full">
        <img
          className="h-16 w-16 relative rounded-29xl overflow-hidden shrink-0 object-cover"
          loading="lazy"
          alt=""
          src="/frame-159825@2x.png"
        />
        <div className="flex-1 flex flex-col items-start justify-start gap-[4px] min-w-[404px] max-w-full mq750:min-w-full">
          <div className="self-stretch relative leading-[24px] font-semibold">
            Ace Green Recycling
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[409px] pl-0 gap-[4px] text-sm text-darkslategray-200 mq750:flex-wrap mq750:pr-[204px] mq750:box-border mq450:pr-5 mq450:box-border">
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
    </div>
  );
};

export default FrameComponent;
